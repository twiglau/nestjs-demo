import { Inject, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { FeatureAdapter } from '../features.interface';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { PrismaClient } from 'prisma/client/postgresql';
import { UpdateCourseTagDto } from './dto/update-course-tag.dto';
import { CreateCourseTagDto } from './dto/create-course-tag.dto';

// 课程 -> 标签 -> 分类 三层嵌套关系
// 课程 -> 内容 -> 评论 三层嵌套关系
@Injectable()
export class CourseService implements FeatureAdapter {
  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}
  async create(dto: CreateCourseDto) {
    const { tags, ...restData } = dto;
    return this.prismaClient.$transaction(async (prisma: PrismaClient) => {
      const course = await prisma.course.create({
        data: {
          ...restData,
        },
      });

      if (tags && tags instanceof Array && tags.length > 0) {
        const dto: CreateCourseTagDto = {
          courseId: course.id,
          tags,
        };
        await this.createTag(dto, prisma);
        return prisma.course.findUnique({
          where: { id: course.id },
          include: {
            Tags: { include: { Tag: true } },
          },
        });
      }

      return course;
    });
  }

  async find(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const count = await this.prismaClient.course.count({});
    let data;
    if (limit === -1) {
      data = await this.prismaClient.course.findMany({});
    } else {
      data = await this.prismaClient.course.findMany({
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
    return this.prismaClient.course.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateCourseDto) {
    return this.prismaClient.course.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prismaClient.course.delete({
      where: { id },
    });
  }

  updateTag(dto: UpdateCourseTagDto) {
    return this.prismaClient.$transaction(async (prisma: PrismaClient) => {
      await prisma.courseTag.deleteMany({
        where: { courseId: dto.courseId },
      });
      return this.createTag(dto as CreateCourseTagDto, prisma);
    });
  }
  findAllTag(courseId: number) {
    return this.prismaClient.courseTag.findMany({
      where: { courseId },
      include: { Tag: { include: { CourseType: true } } },
    });
  }
  deleteTag(courseId: number, tagId: number) {
    if (tagId) {
      return this.prismaClient.courseTag.delete({
        where: {
          courseId_tagId: {
            courseId,
            tagId,
          },
        },
      });
    } else {
      return this.prismaClient.courseTag.deleteMany({
        where: { courseId },
      });
    }
  }

  // 1. 数据结构 是怎样的？
  // 2. 怎样去存放这些数据？
  async createTag(dto: CreateCourseTagDto, prismaInstance?: PrismaClient) {
    const { tagId, tags, courseId } = dto;

    if (tagId) {
      return (prismaInstance || this.prismaClient).courseTag.create({
        data: { tagId, courseId },
      });
    } else if (tags && tags instanceof Array && tags.length) {
      // 事务处理tags的存入
      return (prismaInstance || this.prismaClient).$transaction(
        async (prisma: PrismaClient) => {
          // tags: [{id: 2}, {id: 1}] -> 已知tagId, 批量设置course关联表
          const existTagIds = tags
            .filter((o) => o.id)
            .map((o) => o.id) as number[];
          let withoutIdTags = tags.filter((o) => !o.id);

          // tags: [{name: 'x'}, {name: 'y'}]
          const withoutIdTagNames = withoutIdTags.map((o) => o.name);
          const existTags = await prisma.dictCourseTag.findMany({
            where: {
              name: { in: withoutIdTagNames },
            },
          });

          if (existTags && existTags.length) {
            // 往已知id的数据，补充推送，查询出来同名[name]的tagId数据
            existTagIds.push(...existTags.map((o) => o.id));

            // 有设置了name, 但是没有设置id的情况
            const tagsArr = withoutIdTags.filter(
              (o) => !existTags.find((e) => e.name === o.name),
            );
            // 重新设置，需要新增的tag数据
            withoutIdTags = tagsArr;
          }

          const res: any = {};

          if (existTagIds.length > 0) {
            // 直接批量创建 已知tagId与courseId的情况
            res['exist'] = await prisma.courseTag.createMany({
              data: existTagIds.map((o) => ({
                tagId: o,
                courseId,
              })),
            });
          }

          if (withoutIdTags.length > 0) {
            // 需要创建 -> dictType
            const newTags = await Promise.all(
              withoutIdTags.map((tag) => {
                const { type, ...restTagData } = tag;
                let tagType = {};
                if (type) {
                  tagType = {
                    CourseType: {
                      connectOrCreate: {
                        where: { name: type.name },
                        create: { ...type },
                      },
                    },
                  };
                }

                return prisma.dictCourseTag.create({
                  data: {
                    ...restTagData,
                    ...tagType,
                  },
                });
              }),
            );

            // create
            res['create'] = await prisma.courseTag.createMany({
              data: newTags.map((o) => ({
                tagId: o.id,
                courseId,
              })),
            });
          }

          return res;
        },
      );
    }
  }
}
