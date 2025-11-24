import { Module } from '@nestjs/common';
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import { Keyv } from 'keyv';
import KeyvRedis from '@keyv/redis';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    NestCacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const host = configService.get('REDIS_HOST');
        const port = configService.get('REDIS_PORT');
        const database = configService.get('REDIS_DB');
        const password = configService.get('REDIS_PASSWORD');
        const redisOptions = {
          url: `redis://:${password}@${host}:${port}/${database}`,
        };

        return {
          stores: [
            new Keyv({
              store: new KeyvRedis(redisOptions),
              namespace: 'MyBackEnd',
              useKeyPrefix: false,
              ttl: +configService.get('REDIS_TTL'),
            }),
          ],
        };
      },
    }),
  ],
})
export class CacheModule {}
