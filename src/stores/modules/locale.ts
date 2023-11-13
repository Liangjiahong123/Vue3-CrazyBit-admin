import type { LocaleSetting } from "#/config";

import { CacheKeyEnum } from "@/enums/cacheEnum";
import { LocaleEnum } from "@/enums/appEnum";
import { defineStore } from "pinia";
import { pinia } from "@/stores";
import { localeSetting } from "@/settings/localeSettings";

const lsLocale = JSON.parse(localStorage.getItem(CacheKeyEnum.LOCALE_KEY) as any);
const curLocaleInfo = (lsLocale || localeSetting) as LocaleSetting;

interface LocaleState {
  localInfo: LocaleSetting;
}
export const useLocaleStore = defineStore("locale", {
  state: (): LocaleState => ({
    localInfo: curLocaleInfo
  }),

  getters: {
    getLocale: ({ localInfo }) => localInfo?.locale ?? LocaleEnum.ZH_CN
  },

  actions: {
    setLocaleInfo(payload: Partial<LocaleSetting>) {
      this.localInfo = { ...this.localInfo, ...payload };
      localStorage.setItem(CacheKeyEnum.LOCALE_KEY, JSON.stringify(this.localInfo));
    }
  }
});

// 在组件外部使用
export const useLocaleStoreWithOut = () => useLocaleStore(pinia);
