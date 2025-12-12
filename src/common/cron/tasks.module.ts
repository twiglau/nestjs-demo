import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks.service';
import { CronProviders } from './tasks';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [TasksService, ...CronProviders],
  exports: [TasksService],
})
export class TasksModule {}
