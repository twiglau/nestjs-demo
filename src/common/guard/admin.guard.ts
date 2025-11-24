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
      const userInfo = await this.userRepository.find(user.username);
      console.log(JSON.stringify(userInfo), 'userInfo');
      if (
        userInfo.length &&
        userInfo[0]?.['UserRole'].filter((o) => o.roleId === 1).length > 0
      ) {
        // 角色id === 1,是管理员
        return true;
      }
    }

    // 2. 获取用户 信息： 加入逻辑判断 =》 角色判断 =》 权限判断
    return false;
  }
}
