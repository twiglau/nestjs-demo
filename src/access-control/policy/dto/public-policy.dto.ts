import { Exclude } from 'class-transformer';
import { CreatePolicyDto } from './create-policy.dto';

export class PublicPolicyDto extends CreatePolicyDto {
  @Exclude()
  encode: string;
}
