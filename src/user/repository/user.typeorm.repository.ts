import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { TYPEORM_DATABASE } from '@/database/database-constants';
import { Repository, Like } from 'typeorm';
import { UserAdapter } from '../user.interface';

export class UserTypeormRepository implements UserAdapter {
  // 需要指定 TYPEORM_DATABASE
  // Typeorm 异步初始化，不指定，会找不到对应实例
  constructor(
    @InjectRepository(User, TYPEORM_DATABASE)
    private readonly user: Repository<User>,
  ) {}

  findAll(
    page: number = 1,
    limit: number = 10,
    username?: string,
  ): Promise<any[]> {
    const skip = (page - 1) * limit;
    return this.user.find({
      skip,
      take: limit,
      where: username ? { username: Like(`%${username}%`) } : {},
    });
  }
  findOne(username: string): Promise<any> {
    return this.user.findOneBy({ username });
  }
  create(userObj: any): Promise<any> {
    return this.user.save(userObj);
  }
  update(userObj: any): Promise<any> {
    return this.user.update(userObj.id, userObj);
  }
  delete(id: string): Promise<any> {
    return this.user.delete(id);
  }
}
