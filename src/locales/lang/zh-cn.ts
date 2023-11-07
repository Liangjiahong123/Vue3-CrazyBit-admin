import { createMsgConfig } from "../utils";
import elementLocale from "element-plus/es/locale/lang/zh-cn";
const enLangModule: Recordable<Recordable> = import.meta.glob("./zh-CN/**/*.ts", { eager: true });

export default {
  content: {
    ...createMsgConfig(enLangModule, "zh-CN"),
    elementLocale
  },
  localeName: "zh-CN"
};
