import { Global, Module } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { PolicyController } from './policy.controller';
import { CaslAbilityService } from './casl-ability.service';

@Global()
@Module({
  controllers: [PolicyController],
  providers: [PolicyService, CaslAbilityService],
  exports: [CaslAbilityService, PolicyService],
})
export class PolicyModule {}
