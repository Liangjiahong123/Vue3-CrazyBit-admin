import type { LocaleSetting } from "#/config";

import { CacheKeyEnum } from "@/enums/cacheEnum";
import { LocaleEnum } from "@/enums/appEnum";
import { defineStore } from "pinia";
import { pinia } from "@/stores";
import { localeSetting } from "@/settings/localeSettings";

const curLocaleInfo = (localStorage.getItem(CacheKeyEnum.LOCALE_KEY) ||
  localeSetting) as LocaleSetting;

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
    setLocaleInfo(payload) {}
  }
});

export const useLocaleStoreWithOut = () => useLocaleStore(pinia);
