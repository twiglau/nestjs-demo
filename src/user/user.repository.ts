import { Inject, Optional } from '@nestjs/common';
import { UserAdapter } from './user.interface';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';
import { UserMongooseRepository } from './repository/user.mongoose.repository';
import { UserTypeormRepository } from './repository/user.typeorm.repository';
import { UserPrismaRepository } from './repository/user.prisma.repository';

import * as argon2 from 'argon2';

export class UserRepository implements UserAdapter {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    @Optional() private userMongooseRepository: UserMongooseRepository,
    @Optional() private userTypeormRepository: UserTypeormRepository,
    @Optional() private userPrismaRepository: UserPrismaRepository,
  ) {}
  findAll(page: number = 1, limit: number = 10): Promise<any[]> {
    const client = this.getRepository();
    return client.findAll(page, limit);
  }
  findOne(username: string): Promise<any> {
    const client = this.getRepository();
    return client.findOne(username);
  }
  async create(userObj: any): Promise<any> {
    const client = this.getRepository();
    // 对密码加密
    userObj.password = await argon2.hash(userObj.password);
    return client.create(userObj);
  }
  update(userObj: any): Promise<any> {
    const client = this.getRepository();
    return client.update(userObj);
  }
  delete(id: string): Promise<any> {
    const client = this.getRepository();
    return client.delete(id);
  }

  getRepository(): UserAdapter {
    const headers = this.request.headers;
    const tenantId = headers['x-tenant-id'] || 'default';

    if (tenantId === 'mongo' || tenantId === 'mongo1') {
      return this.userMongooseRepository;
    } else if (
      tenantId === 'typeorm1' ||
      tenantId === 'typeorm2' ||
      tenantId === 'typeorm3'
    ) {
      return this.userTypeormRepository;
    } else if (tenantId === 'prisma1' || tenantId === 'prisma2') {
      return this.userPrismaRepository;
    } else {
      return this.userPrismaRepository;
    }
  }
}
