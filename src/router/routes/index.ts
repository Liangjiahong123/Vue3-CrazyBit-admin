import type { AppRouteRecordRaw } from "@/router/types";
import { PageEnum } from "@/enums/pageEnum";

const routes: AppRouteRecordRaw[] = [];

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
  meta: { title: "Login" }
};
// 异步路由
export const asyncRoutes = [...routes];
// 基础路由
export const basicRoutes = [LoginRoute, RootRoute];
