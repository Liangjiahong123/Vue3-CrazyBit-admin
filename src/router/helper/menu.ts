import type { MenuModule, Menu, AppRouteRecordRaw } from "@/router/types";
import { isString, isUrl } from "@/utils/vaildate";
import { treeMap } from "@/utils/helper/treeHelper";
import { cloneDeep } from "lodash-es";
// 菜单路径处理
function concatMenyPath(menus: Menu[], parentPath = "") {
  menus.forEach((menu) => {
    if (!menu.path.startsWith("/") || isUrl(menu.path)) {
      menu.path = `${parentPath}/${menu.path}`;
    }
    if (menu.children?.length) {
      const upperPath = menu.meta?.hidePathForChildren ? parentPath : menu.path;
      concatMenyPath(menu.children, upperPath);
    }
  });
}

// 菜单模块解析
function parseMenuModule(menuModule: MenuModule): Menu {
  const { menu } = menuModule;
  // console.log(menu);
  return menu;
}

// 创建静态菜单
export function createStaticMenus(menuList: MenuModule[]): Menu[] {
  const list: Menu[] = [];
  // 菜单排序
  menuList
    .sort((a, b) => (a.orderId ?? 0) - (b.orderId ?? 0))
    .forEach((menu) => {
      list.push(parseMenuModule(menu));
    });

  return list;
}

// 将路由转换成菜单
export function transformRouteToMenu(routeList: AppRouteRecordRaw[]) {
  // 深拷贝
  const cloneRouteList = cloneDeep(routeList);
  const menuList: AppRouteRecordRaw[] = [];

  // 修改路由项
  cloneRouteList.forEach((route) => {
    const { meta, redirect } = route;
    if (meta.hideChildrenInMenu && isString(redirect)) {
      route.path = redirect;
    }

    menuList.push(route);
  });

  // 提取树结构
  const treeList = treeMap(menuList, {
    conversion: (node: AppRouteRecordRaw) => {
      const { meta: { title, hideMenu = false } = {}, path, redirect } = node;

      return {
        ...(node.meta || {}),
        meta: node.meta,
        name: title,
        path,
        hideMenu,
        ...(redirect ? { redirect } : {})
      };
    }
  });
  // 路径处理
  concatMenyPath(treeList);
  return cloneDeep(treeList);
}
