import { createI18n } from "vue-i18n";

import type { App } from "vue";

export let i18n: ReturnType<typeof createI18n>;

export const setupI18n = (app: App) => {
  i18n = createI18n({});
  app.use(i18n);
};
