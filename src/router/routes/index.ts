import type { AppRouteRecordRaw } from "@/router/types";
import { PageEnum } from "@/enums/pageEnum";
import { t } from "@/hooks/web/useI18n";

// 导入所有模块
const routeModules: Recordable = import.meta.glob("./modules/**/*.ts", { eager: true });
const routesList = getRouteModule(routeModules);

// 根路由
const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: { title: "Root" }
};

// 登录路由
const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/sys/login/index.vue"),
  meta: { title: t("routes.basic.login") }
};

// 异步路由
export const asyncRoutes = [...routesList];

// 基础路由
export const basicRoutes = [LoginRoute, RootRoute];

function getRouteModule(modules: Recordable) {
  const routeList: AppRouteRecordRaw[] = [];
  Object.keys(modules).forEach((key) => {
    // 获取路由模块
    const route = routeModules[key]?.default || {};
    // 添加到列表中
    routeList.push(route);
  });
  return routeList;
}
