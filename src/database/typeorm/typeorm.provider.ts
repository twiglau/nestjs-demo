import { Inject, OnApplicationShutdown } from '@nestjs/common';
import { TYPEORM_CONNECTIONS } from './typeorm.constants';
import { DataSource } from 'typeorm';

export class TypeormProvider implements OnApplicationShutdown {
  constructor(
    @Inject(TYPEORM_CONNECTIONS)
    private readonly connections: Map<string, DataSource>,
  ) {}
  onApplicationShutdown() {
    if (this.connections.size > 0) {
      console.log('typeorm 关闭数据库连接', this.connections.size);
      for (const key of this.connections.keys()) {
        this.connections.get(key)?.destroy();
      }
    }
  }
}
