import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { AttachmentAttributeService } from './attachment-attribute.service';
import { CreateDictAttachmentAttributeDto } from './dto/create-attachment-attribute.dto';
import { UpdateAttachmentAttributeDto } from './dto/update-attachment-attribute.dto';

@Controller('dict/attachment-attribute')
export class AttachmentAttributeController {
  constructor(
    private readonly attachmentAttributeService: AttachmentAttributeService,
  ) {}

  @Post()
  create(@Body() dto: CreateDictAttachmentAttributeDto) {
    if (Array.isArray(dto)) {
      return this.attachmentAttributeService.createMany(dto);
    }
    return this.attachmentAttributeService.create(dto);
  }

  @Get()
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('size', new ParseIntPipe({ optional: true })) size: number = 10,
  ) {
    return this.attachmentAttributeService.find(page, size);
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
