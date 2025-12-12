import {
  DynamicModule,
  Global,
  Module,
  OnApplicationShutdown,
  Provider,
  Type,
} from '@nestjs/common';
import {
  PrismaModuleAsyncOptions,
  PrismaModuleOptions,
  PrismaOptionsFactory,
} from './prisma-options.interface';
import { PrismaClient as MysqlClient } from 'prisma-mysql';
import { PrismaClient as PostgresqlClient } from 'prisma-postgresql';
import { extendTransaction, getDBType } from './prisma-utils';
import {
  PRISMA_CONNECTION_NAME,
  PRISMA_CONNECTIONS,
  PRISMA_MODULE_OPTIONS,
} from './prisma.constants';
import { catchError, defer, lastValueFrom } from 'rxjs';
import { handleRetry } from './prisma-utils';

@Module({})
@Global()
export class PrismaCoreModule implements OnApplicationShutdown {
  // 连接数
  private static connections: Record<string, any> = {};

  onApplicationShutdown() {
    if (
      PrismaCoreModule.connections &&
      Object.keys(PrismaCoreModule.connections).length > 0
    ) {
      for (const key of Object.keys(PrismaCoreModule.connections)) {
        const connection = PrismaCoreModule.connections[key];
        if (connection && typeof connection.$disconnect == 'function') {
          connection.$disconnect();
          console.log('******* release ********');
        }
      }
    }
  }

  static forRoot(_options: PrismaModuleOptions) {
    const {
      url = '',
      options = {},
      name,
      retryAttempts = 10,
      retryDelay = 3000,
      connectionErrorFactory,
      connectionFactory,
    } = _options;

    let newOptions = {
      datasourceUrl: url,
    };
    if (Object.keys(options).length) {
      newOptions = { ...newOptions, ...options };
    }

    const dbType = getDBType(url);
    let _prismaClient;
    if (dbType === 'mysql') {
      _prismaClient = MysqlClient;
    } else if (dbType === 'postgresql') {
      _prismaClient = PostgresqlClient;
    } else {
      throw new Error(`Unsupported database type: ${dbType}`);
    }

    const providerName = name || PRISMA_CONNECTION_NAME;
    const prismaConnectionErrorFactory =
      connectionErrorFactory || ((err) => err);
    const prismaConnectionFactory =
      connectionFactory ||
      (async (clientOptions) => await new _prismaClient(clientOptions));

    const prismaClientProvider: Provider = {
      provide: providerName,
      useFactory: async () => {
        // 加入错误重试
        if (this.connections[url]) {
          return this.connections[url];
        }
        const client = extendTransaction(
          await prismaConnectionFactory(newOptions, _prismaClient),
        );
        this.connections[url] = client;

        return lastValueFrom(
          defer(() => client.$connect()).pipe(
            handleRetry(retryAttempts, retryDelay),
            catchError((err) => {
              throw prismaConnectionErrorFactory(err);
            }),
          ),
        ).then(() => client);
      },
    };
    const connectionsProvider = {
      provide: PRISMA_CONNECTIONS,
      useValue: this.connections,
    };
    return {
      module: PrismaCoreModule,
      providers: [prismaClientProvider, connectionsProvider],
      exports: [prismaClientProvider, connectionsProvider],
    };
  }
  static forRootAsync(_options: PrismaModuleAsyncOptions): DynamicModule {
    const provideName = _options.name || PRISMA_CONNECTION_NAME;

    const prismaClientProvider: Provider = {
      provide: provideName,
      useFactory: (prismaModuleOptions: PrismaModuleOptions) => {
        if (!prismaModuleOptions) return;
        const {
          url,
          options = {},
          retryAttempts = 10,
          retryDelay = 3000,
          connectionFactory,
          connectionErrorFactory,
        } = prismaModuleOptions;
        let newOptions = {
          datasourceUrl: url,
        };
        if (!Object.keys(options).length) {
          newOptions = { ...newOptions, ...options };
        }

        const dbType = getDBType(url!);
        let _prismaClient;
        if (dbType === 'mysql') {
          _prismaClient = MysqlClient;
        } else if (dbType === 'postgresql') {
          _prismaClient = PostgresqlClient;
        } else {
          throw new Error(`Unsupported database type: ${dbType}`);
        }

        const prismaConnectionErrorFactory =
          connectionErrorFactory || ((err) => err);
        const prismaConnectionFactory =
          connectionFactory ||
          (async (clientOptions) => await new _prismaClient(clientOptions));
        return lastValueFrom(
          defer(async () => {
            const url = newOptions.datasourceUrl || '';
            if (this.connections[url]) {
              return this.connections[url];
            }
            const client = extendTransaction(
              await prismaConnectionFactory(newOptions, _prismaClient),
            );
            this.connections[url] = client;
            return client;
          }).pipe(
            handleRetry(retryAttempts, retryDelay),
            catchError((err) => {
              throw prismaConnectionErrorFactory(err);
            }),
          ),
        );
      },
      inject: [PRISMA_MODULE_OPTIONS],
    };
    // 异步provider 获取，providers: [] 加入
    // 以便于 useFactory 中使用
    const asyncProviders = this.createAsyncProviders(_options);
    const connectionProvider = {
      provide: PRISMA_CONNECTIONS,
      useValue: this.connections,
    };

    return {
      module: PrismaCoreModule,
      providers: [...asyncProviders, prismaClientProvider, connectionProvider],
      exports: [prismaClientProvider, connectionProvider],
    };
  }

  // DI 系统注入
  private static createAsyncProviders(options: PrismaModuleAsyncOptions) {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    const useClass = options.useClass as Type<PrismaOptionsFactory>;

    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: useClass,
        useClass,
      },
    ];
  }

  // 创建 PRISMA_MODULE_OPTIONS的Provide,来源
  private static createAsyncOptionsProvider(
    options: PrismaModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: PRISMA_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    const inject = [
      (options.useClass || options.useExisting) as Type<PrismaOptionsFactory>,
    ];
    // 没有设置 useFactory 的场景
    return {
      provide: PRISMA_MODULE_OPTIONS,
      inject,
      useFactory: async (optionsFactory: PrismaOptionsFactory) =>
        optionsFactory.createPrismaModuleOptions(),
    };
  }
}
