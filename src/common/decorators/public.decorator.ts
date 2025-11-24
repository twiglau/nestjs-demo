import { SetMetadata } from '@nestjs/common';

// SetMetadata 添加元信息 到 对应的函数上去
export const Public = () => SetMetadata('isPublic', true);
