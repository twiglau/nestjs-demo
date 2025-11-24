import {
  Body,
  // ClassSerializerInterceptor,
  Controller,
  Post,
  // UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserPipe } from './pipes/create-user.pipe';
import { SignupDto } from './dto/signup-user.dto';
import { PublicUserDto } from './dto/public-user.dto';
import { Serialize } from '@/common/decorators/serialize.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
    return this.authService.signin(username, password);
  }
}
