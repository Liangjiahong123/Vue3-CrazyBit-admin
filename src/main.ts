import "normalize.css";
import "./styles/index.scss";
import "virtual:windi.css";

import { createApp } from "vue";

import { createPinia } from "pinia";
import { setupRouter } from "@/router";

import App from "./App.vue";

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);

  app.use(createPinia());

  app.mount("#app");
}

bootstrap();
