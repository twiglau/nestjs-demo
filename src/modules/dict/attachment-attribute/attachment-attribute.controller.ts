import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttachmentAttributeService } from './attachment-attribute.service';
import { CreateAttachmentAttributeDto } from './dto/create-attachment-attribute.dto';
import { UpdateAttachmentAttributeDto } from './dto/update-attachment-attribute.dto';

@Controller('dict/attachment-attribute')
export class AttachmentAttributeController {
  constructor(
    private readonly attachmentAttributeService: AttachmentAttributeService,
  ) {}

  @Post()
  create(@Body() createAttachmentAttributeDto: CreateAttachmentAttributeDto) {
    return this.attachmentAttributeService.create(createAttachmentAttributeDto);
  }

  @Get()
  findAll() {
    return this.attachmentAttributeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attachmentAttributeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttachmentAttributeDto: UpdateAttachmentAttributeDto,
  ) {
    return this.attachmentAttributeService.update(
      +id,
      updateAttachmentAttributeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attachmentAttributeService.remove(+id);
  }
}
