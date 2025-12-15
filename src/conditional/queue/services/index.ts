import { Provider } from '@nestjs/common';
import { ScheduledTasksConsumer } from './scheduled-tasks.consumer';
import { SchedulesTasksEventsService } from './schedules-tasks-events.service';
import { TestConsumer } from './test.consumer';

export const QueueConsumers: Provider[] = [
  TestConsumer,
  ScheduledTasksConsumer,
  SchedulesTasksEventsService,
];
