import type { RouteRecordRaw, RouteMeta } from "vue-router";

// 路由的文件类型：组件，异步import组件，异步自定义函数
export type Component<T = any> =
  | (() => Promise<typeof import("*.vue")>)
  | ReturnType<typeof defineComponent>
  | (() => Promise<T>);

interface AppRouteMeta extends RouteMeta {
  title: string; // 路由标题
  orderId?: number; // 路由排序
  icon?: string; // 路由图标
  ignoreKeepAlive?: boolean; // 是否忽略缓存
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta" | "children"> {
  name: string;
  meta: AppRouteMeta;
  component?: Component | string;
  children?: AppRouteRecordRaw[];
}

export interface Menu {
  name: string; // 菜单名称
  path: string; // 菜单路径
  icon?: string; // 菜单图片，如果没有则使用router.meta.icon
  disabled?: boolean; // 是否禁用
  children?: Menu[]; // 子菜单
  orderId?: number; // 菜单排序
  hidden?: boolean; // 是否隐藏
  meta: Partial<AppRouteMeta>; // 菜单额外信息
}

export interface MenuModule {
  menu: Menu;
  orderId?: number;
}
