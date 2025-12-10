import { Inject, Injectable } from '@nestjs/common';
import { CreateDictCourseTypeDto } from './dto/create-course-type.dto';
import { UpdateCourseTypeDto } from './dto/update-course-type.dto';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { PrismaClient } from 'prisma/client/postgresql';
import { FeatureAdapter } from '@/modules/features.interface';

@Injectable()
export class CourseTypesService implements FeatureAdapter {
  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}
  create(createCourseTypeDto: CreateDictCourseTypeDto) {
    return this.prismaClient.dictCouponType.create({
      data: createCourseTypeDto,
    });
  }

  async find(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.prismaClient.dictCourseType.count({});

    let data;

    if (limit === -1) {
      data = this.prismaClient.dictCourseType.findMany({});
    } else {
      data = await this.prismaClient.dictCourseType.findMany({
        skip,
        take: limit,
      });
    }

    return {
      records: data,
      pagination: {
        total: count,
        current: page,
        size: limit,
        pages: Math.ceil(count / limit),
      },
    };
  }

  findOne(id: number) {
    return this.prismaClient.dictCourseType.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCourseTypeDto: UpdateCourseTypeDto) {
    return this.prismaClient.dictCourseType.update({
      where: { id },
      data: updateCourseTypeDto,
    });
  }

  remove(id: number) {
    return this.prismaClient.dictCouponType.delete({
      where: { id },
    });
  }
}
