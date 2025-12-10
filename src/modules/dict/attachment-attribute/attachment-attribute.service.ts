import { Injectable } from '@nestjs/common';
import { CreateAttachmentAttributeDto } from './dto/create-attachment-attribute.dto';
import { UpdateAttachmentAttributeDto } from './dto/update-attachment-attribute.dto';

@Injectable()
export class AttachmentAttributeService {
  create(createAttachmentAttributeDto: CreateAttachmentAttributeDto) {
    return 'This action adds a new attachmentAttribute';
  }

  findAll() {
    return `This action returns all attachmentAttribute`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attachmentAttribute`;
  }

  update(id: number, updateAttachmentAttributeDto: UpdateAttachmentAttributeDto) {
    return `This action updates a #${id} attachmentAttribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} attachmentAttribute`;
  }
}
