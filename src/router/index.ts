import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { basicRoutes } from "./routes";

// 配置白名单
const WHITE_LIST: string[] = [];
(function addWhiteRoute(routes: any[]) {
  routes.forEach((item) => {
    WHITE_LIST.push(item.name);
    addWhiteRoute(item.children || []);
  });
})(basicRoutes);

const routes: RouteRecordRaw[] = [];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
