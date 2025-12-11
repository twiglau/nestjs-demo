import { Permission } from 'prisma/client/postgresql';
import { CreatePolicyDto } from './create-policy.dto';
import { IsArray, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePolicyPermissionDto extends CreatePolicyDto {
  @ApiProperty({
    description: '权限 id 列表',
    type: [Number],
    example: [1, 2],
  })
  @IsArray()
  @IsNotEmpty()
  permissions: Permission[];
}
