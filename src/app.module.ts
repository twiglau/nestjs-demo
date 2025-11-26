import { Module } from '@nestjs/common';
import { LogsModule } from './common/logger/logs.module';
import { AppController } from './app.controller';

import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AccessControlModule } from './access-control/access-control.module';
import { ConfigurationModule } from './common/configuration/configuration.module';
import { ConditionalModule } from './conditional/conditional.module';

@Module({
  imports: [
    ConfigurationModule,
    LogsModule,
    DatabaseModule,
    UserModule,
    ConditionalModule.register(),
    AccessControlModule,
  ],
  // 获取 DI 系统中具体 class 类的实例，以及他们之间的依赖关系
  controllers: [AppController],
  // 【控制反转】 告诉 nestjs 将 providers 中的 类实例化到 DI 系统中，
  /**
   * 依赖查找：
   * 1. 如果在 providers 中不提供，那么就在 imports 中查找
   * imports 就会查找其他的 module, 其他模块中需要 providers 中提供，并且在 exports 中暴露
   * 2. 直接在 providers 中提供
   */
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtGuard, // 在自定义的guard中，引入某些实例
    // },
  ],
  // 告诉 nestjs exports 中的类，我需要在其他的地方使用
  exports: [],
})
export class AppModule {}
