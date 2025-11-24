import {
  Body,
  Controller,
  ParseIntPipe,
  Post,
  Query,
  Param,
  Delete,
  Get,
  Patch,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Serialize } from '@/common/decorators/serialize.decorator';
import { PublicRoleDto } from './dto/public-role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll(
    @Query(
      'page',
      new ParseIntPipe({
        optional: true,
      }),
    )
    page?: number,
    @Query(
      'limit',
      new ParseIntPipe({
        optional: true,
      }),
    )
    limit?: number,
    @Query('search') search?: string,
  ) {
    return this.roleService.findAll(page, limit, search);
  }

  @Get(':id')
  // 对响应部分 RolePermissions 进行格式化
  @Serialize(PublicRoleDto)
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
