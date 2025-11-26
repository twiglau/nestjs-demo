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
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import {
  Create,
  Permission,
  Read,
} from '@/common/decorators/role-permission.decorator';
import { JwtGuard } from '@/common/guard/jwt.guard';
import { AdminGuard } from '@/common/guard/admin.guard';
import { RolePermissionGuard } from '@/common/guard/role-permission.guard';
import { PolicyGuard } from '@/common/guard/policy.guard';
import { FieldUniqueValidationPipe } from '@/common/pipes/unique-validation.pipe';
import { CustomParseIntPipe } from '@/common/pipes/custom-parse-int.pipe';

@Controller('menu')
@UseGuards(JwtGuard, AdminGuard, RolePermissionGuard, PolicyGuard)
@Permission('menu')
@UsePipes(FieldUniqueValidationPipe)
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @Create()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Post('relation')
  @Create()
  createRelation(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.createRelation(createMenuDto);
  }

  @Get()
  @Read()
  findAll(
    @Query('page', new CustomParseIntPipe({ defaultValue: 1 })) page: number,
    @Query('size', new CustomParseIntPipe({ defaultValue: 10 })) size: number,
    @Query('args') args: any = '{}',
  ) {
    let parseArg;
    // eslint-disable-next-line no-useless-catch
    try {
      parseArg = JSON.parse(args);
    } catch (error) {
      throw error;
    }
    return this.menuService.findAll(page, size, parseArg);
  }

  @Get('/tree')
  @Read()
  findTree(
    @Query('page', new CustomParseIntPipe({ defaultValue: 1 })) page: number,
    @Query('size', new CustomParseIntPipe({ defaultValue: 10 })) size: number,
  ) {
    return this.menuService.findTree(page, size);
  }

  @Get(':id')
  @Read()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMenuDto: UpdateMenuDto,
  ) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  @Delete()
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.remove(+id);
  }
}
