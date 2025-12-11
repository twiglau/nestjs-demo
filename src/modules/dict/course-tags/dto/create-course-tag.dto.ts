import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { CreateDictCourseTypeDto } from '../../course-types/dto/create-course-type.dto';
import { Type } from 'class-transformer';

export class CreateDictCourseTagDto {
  @IsNotEmpty()
  @IsString()
  @ValidateIf((o) => !o.id)
  name: string; // 标签名称

  @IsOptional()
  @IsInt()
  @ValidateIf((o) => !o.id)
  typeId?: number; // 分类ID, 对应 dict_course_types 表

  @IsOptional()
  @IsInt()
  @ValidateIf((o) => !o.id)
  order: number = 1000; // 排序， 默认为 1000

  @IsInt()
  @IsOptional()
  @ValidateIf((o) => !o.id)
  status: number = 0; // 是否禁用， 0 -未禁用， 1-已禁用。默认为 未禁用

  @Type(() => CreateDictCourseTypeDto)
  @IsOptional()
  @ValidateIf((o) => !o.typeId || !o.id)
  @ValidateNested({ each: true })
  type?: CreateDictCourseTypeDto;
}

export class CreateDictCourseTagsDto extends CreateDictCourseTagDto {
  @IsOptional()
  @IsInt()
  id?: number;
}
