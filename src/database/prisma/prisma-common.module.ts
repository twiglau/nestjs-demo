import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma.module';
import { PRISMA_DATABASE } from '../database-constants';
import { PrismaConfigService } from './prisma-config.service';

@Module({
  imports: [
    PrismaModule.forRootAsync({
      name: PRISMA_DATABASE,
      useClass: PrismaConfigService,
    }),
  ],
})
export class PrismaCommonModule {}
