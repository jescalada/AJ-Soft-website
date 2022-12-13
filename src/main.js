import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import VueScrollTo from "vue-scrollto";

import "aos/dist/aos.css";
import "./css/style.css";

const app = createApp(App);
app.use(router);
app.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});
app.mount("#app");
