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
      results: data,
      pagination: {
        total: count,
        current: page,
        size: limit,
        pages: Math.ceil(count / limit),
      },
    };
  }

  findTree(skip: number, limit: number, args: any = {}) {
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
    return this.prismaClient.menu.findMany({
      where: {
        parentId: null,
      },
      ...pagination,
      include: {
        ...includeArg,
      },
    });
  }

  findOne(id: number) {
    return this.prismaClient.menu.findUnique({
      where: { id: +id },
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
  findAllByIds(ids: number[]) {
    return this.prismaClient.menu.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        children: true,
        parent: true,
      },
    });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    const { children = [], meta, ...restData } = updateMenuDto;
    return this.prismaClient.$transaction(
      async (prismaClient: PrismaClient) => {
        // 先更新父级
        const data = await prismaClient.menu.update({
          where: { id: +id },
          data: {
            ...restData,
          } as any,
        });

        if (meta) {
          await prismaClient.menuMeta.upsert({
            where: { menuId: +id },
            create: { ...meta, menuId: +id },
            update: meta,
          });
        }

        // 是否有children
        if (children?.length > 0) {
          // 获取旧子菜单 ids
          const menuIds = (await this._connectMenuIds(+id)).filter(
            (o) => o !== id,
          );
          // 删除旧子菜单 meta 数据
          await prismaClient.menuMeta.deleteMany({
            where: {
              menuId: {
                in: menuIds,
              },
            },
          });
          // 删除旧的子菜单
          await prismaClient.menu.deleteMany({
            where: {
              parentId: data.id,
            },
          });
          // 重新创建新的子菜单
          await Promise.all(
            children.map(async (child) => this._createNested(child, data.id)),
          );
        }

        return prismaClient.menu.findUnique({
          where: {
            id: data.id,
          },
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
      },
    );
  }
}
