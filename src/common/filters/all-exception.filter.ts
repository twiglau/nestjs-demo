import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import * as requestIp from 'request-ip';
import {
  I18nService,
  I18nValidationException,
  I18nValidationExceptionFilter,
} from 'nestjs-i18n';
import { ValidationError } from 'class-validator';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  // logger 变量
  private readonly logger = new Logger();
  private i18nValidationExceptionFilter: I18nValidationExceptionFilter;

  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly i18n: I18nService,
  ) {
    this.i18nValidationExceptionFilter = new I18nValidationExceptionFilter({
      detailedErrors: false, // 配置详细错误信息等
    });
  }

  private formatMessage(error: ValidationError, lang: string) {
    const { property, constraints = {}, value } = error;
    const constraintValues = Object.values(constraints);
    const formatParams = constraintValues.map((val) => {
      const [key, params] = val.split('|');
      if (params) {
        const parsedParams = JSON.parse(params);
        return this.i18n.translate(key, {
          lang,
          args: parsedParams,
        });
      }
      return val;
    });

    return `${formatParams.join(', ')} 【'${value}'】from ${property}`;
  }

  catch(exception: any, host: ArgumentsHost) {
    console.log(exception);
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request: Request = ctx.getRequest();
    const response: Response = ctx.getResponse<Response>();

    let message: string = exception.message || 'Internal Server Error';
    let status: HttpStatus =
      exception?.getStatus?.() ||
      exception?.status ||
      HttpStatus.INTERNAL_SERVER_ERROR;
    let code = -1;

    // 处理 nestjs-i18n 验证异常
    if (exception instanceof BadRequestException) {
      const exceptionBody: any = exception.getResponse();
      if (typeof exceptionBody === 'object' && exceptionBody.message) {
        message = Array.isArray(exceptionBody)
          ? (exceptionBody as any).message?.join(', ')
          : exceptionBody.message;
        status = exceptionBody.statusCode;
        code = exceptionBody.code || -1;
      }
    } else if (exception instanceof I18nValidationException) {
      status = exception.getStatus();
      message = exception.errors.map((err) =>
        this.formatMessage(err, request.i18nLang!),
      );
    }

    const responseBody = {
      headers: request.headers,
      query: request.query,
      body: request.body,
      params: request.params,
      timestamp: new Date().toISOString(),
      // 还可以加入一些用户信息
      // IP信息
      ip: requestIp.getClientIp(request),
      exceptioin: exception['name'],
      error: msg,
    };

    this.logger.error('[twiglau-log]', responseBody);
    httpAdapter.reply(response, responseBody, httpStatus);
  }
}
