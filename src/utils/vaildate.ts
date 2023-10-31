const vaildHelper = (val: unknown, type: string) => {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
};

// 判断是否为数组
export const isArray = (value: unknown): value is any[] => vaildHelper(value, "Array");

//判断是否为函数
export const isFunction = (value: unknown): value is Function => vaildHelper(value, "Function");

// 判断是否为null
export const isNull = (value: unknown): value is null => vaildHelper(value, "Null");

// 判断是否为undefined
export const isUndefined = (value: unknown): value is undefined => vaildHelper(value, "Undefined");

// 判断是否为字符串
export const isString = (value: unknown): value is string => vaildHelper(value, "String");

// 判断是否为对象
export const isObject = (value: unknown): value is Record<any, any> => {
  return !isNull(value) && vaildHelper(value, "Object");
};

// 判断是否为空
export const isEmpty = <T = unknown>(value: T): value is T => {
  // 如果是数组或字符串则判断长度是否为0
  if (isArray(value) || isString(value)) return value.length === 0;
  // 如果是Map或Set则判断size是否为0
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  // 如果是对象则判断key的数量是否为0
  if (isObject(value)) return Reflect.ownKeys(value).length === 0;
  // 其他类型直接返回false
  return false;
};
