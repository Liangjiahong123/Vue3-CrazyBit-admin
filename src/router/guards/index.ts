import type { Router } from "vue-router";
export function setupRouterGuard(router: Router) {
  console.log("初始化路由守卫");
  createPageGuard(router);
}

function createPageGuard(router: Router) {
  // 记录已加载的页面，在下次加载时直接打开，不需再做加载
  const loadedPageMap = new Map<string, boolean>();

  router.beforeEach(async (to) => {});

  router.afterEach((to) => {
    loadedPageMap.set(to.path, true);
  });
}
