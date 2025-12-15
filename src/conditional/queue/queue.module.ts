import { ConfigEnum } from '@/common/enum/config.enum';
import { getEnvs } from '@/utils/get-envs';
import { DynamicModule, Module } from '@nestjs/common';
import { MailerCommonModule } from '../mail/mail.module';
import { toBoolean } from '@/utils/format';
import { BullModule } from '@nestjs/bull';
import { ConfigurationService } from '@/common/configuration/configuration.service';
import { QueueConsumers } from './services';

// 处理复杂的任务:
// 1. 需要持久化 -> 系统状态 -> 接口状态
// 2. 重量级的任务， 大量高并发的任务 -> task queue -> nestjs bull + redis (RabbitMQ Kafka...)
@Module({})
export class QueueModule {
  static register(): DynamicModule {
    const parseConfig = getEnvs();
    const mailOn = parseConfig[ConfigEnum.MAIL_ON] || false;

    const conditionalModuleImports: any[] = [];
    if (toBoolean(mailOn)) {
      conditionalModuleImports.push(MailerCommonModule);
    }
    return {
      module: QueueModule,
      global: true,
      providers: [...QueueConsumers],
      exports: [BullModule],
      imports: [
        ...conditionalModuleImports,
        BullModule.forRootAsync({
          inject: [ConfigurationService],
          useFactory: (configService: ConfigurationService) => {
            const redisHost = configService.getKey(ConfigEnum.QUEUE_REDIS_HOST);
            const redisPort = configService.getKey(ConfigEnum.QUEUE_REDIS_PORT);
            const redisPassword = configService.getKey(
              ConfigEnum.QUEUE_REDIS_PASSWORD,
            );
            return {
              redis: {
                host: redisHost,
                port: parseInt(redisPort),
                password: redisPassword,
              },
              defaultJobOptions: {
                removeOnComplete: true,
                removeOnFail: false,
              },
            };
          },
        }),
        // 注册队列
        BullModule.registerQueue(
          // { name: 'emails' },
          // { name: 'data-processing' },
          // { name: 'real-time-messages' },
          // { name: 'image-processing' },
          // { name: 'order-processing' },
          // 设置定时任务 (邮件， 短信)
          { name: 'test-tasks' },
          { name: 'scheduled-tasks' },
        ),
      ],
    };
  }
}
