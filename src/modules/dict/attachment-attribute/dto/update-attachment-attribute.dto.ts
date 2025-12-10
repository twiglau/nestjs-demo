import { PartialType } from '@nestjs/swagger';
import { CreateAttachmentAttributeDto } from './create-attachment-attribute.dto';

export class UpdateAttachmentAttributeDto extends PartialType(CreateAttachmentAttributeDto) {}
