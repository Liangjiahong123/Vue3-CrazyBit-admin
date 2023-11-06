import { formatMsg } from "../utils";
import elementLocale from "element-plus/es/locale/lang/en";
const enLangModule: Recordable<Recordable> = import.meta.glob("./en/**/*.ts", { eager: true });

formatMsg(enLangModule, "en");

export default {
  message: {
    elementLocale
  }
};
