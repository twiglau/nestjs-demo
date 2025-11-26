import { getEnvs } from '@/utils/get-envs';
import { Module } from '@nestjs/common';

const imports: any[] = [];
const providers = [];
const exportService = [];

@Module({})
export class ConditionalModule {
  static register() {
    const parsedConfig = getEnvs();
    // 缓存模块

    return {
      module: ConditionalModule,
      imports,
      providers,
      exports: exportService,
    };
  }
}
