import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

import "normalize.css";
import "./assets/css/reset.css";
import "virtual:windi.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
