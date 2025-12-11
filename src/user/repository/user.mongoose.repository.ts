import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user.schema';
import { Model } from 'mongoose';
import { UserAdapter } from '../user.interface';

export class UserMongooseRepository implements UserAdapter {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  findAll(
    page: number = 1,
    limit: number = 10,
    username?: string,
  ): Promise<any[]> {
    return this.userModel
      .find(username ? { username: { $regex: username } } : {})
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();
  }
  findOne(username: string): Promise<any> {
    return this.userModel.findOne({ username });
  }
  create(userObj: any): Promise<any> {
    return this.userModel.create(userObj);
  }
  update(userObj: any): Promise<any> {
    return this.userModel.updateOne(userObj);
  }
  delete(id: string): Promise<any> {
    return this.userModel.deleteOne({ _id: id });
  }
}
