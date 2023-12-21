import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import type { App } from "vue";

import { basicRoutes } from "./routes";

// 配置白名单
const WHITE_LIST: string[] = [];
(function addWhiteRoute(routes: any[]) {
  routes.forEach((item) => {
    WHITE_LIST.push(item.name);
    addWhiteRoute(item.children || []);
  });
})(basicRoutes);

// 创建路由
export const router = createRouter({
  history: createWebHashHistory(), // hash模式
  routes: basicRoutes as RouteRecordRaw[], // 初始路由列表
  strict: true, // 禁止尾部斜杠
  scrollBehavior: () => ({ left: 0, top: 0 }) // 路由切换滚动到顶部
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
