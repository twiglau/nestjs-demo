import { Injectable } from '@nestjs/common';
import { CreateCourseTagDto } from './dto/create-course-tag.dto';
import { UpdateCourseTagDto } from './dto/update-course-tag.dto';

@Injectable()
export class CourseTagsService {
  create(createCourseTagDto: CreateCourseTagDto) {
    return 'This action adds a new courseTag';
  }

  findAll() {
    return `This action returns all courseTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseTag`;
  }

  update(id: number, updateCourseTagDto: UpdateCourseTagDto) {
    return `This action updates a #${id} courseTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseTag`;
  }
}
