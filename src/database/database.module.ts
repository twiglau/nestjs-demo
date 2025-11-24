import { Module } from '@nestjs/common';
import { getEnvs } from '@/utils/get-envs';
import { toBoolean } from '@/utils/format';
import { PrismaCommonModule } from './prisma/prisma-common.module';
import { TypeormCommonModule } from './typeorm/typeorm-common.module';
import { MongooseCommonModule } from './mongoose/mongoose-common.module';

const parsedConfig = getEnvs();
const tenantNode = toBoolean(parsedConfig['TENANT_MODE']);
const tenantDBType = parsedConfig['TENANT_DB_TYPE']?.split(',');

const imports = tenantNode
  ? tenantDBType?.map((db) => {
      switch (db) {
        case 'prisma':
          return PrismaCommonModule;
        case 'typeorm':
          return TypeormCommonModule;
        case 'mongoose':
          return MongooseCommonModule;
        default:
          return TypeormCommonModule;
      }
    })
  : [PrismaCommonModule];

@Module({
  imports,
})
export class DatabaseModule {}
