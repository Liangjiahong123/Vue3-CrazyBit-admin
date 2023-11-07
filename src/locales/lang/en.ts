import { createMsgConfig } from "../utils";
import elementLocale from "element-plus/es/locale/lang/en";
const enLangModule: Recordable<Recordable> = import.meta.glob("./en/**/*.ts", { eager: true });

export default {
  content: {
    ...createMsgConfig(enLangModule, "en"),
    elementLocale
  },
  localeName: "en"
};
