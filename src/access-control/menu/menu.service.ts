import { Inject, Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PRISMA_DATABASE } from '@/database/database-constants';
import { PrismaClient } from 'prisma/client/postgresql';

@Injectable()
export class MenuService {
  constructor(@Inject(PRISMA_DATABASE) private prismaClient: PrismaClient) {}

  private async _createNested(dto: CreateMenuDto, parentId?: number) {
    const { meta, children = [], ...restData } = dto;
    const menu = {
      parentId,
      ...restData,
      meta: {
        create: meta,
      },
    };
    const parent = await this.prismaClient.menu.create({
      data: menu as any,
    });
    if (children?.length > 0) {
      const childData = await Promise.all(
        children?.map((child) => this._createNested(child, parent.id)),
      );
      parent['children'] = childData;
    }

    return parent;
  }

  async create(createMenuDto: CreateMenuDto) {
    const menuData = await this._createNested(createMenuDto);
    return this.prismaClient.menu.findUnique({
      where: { id: menuData.id },
      include: {
        meta: true,
        children: {
          include: {
            meta: true,
            children: true,
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all menu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
