import type { AppRouteRecordRaw } from "@/router/types";

//获取所有路由模块
export function getRouteModule(modules: Recordable) {
  const routeList: AppRouteRecordRaw[] = [];
  Object.keys(modules).forEach((key) => {
    // 获取路由模块
    const route = modules[key]?.default || {};
    // 添加到列表中
    routeList.push(route);
  });
  return routeList;
}
