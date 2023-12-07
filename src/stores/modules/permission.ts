import type { Menu, AppRouteRecordRaw } from "@/router/types";

import { defineStore } from "pinia";
import { pinia } from "@/stores";

import { filter } from "@/utils/helper/treeHelper";

import { asyncRoutes } from "@/router/routes";
import { transformRouteToMenu } from "@/router/helper/menu";
import { useUserStore } from "./user";

interface PermissionState {
  frontMenuList: Menu[];
}

export const usePermissionStore = defineStore("permission", {
  state: (): PermissionState => ({
    frontMenuList: []
  }),

  getters: {
    getFrontMenuList: ({ frontMenuList }): Menu[] => frontMenuList
  },

  actions: {
    setFrontMenuListAction(payload: Menu[]) {
      this.frontMenuList = payload;
    },

    // 创建路由
    async createRoutesAction(): Promise<AppRouteRecordRaw[]> {
      const userStore = useUserStore();
      let routes: AppRouteRecordRaw[] = [];
      const roleList = toRaw(userStore.getRoleList) || [];

      // 路由过滤(角色)
      const routerFilter = (route: AppRouteRecordRaw) => {
        const { meta: { roles } = {} } = route;
        if (!roles) return true;
        return roleList.some((role) => roles.includes(role));
      };

      //过滤需要忽略的路由
      const routeIngnoreFilter = (route: AppRouteRecordRaw) => !route.meta?.ignoreRoute;
      console.log(asyncRoutes);
      // 根据角色权限对路由进行过滤
      routes = filter(asyncRoutes, routerFilter); // 过滤非一级路由
      routes = routes.filter(routerFilter); // 过滤一级路由
      // 将路由转换成菜单
      const menuList = transformRouteToMenu(routes);
      console.log(menuList);

      // 移除需要忽略的路由
      routes = filter(routes, routeIngnoreFilter); // 过滤非一级路由
      routes = routes.filter(routeIngnoreFilter); // 过滤一级路由

      // 对菜单排序
      menuList.sort((a, b) => (a.meta?.orderId || 0) - (b.meta?.orderId || 0));
      // 设置菜单列表
      this.setFrontMenuListAction(menuList);
      return routes;
    }
  }
});

export function usePermissionStoreWithOut() {
  return usePermissionStore(pinia);
}
