import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseTagsService } from './course-tags.service';
import { CreateCourseTagDto } from './dto/create-course-tag.dto';
import { UpdateCourseTagDto } from './dto/update-course-tag.dto';

@Controller('dict/course-tags')
export class CourseTagsController {
  constructor(private readonly courseTagsService: CourseTagsService) {}

  @Post()
  create(@Body() createCourseTagDto: CreateCourseTagDto) {
    return this.courseTagsService.create(createCourseTagDto);
  }

  @Get()
  findAll() {
    return this.courseTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseTagsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseTagDto: UpdateCourseTagDto,
  ) {
    return this.courseTagsService.update(+id, updateCourseTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseTagsService.remove(+id);
  }
}
