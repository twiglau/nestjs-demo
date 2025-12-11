import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePolicyPermissionDto {
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  @IsArray()
  permissionIds: number[];
}
