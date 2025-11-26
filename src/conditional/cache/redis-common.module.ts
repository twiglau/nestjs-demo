import { Global, Module } from '@nestjs/common';
import { RedisModule, RedisModuleOptions } from '@nestjs-modules/ioredis';
import { ConfigurationService } from '@/common/configuration/configuration.service';
import { ConfigEnum } from '@/common/enum/config.enum';

@Global()
@Module({
  exports: [RedisModule],
  imports: [
    RedisModule.forRootAsync({
      inject: [ConfigurationService],
      useFactory: (configService: ConfigurationService) => {
        const type = configService.getKey(ConfigEnum.REDIS_TYPE) ?? 'single';
        if (type === 'single') {
          const host = configService.getKey(ConfigEnum.REDIS_HOST);
          const port = configService.getKey(ConfigEnum.REDIS_PORT);
          const pwd = configService.getKey(ConfigEnum.REDIS_PASSWORD);

          return {
            type: 'single',
            url: `redis://${host}:${port}`,
            options: {
              password: pwd,
            },
          } as RedisModuleOptions;
        } else {
          // 集群模式
          const hosts = (
            configService.getKey(ConfigEnum.REDIS_CLUSTER_HOST) ?? '127.0.0.1'
          ).split(',');
          const ports = (
            configService.getKey(ConfigEnum.REDIS_CLUSTER_PORT) ?? '6379'
          )
            .split(',')
            .map((port) => parseInt(port, 10));

          const nodes = hosts.map((host, index) => ({
            host,
            port: ports[index],
          }));

          return {
            type: 'cluster',
            nodes,
            options: {
              password: configService.getKey(ConfigEnum.REDIS_PASSWORD),
            },
          } as RedisModuleOptions;
        }
      },
    }),
  ],
})
export class RedisCommonModule {}
