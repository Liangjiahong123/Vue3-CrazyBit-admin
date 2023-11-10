export type LocaleType = "zh-CN" | "en" | "ja" | "ko";

export interface LocaleSetting {
  locale: LocaleType;
  fallback: LocaleType;
  useableLocales: LocaleType[];
}
