import type { RoleEnum } from "@/enums/roleEnum";

export {};

declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    title: string; // 路由标题
    orderId?: number; // 路由排序
    icon?: string; // 路由图标
    ignoreKeepAlive?: boolean; // 是否忽略缓存
    roles?: RoleEnum[]; // 角色信息
    ignoreRoute?: boolean; // 是否忽略权限
    hideChildrenInMenu?: boolean; // 是否隐藏所有子菜单
    hidePathForChildren?: boolean; // 是否在子级菜单中忽略本级path
    hideMenu?: boolean; // 当前路由是否不再显示
  }
}
