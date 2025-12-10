import { Module } from '@nestjs/common';
import { AttachmentModule } from './attachment/attachment.module';
import { CommentModule } from './comment/comment.module';
import { CourseModule } from './course/course.module';
import { DictModule } from './dict/dict.module';
import { SharedModule } from './shared/shared.module';
import { StudyModule } from './study/study.module';
import { TransactionModule } from './transaction/transaction.module';
import { ContentModule } from './content/content.module';

@Module({
  imports: [
    AttachmentModule,
    CommentModule,
    CourseModule,
    DictModule,
    SharedModule,
    StudyModule,
    TransactionModule,
    ContentModule,
  ],
})
export class FeaturesModule {}
