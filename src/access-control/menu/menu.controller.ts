import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import {
  Create,
  Permission,
} from '@/common/decorators/role-permission.decorator';
import { JwtGuard } from '@/common/guard/jwt.guard';
import { AdminGuard } from '@/common/guard/admin.guard';
import { RolePermissionGuard } from '@/common/guard/role-permission.guard';
import { PolicyGuard } from '@/common/guard/policy.guard';

@Controller('menu')
@UseGuards(JwtGuard, AdminGuard, RolePermissionGuard, PolicyGuard)
@Permission('menu')
@UsePipes()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @Create()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
