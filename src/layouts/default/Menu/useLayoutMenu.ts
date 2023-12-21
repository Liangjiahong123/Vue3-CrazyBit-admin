import type { Menu } from "@/router/types";
import { createMenus } from "@/router/menu";
import { usePermissionStore } from "@/stores/modules/permission";

export function useLayoutMenu() {
  const menusLayout = ref<Menu[]>([]);

  const permissionStore = usePermissionStore();

  watch([() => permissionStore.getLastBuildMenuTime], () => genMenus(), { immediate: true });

  function genMenus() {
    menusLayout.value = createMenus();
  }

  return { menusLayout };
  // const menus = createMenus();
}
