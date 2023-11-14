import "normalize.css";
import "virtual:windi.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/index.scss";

import { createApp } from "vue";

import { setupStore } from "@/stores";
import { setupRouter } from "@/router";
import { setupRouterGuard } from "@/router/guards";
import { setupI18n } from "@/locales";

import App from "./App.vue";

async function bootstrap() {
  const app = createApp(App);
  // 初始化store
  setupStore(app);
  //初始化i18n
  await setupI18n(app);
  // 初始化路由
  setupRouter(app);
  // 初始化路由守卫
  setupRouterGuard();
  app.mount("#app");
}

bootstrap();
