import {
  OnGlobalQueueError,
  OnGlobalQueueWaiting,
  OnGlobalQueueActive,
  OnGlobalQueueDrained,
  OnGlobalQueueFailed,
  OnGlobalQueuePaused,
  OnGlobalQueueProgress,
  OnGlobalQueueRemoved,
  OnGlobalQueueResumed,
  OnGlobalQueueStalled,
  OnGlobalQueueCleaned,
  OnGlobalQueueCompleted,
  Processor,
} from '@nestjs/bull';
import type { Job } from 'bull';

@Processor('scheduled-tasks')
export class SchedulesTasksEventsService {
  @OnGlobalQueueError()
  handlerGlobalError(err: Error) {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:8 ~ SchedulesTasksEventsService ~ handlerGlobalError ~ err:',
      err,
    );
  }

  @OnGlobalQueueWaiting()
  handlerGlobalWaiting(jobId: number | string) {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalWaiting ~ jobId:',
      jobId,
    );
  }

  @OnGlobalQueueActive()
  handlerGlobalActive(job: Job) {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalActive ~ jobId:',
      job,
    );
  }

  @OnGlobalQueueStalled()
  handlerGlobalStalled(job: Job) {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalStalled ~ jobId:',
      job,
    );
  }

  @OnGlobalQueueProgress()
  handlerGlobalProgress(job: Job, progress: number) {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalProgress ~ jobId:',
      job,
    );
  }

  @OnGlobalQueueCompleted()
  handlerGlobalCompleted(job: Job, result: any) {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalCompleted ~ jobId:',
      job,
    );
  }

  @OnGlobalQueueFailed()
  handlerGlobalFailed(job: Job, err: Error) {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalFailed ~ jobId:',
      job,
    );
  }

  @OnGlobalQueuePaused()
  handlerGlobalPaused() {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalPaused ~ jobId:',
    );
  }

  @OnGlobalQueueResumed()
  handlerGlobalResumed() {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalResumed ~ jobId:',
    );
  }

  @OnGlobalQueueCleaned()
  handlerGlobalCleaned(jobs: Job[], type: string) {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalCleaned ~ jobId:',
      jobs,
      type,
    );
  }

  @OnGlobalQueueDrained()
  handlerGlobalDrained() {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalDrained ~ jobId:',
    );
  }

  @OnGlobalQueueRemoved()
  handlerGlobalRemoved(job: Job) {
    console.log(
      '🚀 ~ schedules-tasks-events.service.ts:14 ~ SchedulesTasksEventsService ~ handlerGlobalRemoved ~ jobId:',
      job,
    );
  }
}
