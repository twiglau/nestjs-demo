import { Inject, Injectable } from '@nestjs/common';
import { CreateDictAttachmentAttributeDto } from './dto/create-attachment-attribute.dto';
import { UpdateAttachmentAttributeDto } from './dto/update-attachment-attribute.dto';
import { FeatureAdapter } from '@/modules/features.interface';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { PrismaClient } from 'prisma/client/postgresql';

@Injectable()
export class AttachmentAttributeService implements FeatureAdapter {
  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}
  create(dto: CreateDictAttachmentAttributeDto) {
    return this.prismaClient.dictAttachmentAttribute.create({
      data: dto,
    });
  }
  createMany(dto: CreateDictAttachmentAttributeDto[]) {
    return this.prismaClient.dictAttachmentAttribute.createMany({
      data: dto,
    });
  }

  async find(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.prismaClient.dictAttachmentAttribute.count({});
    let data;
    if (limit === -1) {
      data = await this.prismaClient.dictAttachmentAttribute.findMany({});
    } else {
      data = await this.prismaClient.dictAttachmentAttribute.findMany({
        skip,
        take: limit,
      });
    }

    const res: IResList = {
      records: data,
      pagination: {
        total: count,
        current: page,
        size: limit,
        pages: Math.ceil(count / limit),
      },
    };
    return res;
  }

  findOne(id: number) {
    return this.prismaClient.dictAttachmentAttribute.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateAttachmentAttributeDto) {
    return this.prismaClient.dictAttachmentAttribute.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prismaClient.dictAttachmentAttribute.delete({
      where: { id },
    });
  }
}
