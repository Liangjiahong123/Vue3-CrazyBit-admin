// 判断是否为数组
export function isArray(value: unknown): value is any[] {
  return validHelper(value, "Array");
}

//判断是否为函数
export function isFunction(value: unknown): value is Function {
  return validHelper(value, "Function");
}

// 判断是否为null
export function isNull(value: unknown): value is null {
  return validHelper(value, "Null");
}

// 判断是否为undefined
export function isUndefined(value: unknown): value is undefined {
  return validHelper(value, "Undefined");
}

// 判断是否为字符串
export function isString(value: unknown): value is string {
  return validHelper(value, "String");
}

// 判断是否为对象
export function isObject(value: unknown): value is Record<any, any> {
  return !isNull(value) && validHelper(value, "Object");
}

// 判断是否为空
export function isEmpty<T = unknown>(value: T): value is T {
  // 如果是数组或字符串则判断长度是否为0
  if (isArray(value) || isString(value)) return value.length === 0;
  // 如果是Map或Set则判断size是否为0
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  // 如果是对象则判断key的数量是否为0
  if (isObject(value)) return Reflect.ownKeys(value).length === 0;
  // 其他类型直接返回false
  return false;
}

// 判断是否为链接
export function isUrl(path: string): boolean {
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/;
  return reg.test(path);
}

function validHelper(val: unknown, type: string) {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
}
