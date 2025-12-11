import { CreatePolicyDto } from '@/access-control/policy/dto/create-policy.dto';
import { ValidatorFieldUnique } from '@/common/decorators/validator-field-unique.decorator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreatePermissionDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({ description: '权限名称' })
  @IsNotEmpty()
  @IsString()
  @ValidatorFieldUnique('permission', 'name')
  name: string;

  @ApiProperty({ description: '权限操作' })
  @IsNotEmpty()
  @IsString()
  action: string;

  @ApiProperty({ description: '角色标识' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  code?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePolicyDto)
  policies?: any;
}
