import type { AppRouteRecordRaw } from "@/router/types";
import { PageEnum } from "@/enums/pageEnum";

// 根路由
const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root"
  }
};

const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("@/views/sys/login/index.vue"),
  meta: {
    title: "Login"
  }
};

export const basicRoutes = [LoginRoute, RootRoute];
