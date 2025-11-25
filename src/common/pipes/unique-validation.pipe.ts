import { PRISMA_DATABASE } from '@/database/database-constants';
import {
  ArgumentMetadata,
  BadRequestException,
  Inject,
  Logger,
  PipeTransform,
} from '@nestjs/common';
import { PrismaClient } from 'prisma/client/postgresql';
import { getUniqueFields } from '@/common/decorators/validator-field-unique.decorator';

export class FieldUniqueValidationPipe implements PipeTransform {
  private readonly logger = new Logger('FieldUniqueValidationPipe');

  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    this.logger.log('validation value:', JSON.stringify(value));
    const uniqueFields = getUniqueFields(value);
    for (const { field, schema } of uniqueFields) {
      const result = await this.prismaClient[
        schema.toLocaleLowerCase()
      ].findUnique({
        where: {
          [field]: value[field],
        },
      });
      if (result) {
        throw new BadRequestException(`${field} [${result[field]}] 已存在`);
      }
    }
    return value;
  }
}
