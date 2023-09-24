import { defineComponent } from "vue";
import type { RouteRecordRaw, RouteMeta } from "vue-router";

// 路由的文件类型：组件，异步import组件，异步自定义函数
export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

// 路由配置
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}
