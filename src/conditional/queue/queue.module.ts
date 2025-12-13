import { ConfigEnum } from '@/common/enum/config.enum';
import { getEnvs } from '@/utils/get-envs';
import { DynamicModule, Module } from '@nestjs/common';
import { MailerCommonModule } from '../mail/mail.module';
import { toBoolean } from '@/utils/format';
import { BullModule } from '@nestjs/bull';
import { ConfigurationService } from '@/common/configuration/configuration.service';

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
      providers: [],
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
      ],
    };
  }
}
