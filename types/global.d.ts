// 创建具有指定类型的对象字面量
declare type Recordable<T = any> = Record<string, T>;
declare type Nullable<T> = T | null;

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}
