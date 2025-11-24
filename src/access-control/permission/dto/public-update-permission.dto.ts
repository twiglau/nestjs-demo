import { PartialType } from '@nestjs/mapped-types';
import { updatePermissionDto } from './update-permission.dto';
import { Expose, Transform, Type } from 'class-transformer';
import { CreatePolicyDto } from '@/access-control/policy/dto/create-policy.dto';

export class PublicUpdatePermissionDto extends PartialType(
  updatePermissionDto,
) {
  @Type(() => CreatePolicyDto)
  @Expose({ name: 'PermissionPolicy' })
  @Transform(({ value }) => {
    // 只需要保留，除了encode以外的属性
    return value.map((item) => {
      const policy = item.policy;
      delete policy?.encode;
      item.policy = policy;
      return item;
    });
  })
  policies?: any;
}
