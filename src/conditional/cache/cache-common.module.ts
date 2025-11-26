import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv, Keyv } from '@keyv/redis';
import { CacheableMemory } from 'cacheable';
import { ConfigurationService } from '@/common/configuration/configuration.service';
import { ConfigEnum } from '@/common/enum/config.enum';

@Module({
  exports: [CacheModule],
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      inject: [ConfigurationService],
      useFactory: (configService: ConfigurationService) => {
        const cacheType = configService.getKey(ConfigEnum.CACHE_TYPE);
        if (cacheType === 'redis') {
          const host =
            configService.getKey(ConfigEnum.REDIS_HOST) ?? '127.0.0.1';
          const port = configService.getKey(ConfigEnum.REDIS_PORT) ?? 6379;
          const pwd = configService.getKey(ConfigEnum.REDIS_PASSWORD);
          return {
            stores: [
              createKeyv({
                url: `redis://${host}:${port}`,
                password: pwd,
              }),
            ],
          };
        } else {
          return {
            stores: [
              new Keyv({
                store: new CacheableMemory({
                  ttl: configService.getKey(ConfigEnum.CACHE_TTL) ?? 30 * 1000,
                  lruSize:
                    configService.getKey<number>(ConfigEnum.CACHE_MAX_ITEMS) ??
                    100,
                }),
              }),
            ],
          };
        }
      },
    }),
  ],
})
export class CacheCommonModule {}
