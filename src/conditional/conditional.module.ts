import { getEnvs } from '@/utils/get-envs';
import { Module } from '@nestjs/common';
import { CacheCommonModule } from './cache/cache-common.module';
import { RedisCommonModule } from './cache/redis-common.module';
import { toBoolean } from '@/utils/format';
import { ConfigEnum } from '@/common/enum/config.enum';
import { I18nCommonModule } from './i18n/i18n.module';
import { TasksModule } from '@/common/cron/tasks.module';
import { SshModule } from '@/utils/ssh/ssh.module';
import { ConfigurationService } from '@/common/configuration/configuration.service';
import { QueueModule } from './queue/queue.module';

const imports: any[] = [];
const providers = [];
const exportService = [];

@Module({})
export class ConditionalModule {
  static register() {
    const parsedConfig = getEnvs();
    // 缓存模块
    imports.push(CacheCommonModule);
    // redis模块
    imports.push(RedisCommonModule);
    // 短信模块
    // 邮件模块
    // 国际化模块
    if (toBoolean(parsedConfig[ConfigEnum.APP_I18N])) {
      imports.push(I18nCommonModule);
    }
    // 定时任务模块
    if (toBoolean(parsedConfig[ConfigEnum.QUEUE_ON])) {
      imports.push(QueueModule.register());
    }
    if (toBoolean(parsedConfig[ConfigEnum.CRON_ON])) {
      imports.push(TasksModule);
      imports.push(
        SshModule.forRootAsync({
          inject: [ConfigurationService],
          useFactory: (config: ConfigurationService) => {
            return {
              host: config.getKey(ConfigEnum.SSH_HOST),
              port: config.getKey(ConfigEnum.SSH_PORT),
              username: config.getKey(ConfigEnum.SSH_USERNAME),
              password: config.getKey(ConfigEnum.SSH_PASSWORD),
            };
          },
        }),
      );
    }

    return {
      module: ConditionalModule,
      imports,
      providers,
      exports: exportService,
    };
  }
}
