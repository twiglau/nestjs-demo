import DailyRotateFile from 'winston-daily-rotate-file';
import * as winston from 'winston';
import { utilities } from 'nest-winston';
import { MongoDB, MongoDBConnectionOptions } from 'winston-mongodb';

export const consoleTransports = new winston.transports.Console({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    utilities.format.nestLike('twiglau-log'),
  ),
});
// 写磁盘会占用系统IO
// 数据不方便进行下载或者浏览，不方便进行筛选
// 数据量大了之后，占用系统空间，需要定期进行清理
// 后续日志可能会变得分散，且不方便进行汇总浏览
export function createRotateTransport(level: string, fileName: string) {
  return new DailyRotateFile({
    level,
    dirname: 'logger',
    filename: `${fileName}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple(),
    ),
  });
}

export function createMongoTransport(options: MongoDBConnectionOptions) {
  return new MongoDB(options);
}
