import { PartialType } from '@nestjs/swagger';
import { CreateDictAttachmentAttributeDto } from './create-attachment-attribute.dto';

export class UpdateAttachmentAttributeDto extends PartialType(
  CreateDictAttachmentAttributeDto,
) {}
