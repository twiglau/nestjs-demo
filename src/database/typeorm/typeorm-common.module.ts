import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TYPEORM_DATABASE } from '../database-constants';
import { TypeOrmConfigService } from './typeorm-config.service';
import { TypeormProvider } from './typeorm.provider';
import { TYPEORM_CONNECTIONS } from './typeorm.constants';

const connections = new Map<string, DataSource>();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: TYPEORM_DATABASE,
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        const tenantId = options['tenantId'] || 'default';
        if (tenantId && connections.has(tenantId)) {
          return connections.get(tenantId) as DataSource;
        }

        const dataSource = await new DataSource(options).initialize();
        connections.set(tenantId, dataSource);
        return dataSource;
      },
      inject: [],
      extraProviders: [],
    }),
  ],
  providers: [
    TypeormProvider,
    {
      provide: TYPEORM_CONNECTIONS,
      useValue: connections,
    },
  ],
})
export class TypeormCommonModule {}
