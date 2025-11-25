import { Inject, Injectable, NotFoundException } from '@nestjs/common';
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

  async createRelation(data: CreateMenuDto) {
    const menuData = await this._createNested(data);
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

  private async _connectMenuIds(id: number) {
    const menuIds: number[] = [];
    menuIds.push(id);
    const menu = await this.prismaClient.menu.findUnique({
      where: { id: id },
      include: {
        children: true,
      },
    });

    if (!menu) {
      throw new NotFoundException(`数据不存在`);
    }
    if (menu?.children?.length > 0) {
      const childMenus = await Promise.all(
        menu.children.map((child) => this._connectMenuIds(child.id)),
      );
      for (const childIds of childMenus) {
        menuIds.push(...childIds);
      }
    }

    return menuIds;
  }

  async remove(id: number) {
    const idsToDel = await this._connectMenuIds(id);
    return this.prismaClient.$transaction(async (prisma) => {
      // 删除关联表 Meta 数据
      await prisma.menuMeta.deleteMany({
        where: {
          menuId: {
            in: idsToDel,
          },
        },
      });

      // 删除children
      const res = await prisma.menu.deleteMany({
        where: {
          id: {
            in: idsToDel,
          },
        },
      });
      return !!res.count;
    });
  }

  async findAll(page: number, limit: number, args: any = {}) {
    const skip = (page - 1) * limit;
    const includeArg = {
      meta: true,
      children: {
        include: {
          meta: true,
          children: true,
        },
      },
      ...args,
    };
    let pagination: any = {
      skip,
      take: limit,
    };
    if (limit === -1) {
      pagination = {};
    }
    const count = await this.prismaClient.menu.count({
      where: args,
    });
    const data = await this.prismaClient.menu.findMany({
      where: args,
      ...pagination,
      include: {
        ...includeArg,
      },
    });

    return {
      content: data,
      pagination: {
        total: count,
        current: page,
        size: limit,
        pages: Math.ceil(count / limit),
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }
}
