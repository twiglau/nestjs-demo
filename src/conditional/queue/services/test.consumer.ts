import { Processor, Process } from '@nestjs/bull';
import type { Job } from 'bull';

@Processor('test-tasks')
export class TestConsumer {
  @Process('test')
  async handle(job: Job) {
    let progress = 0;

    console.log(
      '🚀 ~ test.consumer.ts:10 ~ TestConsumer ~ handle ~ progress:',
      progress,
    );

    while (progress < 100) {
      console.log('Processing job data:', job.data, ' progress ', progress);
      progress += 10;
      await job.progress(progress);
    }
    return { message: 'Task completed' };
  }
}
