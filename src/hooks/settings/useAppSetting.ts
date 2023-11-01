import { useAppStore } from "@/stores/modules/app";
import { ThemeEnum } from "@/enums/appEnum";

export const useAppSetting = () => {
  const appStore = useAppStore();

  const getDarkMode = computed(() => appStore.getDarkMode);

  const setDarkMode = (mode: ThemeEnum) => appStore.setDarkMode(mode);

  return {
    getDarkMode,
    setDarkMode
  };
};
