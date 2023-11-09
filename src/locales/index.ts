import { createI18n } from "vue-i18n";

import type { I18nOptions } from "vue-i18n";
import type { App } from "vue";

export let i18n: ReturnType<typeof createI18n>;

export const creaetI18nConfig = async (): Promise<I18nOptions> => {
  const lang = "zh-CN";
  const langConfig = await import(`./lang/${lang}.ts`);
  const langContent = langConfig?.default?.content ?? {};

  return {
    legacy: false,
    locale: lang,
    fallbackLocale: "zh-cn",
    messages: {
      [lang]: langContent
    }
  };
};

export const setupI18n = async (app: App) => {
  const config = await creaetI18nConfig();
  i18n = createI18n(config);
  app.use(i18n);
};
