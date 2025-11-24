import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
/**
 * 自定义拦截器： 完成对数据的序列化
 * 1. 对接口响应数据进行转换
 * 2. 根据dto参数转化
 */
export class SerializeInterceptor implements NestInterceptor {
  constructor(
    private dto: any,
    private flag?: boolean,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 1. 拦截器执行之前
    return next.handle().pipe(
      map((data: any) => {
        // 2. 拦截器执行之后
        return plainToInstance(this.dto, data, {
          // 设置了true之后
          // 所有经过该拦截器的接口都需要配置 Expose 或者 Exclude 的 class类属性
          // Expose -> 需要暴露的属性；
          // Exclude -> 不需要暴露的属性；
          excludeExtraneousValues: this.flag,
          enableImplicitConversion: true,
        });
      }),
    );
  }
}
