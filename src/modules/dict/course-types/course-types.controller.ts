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
import { CourseTypesService } from './course-types.service';
import { CreateDictCourseTypeDto } from './dto/create-course-type.dto';
import { UpdateCourseTypeDto } from './dto/update-course-type.dto';

@Controller('dict/course-types')
export class CourseTypesController {
  constructor(private readonly courseTypesService: CourseTypesService) {}

  @Post()
  create(@Body() createCourseTypeDto: CreateDictCourseTypeDto) {
    return this.courseTypesService.create(createCourseTypeDto);
  }

  @Get()
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('size', new ParseIntPipe({ optional: true })) size: number = 10,
  ) {
    return this.courseTypesService.find(page, size);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseTypeDto: UpdateCourseTypeDto,
  ) {
    return this.courseTypesService.update(+id, updateCourseTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseTypesService.remove(+id);
  }
}
