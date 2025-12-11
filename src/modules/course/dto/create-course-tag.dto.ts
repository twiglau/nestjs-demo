import { CreateDictCourseTagsDto } from '@/modules/dict/course-tags/dto/create-course-tag.dto';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsOptional,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

export class CreateCourseTagDto {
  @IsInt()
  courseId: number;

  @IsOptional()
  @IsInt()
  @ValidateIf((o) => !o.tags)
  tagId?: number;

  // 1. 标签不存在（id 或者 name 来判断，type)
  // 2. 标签已存在
  @IsOptional()
  @ValidateIf((o) => !o.tagId)
  @Type(() => CreateDictCourseTagsDto)
  @ValidateNested({ each: true })
  @IsArray()
  tags: CreateDictCourseTagsDto[];
}
