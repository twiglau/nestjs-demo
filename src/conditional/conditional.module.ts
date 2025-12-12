import { getEnvs } from '@/utils/get-envs';
import { Module } from '@nestjs/common';
import { CacheCommonModule } from './cache/cache-common.module';
import { RedisCommonModule } from './cache/redis-common.module';
import { toBoolean } from '@/utils/format';
import { ConfigEnum } from '@/common/enum/config.enum';
import { I18nCommonModule } from './i18n/i18n.module';

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
      // imports.push()
    }
    if (toBoolean(parsedConfig[ConfigEnum.CRON_ON])) {
    }

    return {
      module: ConditionalModule,
      imports,
      providers,
      exports: exportService,
    };
  }
}
