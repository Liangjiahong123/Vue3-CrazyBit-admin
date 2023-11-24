import type { AppRouteRecordRaw } from "@/router/types";
import { getRouteModule } from "../helper/route";
import { PageEnum } from "@/enums/pageEnum";
import { t } from "@/hooks/web/useI18n";
// 获取所有路由模块
const modules: Recordable = import.meta.glob("./modules/**/*.ts", { eager: true });
const routeList = getRouteModule<AppRouteRecordRaw>(modules);

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
export const asyncRoutes = [...routeList];

// 基础路由
export const basicRoutes = [LoginRoute, RootRoute];
