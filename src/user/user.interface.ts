export abstract class UserAdapter {
  abstract findAll(
    page?: number,
    limit?: number,
    username?: string,
  ): Promise<any[]>;
  abstract findOne(username: string): Promise<any>;
  abstract create(userObj: any): Promise<any>;
  abstract update(userObj: any): Promise<any>;
  abstract delete(id: string): Promise<any>;
}
