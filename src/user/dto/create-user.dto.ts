import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  // 用户 -> 既可以是 普通用户，也可以是管理员
  @IsArray()
  @IsInt({ each: true })
  @IsOptional()
  roleIds: number[];
}
