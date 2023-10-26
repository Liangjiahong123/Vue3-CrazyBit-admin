const toString = Object.prototype.toString;

// 判断是否为数组
export const isArray = (value: unknown): value is any[] =>
  toString.call(value) === "[object Array]";

//判断是否为函数
export const isFunction = (value: unknown): value is Function =>
  toString.call(value) === "[object Function]";
