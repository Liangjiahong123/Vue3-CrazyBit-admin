import type { MenuModule, Menu } from "@/router/types";

// 菜单路径处理
function concatMenyPath() {}
// 菜单模块解析
function parseMenuModule(menuModule: MenuModule): Menu {
  const { menu } = menuModule;
  // console.log(menu);
  concatMenyPath();
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
