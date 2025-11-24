import { Module } from '@nestjs/common';
import { LogsModule } from './common/logger/logs.module';
import { AppController } from './app.controller';

import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AccessControlModule } from './access-control/access-control.module';
import { ConfigurationModule } from './common/configuration/configuration.module';
import { SharedModule } from './modules/shared/shared.module';

@Module({
  imports: [
    ConfigurationModule,
    LogsModule,
    DatabaseModule,
    UserModule,
    AccessControlModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtGuard, // 在自定义的guard中，引入某些实例
    // },
  ],
})
export class AppModule {}
