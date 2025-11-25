import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEY } from '../decorators/role-permission.decorator';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from 'prisma/client/postgresql';
import { PRISMA_DATABASE } from '@/database/database-constants';

@Injectable()
export class RolePermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(PRISMA_DATABASE) private prismaClient: PrismaClient,
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
    const { id, username } = req.user;
    const user = await this.prismaClient.user.findUnique({
      where: { id: id, username },
      include: {
        UserRole: {
          include: {
            role: {
              include: {
                RolePermissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!user) {
      return false;
    }
    // 如果是 whiteList 中的用户对应的roleId,直接返回true
    const roleIds = user.UserRole.map((o) => o.roleId) || [];
    const whiteList = this.configService.get('ROLE_ID_WHITELIST');
    if (whiteList) {
      const whiteListArr = whiteList.split(',')?.map(Number);
      if (whiteListArr.some((o) => roleIds.includes(o))) {
        return true;
      }
    }
    // 再对照权限
    const rolePermissions = await this.prismaClient.role.findMany({
      where: {
        id: {
          in: roleIds,
        },
      },
      include: {
        RolePermissions: {
          include: {
            permission: true,
          },
        },
      },
    });

    const permissionsArr = rolePermissions
      ?.map((o) => o.RolePermissions.map((e) => e.permission.name))
      .reduce((acc, cur) => {
        // 需要对结果进行去重
        return [...new Set([...acc, ...cur])];
      }, []);

    return permissionsArr.includes(personal_right);
  }
}
