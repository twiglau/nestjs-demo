import { ValidatorFieldUnique } from '@/common/decorators/validator-field-unique.decorator';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 20, {
    message: (args) =>
      `用户名长度 ${args.constraints[0]} ~ ${args.constraints[1]}`,
  })
  @ValidatorFieldUnique('user', 'username', {
    message: i18nValidationMessage('validation.IS_EXISTS', {
      property: 'username ',
    }),
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 30, {
    message: (args) =>
      `密码的长度在${args.constraints[0]} ~ ${args.constraints[1]}`,
  })
  password: string;

  @IsArray()
  @IsOptional()
  roles: number[];
}
