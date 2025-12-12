import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDictCourseTagsDto } from '@/modules/dict/course-tags/dto/create-course-tag.dto';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title: string; // 标签

  @IsOptional()
  @IsString()
  subTitle?: string; // 子标题

  @IsOptional()
  @IsString()
  desc?: string; // 描述信息

  @IsOptional()
  @IsNumber()
  coverId?: number; // 课程封面ID

  @IsNotEmpty()
  @IsNumber()
  authorId: number; // 作者ID

  @IsNotEmpty()
  @IsNumber()
  originPrice?: number; // 初始价格

  @IsOptional()
  @IsNumber()
  price?: number; // 现售价格

  @IsOptional()
  @IsInt()
  status: number = 0; // 是否上架，默认未上架

  @IsOptional()
  @IsInt()
  counts: number = 0; // 购买计数初始值

  @IsOptional()
  @IsNumber()
  order: number = 1000; // 排序

  @IsOptional()
  @IsString()
  detail?: string; // 关联markdown详情页

  @IsOptional()
  @IsArray()
  type?: string; // 分类 project 等

  @IsOptional()
  @IsArray()
  @Type(() => CreateDictCourseTagsDto)
  @ValidateNested({ each: true })
  tags?: CreateDictCourseTagsDto[];
}
