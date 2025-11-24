import DailyRotateFile from 'winston-daily-rotate-file';
import * as winston from 'winston';
import { utilities } from 'nest-winston';

export const consoleTransports = new winston.transports.Console({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    utilities.format.nestLike('twiglau-log'),
  ),
});

export default function createDailyRotateTransport(
  level: string,
  fileName: string,
) {
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
