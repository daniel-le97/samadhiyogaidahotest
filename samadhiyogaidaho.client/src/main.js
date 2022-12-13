import "@mdi/font/css/materialdesignicons.css";
import "bootstrap";
import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import { registerGlobalComponents } from "./registerGlobalComponents";
import { router } from "./router";
import { MotionPlugin } from "@vueuse/motion";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

import Particles from "vue3-particles";

const root = createApp(App);
registerGlobalComponents(root);

root.use(router).use(MotionPlugin).use(Particles).use(vuetify).mount("#app");
