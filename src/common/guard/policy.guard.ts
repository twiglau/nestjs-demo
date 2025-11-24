import {
  CaslAbilityService,
  IPolicy,
} from '@/access-control/policy/casl-ability.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { PermissionService } from '@/access-control/permission/permission.service';
import { UserRepository } from '@/user/user.repository';
import { RoleService } from '@/access-control/role/role.service';
import { PERMISSION_KEY } from '../decorators/role-permission.decorator';
import { ConfigEnum } from '../enum/config.enum';
import { SharedService } from '@/modules/shared/shared.service';
import { User } from '@/user/user.entity';
import { plainToInstance } from 'class-transformer';

const mapSubjectToClass = (subject: string) => {
  switch (subject.toLocaleLowerCase()) {
    case 'user':
      return User;
    default:
      return subject;
  }
};
@Injectable()
export class PolicyGuard implements CanActivate {
  constructor(
    private caslAbilityService: CaslAbilityService,
    private reflector: Reflector,
    private configService: ConfigService,
    private permissionService: PermissionService,
    private userRepository: UserRepository,
    private roleService: RoleService,
    private sharedService: SharedService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 通过 caslAbilityService 获取用户已有权限的实例
    // 通过 ability 实例上的 can, cannot 来判断用户是否有对应的权限
    // 接口权限 -> Policy 进行关联
    // 读取数据库中的接口关联的Policy与上面的ability之间逻辑判断
    // 从而对数据库实现数据权限控制

    const classPermissions = this.reflector.get<string[]>(
      PERMISSION_KEY,
      context.getClass(),
    );

    const handlerPermissions = this.reflector.get<string[]>(
      PERMISSION_KEY,
      context.getHandler(),
    );

    const cls =
      classPermissions instanceof Array
        ? classPermissions.join('')
        : classPermissions;

    const handler =
      handlerPermissions instanceof Array
        ? handlerPermissions.join('')
        : handlerPermissions;

    // 1. 获取 permission name: 装饰器 handler&class
    const personal_right = `${cls}:${handler}`;
    // 2. 获取 policy: 通过 permission
    const permissionPolicy =
      await this.permissionService.findByName(personal_right);

    // 3. 缩小范围：policy -> subjects -> 缩小PermissionPolicy的查询范围
    const subjects = permissionPolicy?.PermissionPolicy.map(
      (p) => p.policy.subject,
    );
    // 4. username -> User -> policy & subjects 用户已分配接口权限
    const req = context.switchToHttp().getRequest();
    const { username } = req.user;
    const user = await this.userRepository.findOne(username);
    if (!user) {
      return false;
    }

    const roleIds = user?.UserRole.map((role) => role.roleId);
    const rolePolicies: any[] = await this.roleService.findAllByIds(roleIds);

    // 判断是否在白名单
    const roleWhiteList = this.configService.get(ConfigEnum.ROLE_WHITELIST);
    if (roleWhiteList) {
      const whiteListArr = roleWhiteList.split(',')?.map(Number);
      if (whiteListArr.some((w) => roleIds?.includes(w))) {
        return true;
      }
    }

    const policies: IPolicy[] = rolePolicies.reduce((acc, cur) => {
      const rolePolicy = cur.RolePolicy?.filter((p) => {
        return subjects?.includes(p.policy.subject);
      });
      acc.push(...rolePolicy.map((r) => r.policy));

      return acc;
    }, []);

    // 挂载信息
    delete user.password;
    user.RolePolicy = rolePolicies;
    user.policies = policies;
    user.roleIds = roleIds;
    user.permissions = user.UserRole.reduce((acc, cur) => {
      return [...acc, ...cur.role.RolePermissions];
    }, []);

    const abilities = this.caslAbilityService.buildAbility(policies, [
      user,
      req,
      this.reflector,
    ]);

    if (policies.length === 0) {
      return true;
    }

    let allPermissionGranted = true;
    const tempPermissionPolicy = [...permissionPolicy!.PermissionPolicy];
    for (const p of [...tempPermissionPolicy]) {
      const { action, subject, fields } = p.policy;
      let permissionGranted = false;

      for (const ability of abilities) {
        const data = await this.sharedService.getSubject(subject, user);
        const subjectTemp = mapSubjectToClass(subject);
        const subjectObj =
          typeof subjectTemp === 'string'
            ? subjectTemp
            : plainToInstance(subjectTemp, data);

        // 用户：角色上权限，是否能通过 权限的配置
        if (fields) {
          if (Array.isArray(fields)) {
            if ((fields as any)?.length > 0) {
              permissionGranted = fields.every((field) => {
                return ability.can(action, subjectObj, field as string);
              });
            } else {
              permissionGranted = ability.can(action, subjectObj);
            }
          } else if (fields['data']) {
            permissionGranted = fields['data'].every((field) =>
              ability.can(action, subjectObj, field),
            );
          }
        } else {
          permissionGranted = ability.can(action, subjectObj);
        }

        if (permissionGranted) {
          break;
        }
      }

      if (permissionGranted) {
        const idx = tempPermissionPolicy.indexOf(p);
        if (idx >= 0) {
          tempPermissionPolicy.splice(idx, 1);
        }
      }
    }

    if (tempPermissionPolicy.length !== 0) {
      allPermissionGranted = false;
    }

    return allPermissionGranted;
  }
}
