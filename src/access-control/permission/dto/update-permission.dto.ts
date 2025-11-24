import { CreatePermissionDto } from './create-premission.dto';
import { PartialType } from '@nestjs/mapped-types';

export class updatePermissionDto extends PartialType(CreatePermissionDto) {}
