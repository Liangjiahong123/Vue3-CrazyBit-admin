import { defineStore } from "pinia";
import { ThemeEnum } from "@/enums/appEnum";

interface AppState {
  darkMode?: ThemeEnum;
}

export const useAppStore = defineStore("app", {
  state: (): AppState => ({
    darkMode: undefined
  }),
  getters: {
    getDarkMode: (state): ThemeEnum | string => state.darkMode || ThemeEnum.LIGHT
  },
  actions: {
    setDarkMode(payload: ThemeEnum) {
      this.darkMode = payload;
    }
  }
});
