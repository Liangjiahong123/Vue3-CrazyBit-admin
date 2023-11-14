import type { LocaleSetting } from "#/config";
import { LocaleEnum } from "@/enums/appEnum";

interface LocaleConfig {
  text: string;
  command: string;
}

export const localeSetting: LocaleSetting = {
  locale: LocaleEnum.ZH_CN, // 当前语言
  fallback: LocaleEnum.ZH_CN, // 默认语言
  useableLocales: [LocaleEnum.EN, LocaleEnum.ZH_CN] // 可用的语言
};

export const localeList: LocaleConfig[] = [
  { text: "简体中文", command: LocaleEnum.ZH_CN },
  { text: "English", command: LocaleEnum.EN }
];
