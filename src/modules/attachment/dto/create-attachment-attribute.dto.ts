import { CreateDictAttachmentAttributeDto } from '@/modules/dict/attachment-attribute/dto/create-attachment-attribute.dto';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

export class CreateAttachmentAttributeDto {
  @IsOptional()
  @IsInt()
  attachmentId?: number; // 对应 Attachment的ID

  @IsOptional()
  @IsInt()
  attributeId?: number; // 对应 DictAttachmentAttribute的ID

  @IsString()
  value: string; // 该属性的值

  @IsString()
  @IsOptional()
  desc?: string; // 补充描述

  @Type(() => CreateDictAttachmentAttributeDto)
  @ValidateIf((o) => !o.attributeId) // 如果传 attributeId, 就不需要校验 dict 了。
  @ValidateNested({ each: true })
  @IsOptional()
  dict?: CreateDictAttachmentAttributeDto;
}
