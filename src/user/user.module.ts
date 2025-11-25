import { forwardRef, Global, Module } from '@nestjs/common';
import { getEnvs } from '@/utils/get-envs';
import { toBoolean } from '@/utils/format';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { TYPEORM_DATABASE } from '@/database/database-constants';
import { MongooseModule } from '@nestjs/mongoose';
import { User as MongooseUser, UserSchema } from './user.schema';
import { UserTypeormRepository } from './repository/user.typeorm.repository';
import { UserMongooseRepository } from './repository/user.mongoose.repository';
import { UserPrismaRepository } from './repository/user.prisma.repository';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
import { RoleModule } from '@/access-control/role/role.module';
import { PolicyModule } from '@/access-control/policy/policy.module';
import { PermissionModule } from '@/access-control/permission/permission.module';

const parseConfig = getEnvs();
const tenantMode = toBoolean(parseConfig['TENANT_MODE']);
const tenantDBType = parseConfig['TENANT_DB_TYPE']?.split(',') || [];

const imports = tenantMode
  ? tenantDBType
      ?.map((db) => {
        switch (db) {
          case 'typeorm':
            // 如果不指定 name, 就会找不到 对应的实例
            return TypeOrmModule.forFeature([User], TYPEORM_DATABASE);
          case 'mongoose':
            return MongooseModule.forFeature([
              { name: MongooseUser.name, schema: UserSchema },
            ]);
          default:
            return null;
        }
      })
      ?.filter(Boolean)
  : [];

const providers = tenantMode
  ? tenantDBType
      .map((db) => {
        switch (db) {
          case 'typeorm':
            return UserTypeormRepository;
          case 'mongoose':
            return UserMongooseRepository;
          case 'prisma':
            return UserPrismaRepository;
          default:
            return null;
        }
      })
      ?.filter(Boolean)
  : [UserPrismaRepository];

@Global()
@Module({
  imports: [...imports, forwardRef(() => RoleModule)],
  providers: [...providers, UserRepository],
  controllers: [UserController],
  exports: [UserRepository], // 导出后，可以在 Auth 等其他模块中使用（ID 依赖注入方式）
})
export class UserModule {}
