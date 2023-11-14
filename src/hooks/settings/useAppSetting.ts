import { useAppStore } from "@/stores/modules/app";
import { ThemeEnum } from "@/enums/appEnum";
import { storeToRefs } from "pinia";

export const useAppSetting = () => {
  const appStore = useAppStore();

  const { getDarkMode } = storeToRefs(appStore);

  const setDarkMode = (mode: ThemeEnum) => appStore.setDarkMode(mode);

  return {
    getDarkMode,
    setDarkMode
  };
};
