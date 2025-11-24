import { CreatePermissionDto } from '@/access-control/permission/dto/create-premission.dto';
import { CreatePolicyDto } from '@/access-control/policy/dto/create-policy.dto';
import { plainToInstance, Transform, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

interface PermissionType {
  id?: number;
  name: string;
  action: string;
  description?: string;
}

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  /**
   * permissions 可能有两种类型： 1. string[], 2. 对象[]
   * 当传递为 string -> split -> { name, action } 对象数组
   * 当传递为 对象 -> 直接转换为对应的dto实例
   */
  @IsOptional()
  @IsArray()
  //隐式类型转换时，转换为 CreatePermissionDto
  @Type(() => CreatePermissionDto)
  @Transform(({ value }) => {
    return value.map((item: any) => {
      if (typeof item === 'string') {
        const parts = item.split(':');
        return plainToInstance(CreatePermissionDto, {
          name: item,
          action: parts[1],
        });
      } else {
        return plainToInstance(CreatePermissionDto, item);
      }
    });
  })
  permissions?: PermissionType[] | string[];

  @IsOptional()
  @IsArray()
  @Type(() => CreatePolicyDto)
  policies?: any;
}
