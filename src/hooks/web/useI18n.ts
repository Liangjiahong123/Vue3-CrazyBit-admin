import { i18n } from "@/locales";

import type { VueI18nTranslation } from "vue-i18n";

type I18nFnRestArg = [string, any];

const getKey = (namespace: string | undefined, key: string) => {
  if (!namespace) return key;
  if (key.startsWith(namespace)) return key;

  return `${namespace}.${key}`;
};
/**
 * @param namespace
 * @example
 * useI18n('sys.login') , t('logoTitle')
 * ===
 * t('sys.login.logoTitle')
 */
export const useI18n = (namespace?: string) => {
  const defaultFn = {
    t: (key: string) => getKey(namespace, key)
  };
  if (!i18n) return defaultFn;

  const { t } = i18n.global;

  const $t = (key: string, ...arg: any[]) => {
    if (!key) return;
    if (!key.includes(".") && !namespace) return key;

    return (t as VueI18nTranslation)(getKey(namespace, key), ...(arg as I18nFnRestArg));
  };
  return { t: $t };
};
