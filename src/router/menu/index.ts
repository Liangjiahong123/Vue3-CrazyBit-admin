import type { MenuModule, Menu } from "@/router/types";
import { getRouteModule } from "../helper/route";
import { createStaticMenus } from "../helper/menu";

// 获取所有路由模块
const modules: Recordable = import.meta.glob("./modules/**/*.ts", { eager: true });
const menuList = getRouteModule<MenuModule>(modules);
console.log(menuList);

const staticMenus: Menu[] = createStaticMenus(menuList);
