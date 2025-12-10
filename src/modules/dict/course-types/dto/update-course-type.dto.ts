import { PartialType } from '@nestjs/swagger';
import { CreateDictCourseTypeDto } from './create-course-type.dto';

export class UpdateCourseTypeDto extends PartialType(CreateDictCourseTypeDto) {}
