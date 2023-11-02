import "normalize.css";
import "virtual:windi.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./styles/index.scss";

import { createApp } from "vue";

import { setupStore } from "@/stores";
import { setupRouter } from "@/router";

import App from "./App.vue";

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  setupStore(app);

  app.mount("#app");
}

bootstrap();
