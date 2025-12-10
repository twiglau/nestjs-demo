import { AttachmentTypeEnum, OssTypeEnum } from '@/common/enum/module.enum';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAttachmentAttributeDto } from './create-attachment-attribute.dto';
import { Type } from 'class-transformer';

export class CreateAttachmentDto {
  @IsEnum(AttachmentTypeEnum)
  @IsOptional()
  type?: AttachmentTypeEnum; // 分类， 例如： text, image, audio, video

  @IsString()
  @IsOptional()
  location?: string; // 存储路径

  @IsString()
  @IsOptional()
  name?: string; // 资源名称

  @IsEnum(OssTypeEnum)
  @IsOptional()
  ossType?: OssTypeEnum; // OSS类型

  @IsInt()
  @IsNotEmpty()
  userId: number; // 作者ID

  @IsInt()
  @IsOptional()
  status: number = 0; // 是否禁用，默认未使用

  @IsString()
  @IsOptional()
  desc?: string; //补充描述

  @Type(() => CreateAttachmentAttributeDto)
  @ValidateNested({ each: true })
  @IsOptional()
  attributes?: CreateAttachmentAttributeDto[];
}
