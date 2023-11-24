//获取所有路由模块
export function getRouteModule<T = any>(modules: Recordable) {
  const list: T[] = [];
  Object.keys(modules).forEach((key) => {
    const route = modules[key]?.default || {}; // 获取route模块
    list.push(route); // 添加到列表中
  });
  return list;
}
