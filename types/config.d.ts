export type LocaleType = "zh-CN" | "en" | "ja" | "ko";

// 国际化配置
export interface LocaleSetting {
  locale: LocaleType;
  fallback: LocaleType;
  useableLocales: LocaleType[];
}

// 项目配置
export interface ProjectConfig {}
