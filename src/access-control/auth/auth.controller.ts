import {
  Body,
  // ClassSerializerInterceptor,
  Controller,
  Get,
  Logger,
  Post,
  // UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserPipe } from './pipes/create-user.pipe';
import { SignupDto } from './dto/signup-user.dto';
import { PublicUserDto } from './dto/public-user.dto';
import { Serialize } from '@/common/decorators/serialize.decorator';
import { SshService } from '@/utils/ssh/ssh.service';
import { InjectQueue } from '@nestjs/bull';
import type { Queue } from 'bull';

@Controller('auth')
export class AuthController {
  logger = new Logger();
  constructor(
    private authService: AuthService,
    private sshService: SshService,
    @InjectQueue('test-tasks') private testTasksQueue: Queue,
  ) {}

  @Post('/signup')
  // 实践 2
  @Serialize(PublicUserDto)
  // 实践 1
  // @UseInterceptors(ClassSerializerInterceptor)
  async signup(@Body(CreateUserPipe) dto: SignupDto): Promise<PublicUserDto> {
    const user = await this.authService.signup(dto.username, dto.password);

    // 实践 2
    return user;

    // 实践 1
    // return new PublicUserDto({ ...user });
  }

  @Post('/signin')
  signin(@Body() dto: SignupDto) {
    const { username, password } = dto;
    this.logger.error('登录测试 looger');
    return this.authService.signin(username, password);
  }

  @Get('/ssh')
  async ssh() {
    await this.sshService.connect();
    // This ensures that the SSH session can locate the docker binary even in a non-interactive environment.
    const res = await this.sshService.exec(
      'export PATH=$PATH:/usr/local/bin:/opt/homebrew/bin; docker ps',
    );

    console.log(
      '🚀 ~ auth.controller.ts:53 ~ AuthController ~ ssh ~ res:',
      res,
    );

    return res;
  }

  @Get('/queue')
  triggerTestQueue() {
    this.testTasksQueue.add('test', { foo: 'bar' });
    return 'Test job added to queue';
  }
}
