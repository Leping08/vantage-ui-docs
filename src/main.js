import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VantageUI from "vantage-ui";
import "highlight.js/styles/atom-one-dark.css";
import "./assets/tailwind.css";
import VueHighlightJS from "vue3-highlightjs";

createApp(App)
  .use(store)
  .use(router)
  .use(VantageUI, { color: "cyan" })
  .use(VueHighlightJS)
  .mount("#app");
