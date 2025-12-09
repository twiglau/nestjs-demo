import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
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
    console.log(
      '🚀 ~ all-exception.filter.ts:56 ~ AllExceptionFilter ~ catch ~ exception:',
      exception,
    );

    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request: Request = ctx.getRequest();
    const response: Response = ctx.getResponse<Response>();

    // TODO 处理 nestjs-i18n 验证异常  下面自定义处理
    if (exception instanceof I18nValidationException) {
      return this.i18nValidationExceptionFilter.catch(exception, host);
    }

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
      message = exception.errors
        .map((err) => this.formatMessage(err, request.i18nLang!))
        .join('; ');
    } else if (exception instanceof ForbiddenException) {
      status = HttpStatus.FORBIDDEN;
      message = '无访问权限，请联系管理员';
    } else if (exception.name === 'PrismaClientKnownRequestError') {
      switch (exception.code) {
        case 'P2002': // 唯一约束失败
          status = HttpStatus.CONFLICT;
          message = `字段 "${exception.meta?.target}" 已存在`;
          break;

        case 'P2025': // 数据不存在
          status = HttpStatus.BAD_REQUEST;
          message = '要操作数据不存在';
          break;

        case 'P2003': // 外键约束失败
          status = HttpStatus.BAD_REQUEST;
          message = '外键约束失败，无法操作关联数据';
          break;

        default:
          status = HttpStatus.INTERNAL_SERVER_ERROR;
          message = '数据库异常，请联系管理员';
          break;
      }
    } else if (exception instanceof HttpException) {
      const exceptionBody: any = exception.getResponse();
      message = exceptionBody?.message || exceptionBody;
      code = exceptionBody?.code || -1;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = exception.stack;
    }

    const responseBody = {
      code: -1,
      message,
      error: exception['name'] + ': ' + exception['message'],
      success: false,
      timestamp: new Date().toISOString(),
      path: request.url,
      // IP信息
      ip: requestIp.getClientIp(request),
      method: request.method,
    };

    console.log(
      '🚀 ~ all-exception.filter.ts:138 ~ AllExceptionFilter ~ catch ~ responseBody:',
      responseBody,
    );

    this.logger.error('[twiglau-log]', {
      ...responseBody,
      query: request.query,
      body: request.body,
      params: request.params,
      headers: request.headers,
      status,
      exception: exception,
      code,
    });
    httpAdapter.reply(response, responseBody, status);
  }
}
