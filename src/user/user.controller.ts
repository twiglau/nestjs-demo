import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Param,
  UseGuards,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { Serialize } from '@/common/decorators/serialize.decorator';
import { PublicUserDto } from '@/access-control/auth/dto/public-user.dto';
// import { AuthGuard } from '@nestjs/passport';
// import { AdminGuard } from '@/common/guard/admin.guard';
import { RolePermissionGuard } from '@/common/guard/role-permission.guard';
import { Public } from '@/common/decorators/public.decorator';
import {
  Permission,
  Read,
  Update,
} from '@/common/decorators/role-permission.decorator';
import { JwtGuard } from '@/common/guard/jwt.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { PublicUpdateUserDto } from './dto/public-update-user.dto';
import { PolicyGuard } from '@/common/guard/policy.guard';

@Controller('user')
@Permission('user')
@UseGuards(JwtGuard, RolePermissionGuard, PolicyGuard)
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  @Serialize(PublicUserDto)
  create(@Body() createUserDto: CreateUserDto) {
    // 该参数没有校验，是因为变为 可选的了
    return this.userRepository.create(createUserDto);
  }

  @Get()
  @Read()
  findAll(
    @Query(
      'page',
      new ParseIntPipe({
        optional: true,
      }),
    )
    page,
    @Query(
      'limit',
      new ParseIntPipe({
        optional: true,
      }),
    )
    limit,
  ) {
    return this.userRepository.findAll(page, limit);
  }

  @Get(':username')
  @Serialize(PublicUserDto)
  findOne(@Param('username') username: string) {
    return this.userRepository.findOne(username);
  }

  @Patch()
  @Serialize(PublicUpdateUserDto)
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userRepository.update(updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userRepository.delete(id);
  }

  @Get('/multi')
  async getHello() {
    // 1. prisma
    // try {
    //   const res = await this.prismaService.user.findMany();
    //   return res;
    // } catch (error) {
    //   console.log('error:', error);
    // }
    // const res = this.prismaClient.user.findMany();
    // return res;
    // 2. typeorm
    const res = await this.userRepository.findOne('twiger-001');
    return res;
    // 3. mongoose
    // const userModel = await this.userModel.find();
    // return userModel;
  }

  // 增加权限配置
  @Get('permission')
  @Read()
  @Update()
  @Public()
  getPermission() {
    return 'permission is ok?';
  }

  // 1. 多个Guard 执行顺序：从下而上
  // 2. 如果前面的Guard,返回false. 那么后面的就不会执行了
  // @UseGuards(AuthGuard('jwt'), AdminGuard) // 3. 从左到右执行
  // @UseGuards(AdminGuard)
  // @UseGuards(AuthGuard('jwt'))
  @Get('test')
  getTest() {
    return 'ok';
  }
}
