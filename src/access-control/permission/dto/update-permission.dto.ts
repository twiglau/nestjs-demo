import { CreatePermissionDto } from './create-premission.dto';
import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsNumber, ValidateNested } from 'class-validator';
import { Policy } from 'prisma/client/postgresql';
import { Transform, Type } from 'class-transformer';
import { CreatePolicyDto } from '@/access-control/policy/dto/create-policy.dto';

export class updatePermissionDto extends PartialType(CreatePermissionDto) {
  @ApiPropertyOptional({
    description: '策略ID列表',
    example: [],
    type: [Number],
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  @Transform(({ value }) => value.map(Number))
  policyIds?: number[];

  @ApiPropertyOptional({
    description: '权限关联的策略',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePolicyDto)
  policies?: Policy[];
}
