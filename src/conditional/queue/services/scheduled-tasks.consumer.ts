import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Logger, Optional } from '@nestjs/common';
import type { Job } from 'bull';

@Processor('scheduled-tasks')
export class ScheduledTasksConsumer {
  logger = new Logger('ScheduledTasksConsumer');

  constructor(@Optional() private mailerService: MailerService) {}

  // 发送邮件单个任务
  @Process('sendMail')
  async sendMail(job: Job<ISendMailOptions>) {
    const { data } = job;

    if (!this.mailerService) {
      this.logger.warn('Mail邮件配置异常，请检查.env的mail配置');
      return;
    }
    await this.mailerService.sendMail(data);
  }

  @Process('sendSms')
  async sendSms(job: Job<ISendMailOptions>) {
    const { data } = job;
    return 'ok';
  }
}
