import type { MenuModule, Menu } from "@/router/types";
import { getRouteModule } from "../helper/route";
import { createStaticMenus } from "../helper/menu";
import { usePermissionStore } from "@/stores/modules/permission";

// 获取所有路由模块
const modules: Recordable = import.meta.glob("./modules/**/*.ts", { eager: true });
const menuList = getRouteModule<MenuModule>(modules);
const staticMenus: Menu[] = createStaticMenus(menuList);
console.log("staticMenus->", staticMenus);

function createAsyncMenus() {
  const permissionStore = usePermissionStore();
  // 过滤隐藏菜单
  const menuFilter = (menus: Menu[]) => {
    return menus.filter((menu) => {
      const showState = !menu.hidden;
      if (showState && menu.children) {
        menu.children = menuFilter(menu.children);
      }
      return showState;
    });
  };

  return menuFilter(permissionStore.frontMenuList);
}

createAsyncMenus();
