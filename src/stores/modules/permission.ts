import type { RouteRecordRaw } from "vue-router";
import type { Menu, AppRouteRecordRaw } from "@/router/types";

import { defineStore } from "pinia";
import { pinia } from "@/stores";
import { useUserStore } from "./user";
import { router } from "@/router";
import { asyncRoutes } from "@/router/routes";
import { transformRouteToMenu } from "@/router/helper/menu";
import { filter } from "@/utils/helper/treeHelper";

interface PermissionState {
  hadDynamicAddedRoutes: boolean; // 路由是否已动态添加
  lastBuildMenuTime: number; // 菜单上次生成时间
  frontMenuList: Menu[]; // 菜单列表
}

export const usePermissionStore = defineStore("permission", {
  state: (): PermissionState => ({
    hadDynamicAddedRoutes: false,
    lastBuildMenuTime: 0,
    frontMenuList: []
  }),

  getters: {
    getHadDynamicAddedRoutes: (state): boolean => state.hadDynamicAddedRoutes,
    getLastBuildMenuTime: (state): number => state.lastBuildMenuTime,
    getFrontMenuList: (state): Menu[] => state.frontMenuList
  },

  actions: {
    setDynamicAddedRoute(added: boolean) {
      this.hadDynamicAddedRoutes = added;
    },
    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime();
    },
    setFrontMenuListAction(menus: Menu[]) {
      this.frontMenuList = menus;
    },

    // 创建路由
    createRoutesAction(): AppRouteRecordRaw[] {
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

      // 根据角色权限对路由进行过滤
      routes = filter(asyncRoutes, routerFilter); // 过滤非一级路由
      routes = routes.filter(routerFilter); // 过滤一级路由
      // 将路由转换成菜单
      const menuList = transformRouteToMenu(routes);
      // 移除需要忽略的路由
      routes = filter(routes, routeIngnoreFilter); // 过滤非一级路由
      routes = routes.filter(routeIngnoreFilter); // 过滤一级路由

      // 对菜单排序
      menuList.sort((a, b) => (a.meta?.orderId || 0) - (b.meta?.orderId || 0));
      // 设置菜单列表
      this.setFrontMenuListAction(menuList);

      return routes;
    },

    buildRoutesAction() {
      const routes = this.createRoutesAction();
      routes.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw);
      });
      this.setDynamicAddedRoute(true);
    }
  }
});

export function usePermissionStoreWithOut() {
  return usePermissionStore(pinia);
}
