import { Injectable } from '@nestjs/common';
import { CreateCourseTypeDto } from './dto/create-course-type.dto';
import { UpdateCourseTypeDto } from './dto/update-course-type.dto';

@Injectable()
export class CourseTypesService {
  create(createCourseTypeDto: CreateCourseTypeDto) {
    return 'This action adds a new courseType';
  }

  findAll() {
    return `This action returns all courseTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseType`;
  }

  update(id: number, updateCourseTypeDto: UpdateCourseTypeDto) {
    return `This action updates a #${id} courseType`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseType`;
  }
}
