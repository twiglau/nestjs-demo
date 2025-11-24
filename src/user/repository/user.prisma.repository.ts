import { Inject } from '@nestjs/common';
import { UserAdapter } from '../user.interface';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { PrismaClient } from 'prisma-postgresql';
import { ConfigService } from '@nestjs/config';

import * as argon2 from 'argon2';

export class UserPrismaRepository implements UserAdapter {
  constructor(
    @Inject(PRISMA_DATABASE) private readonly prismaClient: PrismaClient,
    private configService: ConfigService,
  ) {}

  findAll(page: number = 1, limit: number = 10): Promise<any[]> {
    const skip = (page - 1) * limit;
    return this.prismaClient.user.findMany({ skip, take: limit });
  }

  findOne(username: string): Promise<any> {
    return this.prismaClient.user.findUnique({
      where: { username },
      // include 包含所有的字段
      include: {
        UserRole: {
          include: {
            role: {
              include: {
                RolePermissions: true,
              },
            },
          },
        },
      },
    });
  }

  async create(userObj: any): Promise<any> {
    // 读取当前用户的角色id
    const defaultRoleId = +this.configService.get('DEFAULT_ROLE_ID');

    return await this.prismaClient.$transaction(async (prisma) => {
      const roleIds =
        userObj && userObj?.roleIds ? userObj.roleIds : [defaultRoleId];
      // 判断角色是否在数据库中
      const validateRoleIds: any[] = [];

      for (const roleId of roleIds) {
        const role = await prisma.role.findUnique({
          where: { id: roleId },
        });
        if (role) validateRoleIds.push(roleId);
      }

      if (validateRoleIds.length === 0) {
        validateRoleIds.push(defaultRoleId);
      }
      if (userObj.roleIds) {
        delete userObj.roleIds;
      }

      return prisma.user.create({
        data: {
          ...userObj,
          UserRole: {
            create: validateRoleIds.map((roleId) => ({
              roleId,
            })),
          },
        },
      });
      // end
    });
  }
  async update(userObj: any): Promise<any> {
    return await this.prismaClient.$transaction(
      async (prisma: PrismaClient) => {
        const { id, username, password, roles, ...restUserInfo } = userObj;

        // 更新where条件
        const whereCondition = id ? { id } : { username };

        let updateData: any = {};
        if (password) {
          const newHashPass = await argon2.hash(password);
          updateData.password = newHashPass;
        }
        updateData = { ...updateData, ...restUserInfo };

        // 角色，权限的更新， 放置在前
        const roleIds: string[] = [];
        await Promise.all(
          roles.map(async (role) => {
            roleIds.push(role.id);

            const { permissions, ...restRole } = role;
            await prisma.role.update({
              where: { id: role.id },
              data: {
                ...restRole,
                RolePermissions: {
                  deleteMany: {}, // 先删除该角色之前所拥有的权限
                  create: (permissions || []).map((permission) => ({
                    permission: {
                      connectOrCreate: {
                        where: {
                          name: permission.name,
                        },
                        create: permission,
                      },
                    },
                  })),
                },
              },
            });
          }),
        );

        // 用户的更新， 放置在后
        const updateUser = await prisma.user.update({
          where: whereCondition,
          data: {
            ...updateData,
            UserRole: {
              deleteMany: {},
              create: roleIds.map((roleId) => ({ roleId })),
            },
          },
          include: {
            UserRole: true,
          },
        });

        return updateUser;
      },
    );
  }
  delete(id: string): Promise<any> {
    return this.prismaClient.user.delete({ where: { id: +id } });
  }
}
