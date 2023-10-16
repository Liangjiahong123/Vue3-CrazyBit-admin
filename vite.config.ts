import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacyPlugin from "@vitejs/plugin-legacy";
import { createHtmlPlugin } from "vite-plugin-html";
import { createStyleImportPlugin, ElementPlusResolve } from "vite-plugin-style-import";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import WindiCSS from "vite-plugin-windicss";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    legacyPlugin({ targets: ["defaults", "not IE 11"] }),
    createHtmlPlugin({ minify: true }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"],
      eslintrc: { enabled: true }
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`;
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@svg": fileURLToPath(new URL("./src/assets/svg", import.meta.url)),
      "@cpns": fileURLToPath(new URL("./src/components", import.meta.url)),
      "#": fileURLToPath(new URL("./types", import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/styles/config.scss';"
      }
    }
  }
});
