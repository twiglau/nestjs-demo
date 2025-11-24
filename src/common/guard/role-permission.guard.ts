import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEY } from '../decorators/role-permission.decorator';
import { UserRepository } from '@/user/user.repository';
import { RoleService } from '@/access-control/role/role.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RolePermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userRepository: UserRepository,
    private roleService: RoleService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 拿到自定义的权限，元信息
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

    const personal_right = `${cls}:${handler}`;

    const req = context.switchToHttp().getRequest();
    const { username } = req.user;
    const user = await this.userRepository.findOne(username);

    if (!user) {
      return false;
    }
    // 如果是 whiteList 中的用户对应的roleId,直接返回true
    const roleIds = user.UserRole.map((o) => o.roleId);
    const whiteList = this.configService.get('ROLE_ID_WHITELIST');
    if (whiteList) {
      const whiteListArr = whiteList.split(',');
      if (whiteListArr.some((o) => roleIds.includes(+o))) {
        return true;
      }
    }
    // 再对照权限
    const permissions = await this.roleService.findAllByIds(
      user.UserRole.map((ele) => ele.roleId),
    );
    const permissionsArr = permissions
      .map((o) => o.RolePermissions.map((e) => e.permission.name))
      .reduce((acc, cur) => {
        // 需要对结果进行去重
        return [...new Set([...acc, ...cur])];
      }, []);

    return permissionsArr.includes(personal_right);
  }
}
