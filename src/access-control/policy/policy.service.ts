import { Inject, Injectable } from '@nestjs/common';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { PrismaClient } from 'prisma/client/postgresql';

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

  findAll(page: number = 1, limit: number = 10) {
    return this.prismaClient.policy.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  findOne(id: number) {
    return this.prismaClient.policy.findUnique({ where: { id } });
  }

  update(id: number, updatePolicyDto: UpdatePolicyDto) {
    return this.prismaClient.policy.update({
      where: { id },
      data: { ...updatePolicyDto },
    });
  }

  remove(id: number) {
    return this.prismaClient.policy.delete({
      where: { id },
    });
  }
}
