import type { Router } from "vue-router";
import { PageEnum } from "@/enums/pageEnum";
import { useUserStoreWithOut } from "@/stores/modules/user";
import { usePermissionStoreWithOut } from "@/stores/modules/permission";

const LOGIN_PATH = PageEnum.BASE_LOGIN;

const WHITE_PATH_LIST: PageEnum[] = [LOGIN_PATH];

export function createPermissionGurad(router: Router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();

  router.beforeEach(async (to, from, next) => {
    const token = userStore.getToken;

    // 白名单处理
    if (WHITE_PATH_LIST.includes(to.path as PageEnum)) {
      next();
      return;
    }

    // 如果没有token
    if (!token) {
      const redirecRoute: { path: string; replace: boolean } = { path: LOGIN_PATH, replace: true };
      next(redirecRoute);
      return;
    }
    // 如果上次更新时间为0，需要更新用户信息
    if (userStore.getLastUpdateTime === 0) {
      try {
        await userStore.getUserInfoAction();
      } catch (e) {
        console.error(e);
        next();
        return;
      }
    }
    // 如果路由已经动态添加, 则直接进入
    if (permissionStore.getHadDynamicAddedRoutes) {
      next();
      return;
    }

    permissionStore.buildRoutesAction();
    next({ path: to.fullPath, replace: true, query: to.query });
  });
}
