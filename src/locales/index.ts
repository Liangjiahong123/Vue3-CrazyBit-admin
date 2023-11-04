import { createI18n } from "vue-i18n";

import type { App } from "vue";

export const setupI18n = (app: App) => {
  const i18n = createI18n({});
  app.use(i18n);
};
