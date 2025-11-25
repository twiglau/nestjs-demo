import { forwardRef, Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { UserModule } from '@/user/user.module';

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [forwardRef(() => UserModule)],
  exports: [RoleService],
})
export class RoleModule {}
