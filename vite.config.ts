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
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5173",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    legacyPlugin({ targets: ["defaults", "not IE 11"] }),
    createHtmlPlugin({ minify: true }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: "types/components.d.ts"
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"],
      eslintrc: { enabled: true },
      dts: "types/auto-imports.d.ts"
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
    }),
    viteMockServe({
      ignore: /^\_/,
      mockPath: "mock",
      enable: true,
      logger: false
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
