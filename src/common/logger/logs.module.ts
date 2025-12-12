import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { MongoDBConnectionOptions } from 'winston-mongodb';
import {
  createMongoTransport,
  createRotateTransport,
  consoleTransports,
} from './createRotateTransport';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const logOn = configService.get('LOG_ON') === 'true';
        const logType = configService.get('LOG_TYPE');

        let transportArr: any[] = [];
        if (logOn) {
          if (logType === 'mongo') {
            // mongo transport
            const defaultOptions: MongoDBConnectionOptions = {
              db: configService.get('LOG_DB') || '',
              collection: configService.get('LOG_COLLECTION'),
              level: configService.get('LOG_LEVEL'),
              capped: configService.get('LOG_CAPPED') === 'true',
              cappedSize: parseInt(
                configService.get('LOG_CAPPED_SIZE', '10000000'),
                10,
              ),
              cappedMax: parseInt(
                configService.get('LOG_CAPPED_MAX', '10000'),
                10,
              ),
              storeHost: configService.get('LOG_STOREHOST') === 'true',
              options: {
                // useUnifiedTopology: true, // Deprecated/Default in v4+
                // poolSize: 10, // Removed in v4+, use maxPoolSize if needed, or rely on default
                // useNewUrlParser: true, // Deprecated/Default in v4+
              },
            };

            transportArr = [createMongoTransport(defaultOptions)];
          } else if (logType === 'file') {
            // file transport
            transportArr = [
              createRotateTransport('info', 'application'),
              createRotateTransport('warn', 'error'),
            ];
          }
        }

        transportArr.push(consoleTransports);
        return {
          transports: transportArr,
        };
      },
    }),
  ],
})
export class LogsModule {}
