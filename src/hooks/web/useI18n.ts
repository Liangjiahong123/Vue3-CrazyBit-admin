import type { VueI18nTranslation } from "vue-i18n";
import { i18n } from "@/locales";

type I18nFnRestArg = [string, any];

/**
 * @param namespace
 * @example
 * useI18n('sys.login') , t('logoTitle')
 * ===
 * t('sys.login.logoTitle')
 */
export function useI18n(namespace?: string) {
  const defaultFn = {
    t: (key: string) => getKey(namespace, key)
  };
  if (!i18n) return defaultFn;

  const { t } = i18n.global;

  const $t = (key: string, ...arg: any[]) => {
    if (!key) return "";
    if (!key.includes(".") && !namespace) return key;
    return (t as VueI18nTranslation)(getKey(namespace, key), ...(arg as I18nFnRestArg));
  };
  return { t: $t };
}

// 提供到路由中配合i18n ally插件使用，与vue-i18n插件解耦
export function t(key: string) {
  return key;
}

function getKey(namespace: string | undefined, key: string) {
  if (!namespace) return key;
  if (key.startsWith(namespace)) return key;

  return `${namespace}.${key}`;
}
