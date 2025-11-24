import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsArray, IsInt, IsString, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateRoleDto } from '@/access-control/role/dto/create-role.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  /**
   * 更新用户，id, username 必须有一个，用于查找用户
   */
  @IsInt()
  @ValidateIf((o) => !o.username)
  id?: number;

  @IsString()
  @ValidateIf((o) => !o.id)
  username?: string;

  @IsArray()
  @Type(() => CreateRoleDto)
  roles?: any[];
}
