import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

type FieldType = string | string[] | Record<string, any>;

export class CreatePolicyDto {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsInt()
  type: number;

  @IsString()
  @IsIn(['can', 'cannot'])
  effect: 'can' | 'cannot';

  @IsString()
  action: string;

  @IsString()
  subject: string;

  @IsOptional()
  fields?: FieldType;

  @IsOptional()
  conditions?: FieldType;

  @IsOptional()
  args?: FieldType;
}
