import type { RoleEnum } from "@/enums/roleEnum";

export {};

declare module "vue-router" {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    title: string; // 路由标题
    orderId?: number; // 路由排序
    icon?: string; // 路由图标
    ignoreKeepAlive?: boolean; // 是否忽略缓存
    roles?: RoleEnum[]; // 角色信息
    ignoreRoute?: boolean;
  }
}
