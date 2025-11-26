import { getEnvs } from '@/utils/get-envs';
import { Module } from '@nestjs/common';
import { CacheCommonModule } from './cache/cache-common.module';
import { RedisCommonModule } from './cache/redis-common.module';

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
    // 定时任务模块

    return {
      module: ConditionalModule,
      imports,
      providers,
      exports: exportService,
    };
  }
}
