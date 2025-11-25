import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

interface CustomParseIntPipeOptions {
  optional?: boolean;
  defaultValue?: number;
}

@Injectable()
export class CustomParseIntPipe implements PipeTransform {
  constructor(private options?: CustomParseIntPipeOptions) {}

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('CustomParseIntPipeOptions', metadata);
    if (!value) {
      value = this.options?.defaultValue;
    }
    if (this.options?.optional && !value) {
      return undefined;
    }
    const val = parseInt(value, 10);
    if ((val !== -1 && val < 0) || isNaN(val)) {
      throw new BadRequestException('参数不合法');
    }
    return value;
  }
}
