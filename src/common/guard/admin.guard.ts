import { UserRepository } from '@/user/user.repository';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private userRepository: UserRepository) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. 获取请求对象
    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (user) {
      // 2. 获取用户 信息： 加入逻辑判断 =》 角色判断 =》 权限判断
      const userInfo = await this.userRepository.findOne(user.username);
      console.log('AdminGuard:', userInfo);
    }

    return true;
  }
}
