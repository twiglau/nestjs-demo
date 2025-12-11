import { PRISMA_DATABASE } from '@/database/database-constants';
import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/client/postgresql';
import { CreatePermissionDto } from './dto/create-premission.dto';
import { updatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionService {
  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}

  async create(createPermissionDto: CreatePermissionDto) {
    const createPermissionPolicy = (policies) => {
      return {
        create: policies?.map((policy) => {
          let whereCondition;
          if (policy.id) {
            whereCondition = { id: policy.id };
          } else {
            const encode = Buffer.from(JSON.stringify(policy)).toString(
              'base64',
            );
            whereCondition = { encode };
            policy.encode = encode;
          }
          return {
            policy: {
              connectOrCreate: {
                where: whereCondition,
                create: {
                  ...policy,
                },
              },
            },
          };
        }),
      };
    };
    return await this.prismaClient.$transaction(
      async (prisma: PrismaClient) => {
        const { policies, ...restData } = createPermissionDto;
        return prisma.permission.create({
          data: {
            ...restData,
            PermissionPolicy: createPermissionPolicy(policies),
          },
        });
      },
    );
  }

  findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    return this.prismaClient.permission.findMany({
      skip,
      take: limit,
    });
  }

  findOne(id: number) {
    return this.prismaClient.permission.findUnique({
      where: { id },
    });
  }
  findByName(name: string) {
    return this.prismaClient.permission.findUnique({
      where: { name },
      include: {
        PermissionPolicy: {
          include: {
            policy: true,
          },
        },
      },
    });
  }

  async update(id: number, updatePermissionDto: updatePermissionDto) {
    const { policies, ...restData } = updatePermissionDto;
  }

  remove(id: number) {
    return this.prismaClient.permission.delete({
      where: { id },
    });
  }

  updatPermissionWithPolicy(id: number, policyIds: number[] = []) {
    return this.prismaClient.$transaction(async (prisma: PrismaClient) => {
      // 先删除PermissionPolicy关联表中历史关系
      await prisma.permissionPolicy.deleteMany({
        where: {
          permissionId: id,
        },
      });
      // 再创建新的关联关系
      const validIds: number[] = [];
      for (const policyId of policyIds) {
        const policy = await prisma.policy.findUnique({
          where: { id: policyId },
        });
        if (policy) {
          validIds.push(policyId);
        }
      }
      await prisma.permissionPolicy.createMany({
        data: validIds.map((policyId) => ({
          permissionId: id,
          policyId,
        })),
      });

      // 返回更新后的权限
      return prisma.permission.findUnique({
        where: { id },
        include: {
          PermissionPolicy: {
            include: {
              policy: true,
            },
          },
        },
      });
    });
  }

  private _createPolicies(policies: any[]) {
    return policies.map((policy) => {
      let whereCondition;
      if (policy.id) {
        whereCondition = { id: policy.id };
      } else {
        const encode = Buffer.from(JSON.stringify(policy)).toString('base64');
        whereCondition = { encode };
        policy.encode = encode;
      }
      return {
        policy: {
          connectOrCreate: {
            where: whereCondition,
            create: {
              ...policy,
            },
          },
        },
      };
    });
  }
}
