import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AllExceptionFilter } from './common/filters/all-exception.filter';
import {
  INestApplication,
  VERSION_NEUTRAL,
  VersioningType,
} from '@nestjs/common';
import { useContainer } from 'class-validator';
import { TransformDatabaseResponseInterceptor } from './common/interceptors/transform.interceptor';
import { I18nService, I18nValidationPipe } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const i18n = app.get<I18nService>(I18nService);
  const httpAdapterHost = app.get(HttpAdapterHost);

  const port = configService.get<number>('APP_PORT', 3000);
  const cors = configService.get('APP_CORS', false);
  const prefix = configService.get('APP_PREFIX', '/api');
  const versionStr = configService.get<string>('APP_VERSION');
  const errorFilterFlag = configService.get<string>('ERROR_FILTER');

  let version = [versionStr];
  if (versionStr && versionStr.indexOf(',')) {
    version = versionStr.split(',');
  }
  if (version) {
    // 启用版本控制
    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion:
        typeof versionStr === 'undefined'
          ? VERSION_NEUTRAL
          : (version as string[]),
    });
  }
  if (prefix) {
    // 设置全局前缀
    app.setGlobalPrefix(prefix);
  }
  if (errorFilterFlag === 'true') {
    // ⚠️： 启用全局异常过滤器，捕获所有异常，全局异常过滤器只能有一个
    app.useGlobalFilters(new AllExceptionFilter(httpAdapterHost, i18n));
  }
  // 从 winston 拉取日志
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  // 启用跨域
  if (cors === 'true') {
    app.enableCors();
  }

  // 启用 NestJS 应用的关闭钩子 (shutdown hooks)
  // 在关闭时，执行必要的清理工作，1.关闭数据库连接 2.释放资源 等等。
  app.enableShutdownHooks();

  // 启用全局管道
  app.useGlobalPipes(
    // ValidationPipe
    new I18nValidationPipe({
      transform: true, // 开启自动转换
      whitelist: true, // 开启白名单， 只允许白名单中的字段， false => 表示不会删除 白名单之外的字段
      transformOptions: {
        enableImplicitConversion: true, // 开启隐式转换
        enableCircularCheck: true, // 开启循环检查
      },
    }),
  );

  // 为了在使用class-validator的DTO类中也可以注入nestjs容器的依赖
  // 全局注入 Repository，可以让自定义校验器支持依赖注入
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  // 全局拦截器
  app.useGlobalInterceptors(new TransformDatabaseResponseInterceptor());

  // 1. 全局守卫 - 无法使用 ID系统的实例
  // 无法来使用UserService - 之类的依赖注入的实例
  // 2. 如果使用全局守卫，并且需要使用 某些实例，该怎么处理？
  // > 在app.module.ts 中另外一种写法
  // app.useGlobalGuards();

  // 启用 swagger
  enableSwagger(app);

  await app.listen(port);
}
void bootstrap();

function enableSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('[Twiglau] Swagger')
    .setDescription('[Twiglau] API description')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);
}
