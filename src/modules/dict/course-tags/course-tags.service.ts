import { Inject, Injectable } from '@nestjs/common';
import { CreateDictCourseTagDto } from './dto/create-course-tag.dto';
import { UpdateCourseTagDto } from './dto/update-course-tag.dto';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { PrismaClient } from 'prisma/client/postgresql';
import { FeatureAdapter } from '@/modules/features.interface';

@Injectable()
export class CourseTagsService implements FeatureAdapter {
  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}
  async create(createCourseTagDto: CreateDictCourseTagDto) {
    const { typeId, type, ...restData } = createCourseTagDto;

    const whereCond = typeId ? { id: typeId } : { name: type?.name };
    let typeData: any = type;
    if (typeId) {
      typeData = await this.prismaClient.dictCourseType.findUnique({
        where: { id: typeId },
      });
    }

    const courseType = typeData
      ? {
          CourseType: {
            connectOrCreate: {
              where: { ...whereCond },
              create: typeData,
            },
          },
        }
      : {};

    return this.prismaClient.dictCourseTag.create({
      data: {
        ...restData,
        ...courseType,
      },
    });
  }

  async find(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.prismaClient.dictCourseTag.count({});
    let data;
    if (limit === -1) {
      data = await this.prismaClient.dictCourseTag.findMany({});
    } else {
      data = await this.prismaClient.dictCourseTag.findMany({
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
    return this.prismaClient.dictCourseTag.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCourseTagDto: UpdateCourseTagDto) {
    return this.prismaClient.dictCourseTag.update({
      where: { id },
      data: updateCourseTagDto,
    });
  }

  remove(id: number) {
    return this.prismaClient.dictCourseTag.delete({
      where: { id },
    });
  }
}
