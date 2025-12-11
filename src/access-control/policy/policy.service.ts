import { Inject, Injectable } from '@nestjs/common';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { PrismaClient } from 'prisma/client/postgresql';
import { CreatePolicyPermissionDto } from './dto/create-policy-permission.dto';
import { buildWhereClause } from '@/utils/build-where';
import { or } from '@ucast/mongo2js';
import { UpdatePolicyPermissionDto } from './dto/update-policy-permission.dto';

@Injectable()
export class PolicyService {
  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}
  create(createPolicyDto: CreatePolicyDto) {
    const encode = Buffer.from(JSON.stringify(createPolicyDto)).toString(
      'base64',
    );
    return this.prismaClient.policy.create({
      data: { ...createPolicyDto, encode },
    });
  }

  async createPolicyWithPermission(dto: CreatePolicyPermissionDto) {
    const encode = Buffer.from(JSON.stringify(dto)).toString('base64');
    return this.prismaClient.$transaction(async (prisma: PrismaClient) => {
      const { permissions = [], ...restData } = dto;
      const policyPermissions = {
        create: this._createPermissions(permissions),
      };

      return prisma.policy.create({
        data: { ...restData, encode, PermissionPolicy: policyPermissions },
        include: { PermissionPolicy: true },
      });
    });
  }

  async find(
    page: number = 1,
    limit: number = 10,
    {
      action = '',
      effect = '',
      subject = '',
    }: { action?: string; effect?: string; subject?: string },
  ) {
    const skip = (page - 1) * limit;
    const whereCond = {
      ...buildWhereClause({ action, effect }),
      subject: subject ? { contains: subject } : {},
    };

    const count = await this.prismaClient.policy.count({ where: whereCond });
    const policies = await this.prismaClient.policy.findMany({
      where: whereCond,
      skip,
      take: limit,
      include: { PermissionPolicy: true, RolePolicy: true },
    });

    return {
      records: policies,
      total: count,
      page,
      size: limit,
      pages: Math.ceil(count / limit),
    };
  }

  findOne(id: number) {
    return this.prismaClient.policy.findUnique({
      where: { id },
      include: { PermissionPolicy: true, RolePolicy: true },
    });
  }

  update(id: number, updatePolicyDto: UpdatePolicyDto) {
    return this.prismaClient.policy.update({
      where: { id },
      data: { ...updatePolicyDto },
    });
  }
  updatePolicyPermission(id: number, dto: UpdatePolicyPermissionDto) {
    const { permissionIds } = dto;

    return this.prismaClient.$transaction(async (prisma: PrismaClient) => {
      await prisma.permissionPolicy.deleteMany({
        where: { policyId: id },
      });
      const validPermissionIds: number[] = [];
      for (const pId of permissionIds) {
        const permission = await prisma.permission.findUnique({
          where: { id: pId },
        });
        if (permission) {
          validPermissionIds.push(pId);
        }
      }
      await prisma.permissionPolicy.createMany({
        data: validPermissionIds.map((permissionId) => ({
          policyId: id,
          permissionId,
        })),
      });

      return prisma.policy.findUnique({
        where: { id },
        include: { PermissionPolicy: true },
      });
    });
  }

  remove(id: number) {
    return this.prismaClient.policy.delete({
      where: { id },
    });
  }

  private _createPermissions(permissions: any[]) {
    return permissions.map((o) => ({
      permission: {
        connectOrCreate: {
          where: {
            name: o.name,
          },
          create: { ...o },
        },
      },
    }));
  }
}
