import type { Menu } from "@/router/types";
import { defineStore } from "pinia";
import { pinia } from "@/stores";

interface PermissionState {
  frontMenuList: Menu[];
}

export const usePermissionStore = defineStore("permission", {
  state: (): PermissionState => ({
    frontMenuList: []
  }),

  getters: {
    getFrontMenuList: ({ frontMenuList }): Menu[] => frontMenuList
  },

  actions: {
    setFrontMenuList(payload: Menu[]) {
      this.frontMenuList = payload;
    }

    // 创建路由
  }
});

export function usePermissionStoreWithOut() {
  return usePermissionStore(pinia);
}
