import type { AppRouteRecordRaw } from "@/router/types";
import { t } from "@/hooks/web/useI18n";

const dashboard: AppRouteRecordRaw = {
  path: "/dashboard",
  name: "Dashboard",
  redirect: "/dashboard/analysis",
  meta: {
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
        title: t("routes.dashboard.analysis")
      }
    }
  ]
};

export default dashboard;
