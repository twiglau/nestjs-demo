import { Processor, Process } from '@nestjs/bull';
import type { Job } from 'bull';

@Processor('test-tasks')
export class TestConsumer {
  @Process()
  async handle(job: Job) {
    let progress = 0;
    while (progress < 100) {
      console.log('Processing job data:', job.data, ' progress ', progress);
      progress += 10;
      await job.progress(progress);
    }
    return { message: 'Task completed' };
  }
}
