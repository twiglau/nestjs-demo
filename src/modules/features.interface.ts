export abstract class FeatureAdapter<T = any> {
  abstract find(page: number, limit: number): Promise<IResList<T>>;
  abstract findOne(id: number): Promise<T>;
  abstract create(obj: any): Promise<T>;
  abstract update(id: number, obj: any): Promise<T>;
  abstract remove(id: number): Promise<T>;
}
