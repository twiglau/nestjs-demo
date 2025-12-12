import { Logger } from '@nestjs/common';
import { Prisma } from 'prisma/client/postgresql';
import { catchError, retry, throwError, timer } from 'rxjs';

export const PROTOCOL_REGEX = /^(.*?):\/\//;

export function getDBType(url: string) {
  const matches = url.match(PROTOCOL_REGEX);

  const protocol = matches ? matches[1] : 'file';

  return protocol === 'file' ? 'sqlite' : protocol;
}

export function handleRetry(retryAttempts: number, retryDelay: number) {
  const logger = new Logger('PrismaModule');
  return (source) =>
    source.pipe(
      retry({
        // 重试次数
        count: retryAttempts < 0 ? Infinity : retryAttempts,
        // 重试延迟逻辑
        delay: (error, retryCount) => {
          // 根据重试次数计算最大重试次数
          const attempts = retryAttempts < 0 ? Infinity : retryAttempts;
          if (retryCount <= attempts) {
            logger.error(
              `Unable to connect to the database, Retrying (${retryCount})...`,
              error.stack,
            );
            // 返回延迟时间
            return timer(retryDelay);
          } else {
            return throwError(() => new Error('Reached max retries'));
          }
        },
      }),
      catchError((error) => {
        logger.error(
          `Failed to connect to the database after retries ${retryAttempts} times`,
          error.stack || error,
        );
        return throwError(() => error);
      }),
    );
}

// https://github.com/prisma/prisma/discussions/12373
// https://github.com/prisma/prisma/issues/17215
export function extendTransaction(tx: Prisma.TransactionClient): any {
  return new Proxy(tx, {
    get: (target, prop) => {
      if (prop === '$transaction') {
        return async (fn) => fn(tx);
      }
      return target[prop];
    },
  });
}
