import type { I18nOptions } from "vue-i18n";
import type { App } from "vue";

import { createI18n } from "vue-i18n";
import { useLocaleStoreWithOut } from "@/stores/modules/locale";
import { localeSetting } from "@/settings/localeSettings";
import { setHtmlLang } from "./utils";

export let i18n: ReturnType<typeof createI18n>;

async function createI18nConfig(): Promise<I18nOptions> {
  const { fallback, useableLocales } = localeSetting;
  const localeStore = useLocaleStoreWithOut();
  const lang = localeStore.getLocale;
  const langConfig = await import(`./lang/${lang}.ts`);
  const langContent = langConfig?.default?.content ?? {};
  setHtmlLang(lang);

  return {
    legacy: false,
    locale: lang,
    fallbackLocale: fallback,
    messages: {
      [lang]: langContent
    },
    availableLocales: useableLocales,
    sync: true
  };
}

export async function setupI18n(app: App) {
  const config = await createI18nConfig();
  i18n = createI18n(config);
  app.use(i18n);
}
