import { defineConfig } from "windicss/helpers";

export default defineConfig({
  corePlugins: {
    container: false // 不使用container样式，避免冲突
  }
});
