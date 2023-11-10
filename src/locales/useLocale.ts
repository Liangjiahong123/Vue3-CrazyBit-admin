import type { LocaleType } from "#/config";
import { useLocaleStoreWithOut } from "@/stores/modules/locale";
import { storeToRefs } from "pinia";

export const useLocale = () => {
  const localeStore = useLocaleStoreWithOut();
  const { getLocale } = storeToRefs(localeStore);

  const setLocale = (lang: LocaleType) => {};

  return { getLocale };
};
