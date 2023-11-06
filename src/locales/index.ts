import { createI18n } from "vue-i18n";

import type { App } from "vue";

export let i18n: ReturnType<typeof createI18n>;

const creaetI18nConfig = async () => {
  const lang = "en";
  const langConfig = await import(`./lang/${lang}.ts`);
};

export const setupI18n = (app: App) => {
  creaetI18nConfig();
  i18n = createI18n({});
  app.use(i18n);
};
