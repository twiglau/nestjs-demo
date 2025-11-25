import { ValidatorFieldUnique } from '@/common/decorators/validator-field-unique.decorator';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
export class MenuMetaDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  layout?: string;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => +value)
  order?: number;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsOptional()
  @IsBoolean()
  hidden?: boolean;

  @IsOptional()
  @IsString()
  createdAt?: Date;

  @IsOptional()
  @IsString()
  updatedAt?: Date;

  @IsOptional()
  @IsBoolean()
  disabled?: boolean;
}

export class CreateMenuDto {
  @IsOptional()
  @IsInt()
  @ValidateIf((v) => !v.name)
  id?: number;

  @IsString()
  @ValidateIf((v) => !v.id)
  @ValidatorFieldUnique('Menu', 'name')
  name: string;

  @IsString()
  @ValidateIf((v) => !v.id)
  label: string;

  @IsString()
  @ValidateIf((v) => !v.id)
  path: string;

  @IsString()
  @IsOptional()
  @ValidateIf((v) => !v.id)
  component?: string;

  @IsString()
  @IsOptional()
  @ValidateIf((v) => !v.id)
  description?: string;

  @IsString()
  @IsOptional()
  @ValidateIf((v) => !v.id)
  redirect?: string;

  @IsString()
  @IsOptional()
  @ValidateIf((v) => !v.id)
  fullPath?: string;

  @IsInt()
  @IsOptional()
  @ValidateIf((v) => !v.id)
  @Transform(({ value }) => +value)
  order?: number;

  @IsOptional()
  @IsInt()
  @ValidateIf((v) => !v.id)
  @Transform(({ value }) => {
    return +value;
  })
  parentId?: number;

  @IsOptional()
  @IsArray()
  @Type(() => CreateMenuDto)
  @ValidateIf((v) => !v.id)
  children?: CreateMenuDto[];

  @IsOptional()
  @Type(() => MenuMetaDto)
  @ValidateNested({ each: true })
  @ValidateIf((v) => !v.id)
  meta?: MenuMetaDto;

  @IsOptional()
  @Type(() => CreateMenuDto)
  @ValidateNested({ each: true })
  @ValidateIf((v) => !v.id)
  parent?: CreateMenuDto;
}
