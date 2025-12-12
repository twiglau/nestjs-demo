import { DynamicModule, Module } from '@nestjs/common';
import { SshModuleOptions, SshModuleAsyncOptions } from './ssh.inteface';
import { SshCoreModule } from './ssh-core.module';

@Module({})
export class SshModule {
  static forRoot(options: SshModuleOptions, name?: string): DynamicModule {
    return {
      module: SshModule,
      imports: [SshCoreModule.forRoot(options, name)],
    };
  }
  static forRootAsync(
    options: SshModuleAsyncOptions,
    name?: string,
  ): DynamicModule {
    return {
      module: SshModule,
      imports: [SshCoreModule.forRootAsync(options, name)],
    };
  }
}
