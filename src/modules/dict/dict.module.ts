import { Module } from '@nestjs/common';
import { AttachmentAttributeModule } from './attachment-attribute/attachment-attribute.module';
import { CourseTagsModule } from './course-tags/course-tags.module';
import { CourseTypesModule } from './course-types/course-types.module';

@Module({
  imports: [AttachmentAttributeModule, CourseTagsModule, CourseTypesModule],
  controllers: [],
  providers: [],
})
export class DictModule {}
