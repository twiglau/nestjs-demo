import { PartialType } from '@nestjs/swagger';
import { CreateDictCourseTagDto } from './create-course-tag.dto';

export class UpdateCourseTagDto extends PartialType(CreateDictCourseTagDto) {}
