import { SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Action } from '../enum/action.enum';

const accumulateMetadata = (key: string, permission: string): any => {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor?: TypedPropertyDescriptor<any>,
  ) => {
    const reflector = new Reflector();

    if (descriptor && descriptor.value) {
      // 针对于 方法的  -> function
      const existingPermissions = reflector.get(key, descriptor.value) || [];
      const newPermissions = [...existingPermissions, permission];
      SetMetadata(key, newPermissions)(target, propertyKey, descriptor);
    } else {
      // 针对于类的 -> constructor
      const existingPermissions = reflector.get(key, target) || [];
      const newPermissions = [...existingPermissions, permission];
      SetMetadata(key, newPermissions)(target);
    }
  };
};

export const PERMISSION_KEY = 'permission';

export const Permission = (permission: string) =>
  accumulateMetadata(PERMISSION_KEY, permission);

// 如果直接在 key 上，添加多个元数据。会把之前添加的给覆盖掉。
// @Public()
// @Delete()
// export const Create = () =>
//   SetMetadata(PERMISSION_KEY, Action.Create.toLocaleUpperCase());
export const Create = () =>
  accumulateMetadata(PERMISSION_KEY, Action.Create.toLocaleLowerCase());
export const Read = () =>
  accumulateMetadata(PERMISSION_KEY, Action.Read.toLocaleLowerCase());
export const Update = () =>
  accumulateMetadata(PERMISSION_KEY, Action.Update.toLocaleLowerCase());
export const Delete = () =>
  accumulateMetadata(PERMISSION_KEY, Action.Delete.toLocaleLowerCase());
export const Manage = () =>
  accumulateMetadata(PERMISSION_KEY, Action.Manage.toLocaleLowerCase());
