import { defineStore } from "pinia";
import { ThemeEnum } from "@/enums/appEnum";
import { CacheKeyEnum } from "@/enums/cacheEnum";

interface AppState {
  darkMode?: ThemeEnum;
}

export const useAppStore = defineStore("app", {
  state: (): AppState => ({
    darkMode: undefined
  }),
  getters: {
    getDarkMode: (state): ThemeEnum | string =>
      state.darkMode || localStorage.getItem(CacheKeyEnum.APP_DARK_MODE_KEY) || ThemeEnum.LIGHT
  },
  actions: {
    setDarkMode(payload: ThemeEnum) {
      this.darkMode = payload;
      localStorage.setItem(CacheKeyEnum.APP_DARK_MODE_KEY, payload);
    }
  }
});
