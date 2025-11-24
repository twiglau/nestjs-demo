import { Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(
    @Inject(REQUEST) private request: Request,
    private configService: ConfigService,
  ) {}
  createTypeOrmOptions(
    connectionName?: string,
  ): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const headers = this.request.headers;
    const tenantId = headers['x-tenant-id'] || connectionName || 'default';

    let config: TypeOrmModuleOptions = { port: 3306 };
    const envConfig = {
      type: this.configService.get('DB_TYPE'),
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_DATABASE'),
      autoLoadEntities: Boolean(this.configService.get('DB_AUTOLOAD')),
      synchronize: Boolean(this.configService.get('DB_SYNC')),
      tenantId,
    };

    if (tenantId === 'typeorm2') {
      config = { port: 3307 };
    } else if (tenantId === 'typeorm3') {
      config = {
        type: 'postgres',
        port: 5432,
        username: 'pguser',
        database: 'testdb',
      };
    }

    const finalConfig = Object.assign(envConfig, config);

    return finalConfig;
  }
}
