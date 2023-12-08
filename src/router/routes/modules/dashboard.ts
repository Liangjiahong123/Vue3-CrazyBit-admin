import type { AppRouteRecordRaw } from "@/router/types";
import { LAYOUT } from "@/router/constants";
import { t } from "@/hooks/web/useI18n";

const dashboard: AppRouteRecordRaw = {
  path: "/dashboard",
  name: "Dashboard",
  component: LAYOUT,
  redirect: "/dashboard/analysis",
  meta: {
    orderId: 10,
    title: t("routes.dashboard.dashboard")
  },
  children: [
    {
      path: "analysis",
      name: "Analysis",
      component: () => import("@/views/dashboard/analysis/index.vue"),
      meta: {
        title: t("routes.dashboard.analysis")
      }
    },
    {
      path: "workbench",
      name: "Workbench",
      component: () => import("@/views/dashboard/workbench/index.vue"),
      meta: {
        title: t("routes.dashboard.workbench")
      }
    }
  ]
};

export default dashboard;
