import "normalize.css";
import "./styles/index.scss";
import "virtual:windi.css";

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
