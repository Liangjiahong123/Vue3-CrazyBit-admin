import type { AppRouteRecordRaw } from "../types";

export const NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: "/:path(.*)*",
  name: "NotFound",
  // component: LAYOUT,
  meta: {
    title: "NotFound"
  }
};
