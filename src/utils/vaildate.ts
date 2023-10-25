const toString = Object.prototype.toString;

export const isArray = (value: any): value is any[] => toString.call(value) === "[object Array]";
