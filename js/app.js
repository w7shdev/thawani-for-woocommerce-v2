import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./components/App.vue";

const app = createApp(App).use(createPinia()).mount("#app")
