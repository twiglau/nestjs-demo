import { Inject, Injectable } from '@nestjs/common';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { Prisma, PrismaClient } from 'prisma/client/postgresql';

@Injectable()
export class AttachmentService {
  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}
  create(dto: CreateAttachmentDto) {
    const { attributes, ...restData } = dto;
    const attributeArray: any = [];
    // 如果用户传递了 attributes
    if (attributes && attributes instanceof Array && attributes.length) {
      for (const attr of attributes) {
        const dictObj = {};

        const { dict, ...restAttrData } = attr;
        // 判断是否有传递 dict 属性 -> type name 是否存在于dict表中
        let whereCond: any;

        // 如果存在， 则并联创建对应的attachmentAttribute
        // 如果不存在，则先创建dict表属性，再创建对应的attachmentAttribute
        if (dict) {
          const { id, name, type } = dict;
          if (id) {
            whereCond = { id };
          } else {
            // 复合字段查询，对应schema中的@@unique
            whereCond = {
              type_name: { name, type },
            };
          }
          dictObj['DictAttribute'] = {
            connectOrCreate: {
              where: whereCond,
              create: dict,
            },
          };
        }

        attributeArray.push({
          ...restAttrData,
          ...dictObj,
        });
      }
    }
    return this.prismaClient.attachment.create({
      data: {
        ...restData,
        AttachmentAttribute: {
          create: attributeArray,
        },
      } as Prisma.AttachmentUncheckedCreateInput,
      include: {
        AttachmentAttribute: true,
      },
    });
  }

  async find(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.prismaClient.attachment.count({});

    let data;
    if (limit === -1) {
      data = await this.prismaClient.attachment.findMany({
        include: { AttachmentAttribute: true },
      });
    } else {
      data = await this.prismaClient.attachment.findMany({
        skip,
        take: limit,
        include: { AttachmentAttribute: true },
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
    return this.prismaClient.attachment.findUnique({
      where: { id },
      include: {
        AttachmentAttribute: true,
      },
    });
  }

  update(id: number, updateAttachmentDto: UpdateAttachmentDto) {
    return this.prismaClient.attachment.update({
      where: { id },
      data: updateAttachmentDto,
    });
  }

  remove(id: number) {
    return this.prismaClient.$transaction(async (prisma: PrismaClient) => {
      // 删除关联关系
      await prisma.attachmentAttribute.deleteMany({
        where: {
          attachmentId: id,
        },
      });
      // 删除附件
      return prisma.attachment.delete({
        where: { id },
      });
    });
  }
}
