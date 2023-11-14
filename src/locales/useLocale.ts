import type { LocaleType } from "#/config";
import { useLocaleStoreWithOut } from "@/stores/modules/locale";
import { storeToRefs } from "pinia";
import { i18n } from "@/locales";
import { setHtmlLang } from "./utils";

export function useLocale() {
  const localeStore = useLocaleStoreWithOut();
  const { getLocale } = storeToRefs(localeStore);

  const setLocale = async (locale: LocaleType) => {
    const i18nGlobal = i18n.global;
    const currentLocale = unref(i18nGlobal.locale);
    // 如果和当前语言一致直接返回
    if (currentLocale === locale) return locale;
    // 否则更新语言
    const langModules = await import(`./lang/${locale}.ts`);
    const langContent = langModules?.default?.content;
    if (!langContent) return;
    i18nGlobal.setLocaleMessage(locale, langContent); // 更新语言信息
    setI18nLocale(locale); // 更新语言
  };

  return { getLocale, setLocale };
}

function setI18nLocale(locale: LocaleType) {
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as Ref).value = locale;
  }
  const localeStore = useLocaleStoreWithOut();
  localeStore.setLocaleInfo({ locale });
  // 确保浏览器正确解析网页的语言环境
  setHtmlLang(locale);
}
