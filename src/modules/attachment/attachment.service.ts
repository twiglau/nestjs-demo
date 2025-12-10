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

  find(page: number, limit: number) {
    return `This action returns all attachment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attachment`;
  }

  update(id: number, updateAttachmentDto: UpdateAttachmentDto) {
    return `This action updates a #${id} attachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} attachment`;
  }
}
