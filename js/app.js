import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./components/App.vue";
import ClickOutside  from "./modules/click-outside"

const app = createApp(App)
    .directive('click-outside' ,ClickOutside)
    .use(createPinia())
    .mount("#app")
