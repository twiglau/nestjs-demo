import type { ValidationOptions } from 'class-validator';
import 'reflect-metadata';

export const UNIQUE_FIELD_METADATA = 'UNIQUE_FIELD_METADATA';

export function getUniqueFields(
  dto: object,
): Array<{ field: string; schema: string }> {
  if (!dto) {
    return [];
  }

  const dtoClass = dto.constructor;
  const uniqueFields: Array<Record<string, any>> =
    Reflect.getMetadata(UNIQUE_FIELD_METADATA, dtoClass) || [];

  return uniqueFields.map((e) => ({
    field: e.field,
    schema: e.schema,
  }));
}

export function ValidatorFieldUnique(
  schema: string,
  property: string,
  options?: ValidationOptions,
) {
  return function (target: object, propertyKey: string) {
    const existingFields =
      Reflect.getMetadata(UNIQUE_FIELD_METADATA, target.constructor) || [];
    console.log('ValidatorFieldUnique', existingFields, target, propertyKey);
    Reflect.defineMetadata(
      UNIQUE_FIELD_METADATA,
      [
        ...existingFields,
        {
          field: property || propertyKey,
          schema: schema,
          propertyKey,
          options,
        },
      ],
      target.constructor,
    );
  };
}
