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
import { CourseTagsService } from './course-tags.service';
import { CreateDictCourseTagDto } from './dto/create-course-tag.dto';
import { UpdateCourseTagDto } from './dto/update-course-tag.dto';

@Controller('dict/course-tags')
export class CourseTagsController {
  constructor(private readonly courseTagsService: CourseTagsService) {}

  @Post()
  create(@Body() createCourseTagDto: CreateDictCourseTagDto) {
    return this.courseTagsService.create(createCourseTagDto);
  }

  @Get()
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('size', new ParseIntPipe({ optional: true })) size: number = 10,
  ) {
    console.log(page, size);
    return this.courseTagsService.find(page, size);
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
