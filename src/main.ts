import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/index.css";

import router from "./router";

// toast notification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


// maska;
import Maska from "maska";

// element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";


const app = createApp(App);
app.use(router);
app.use(Toast);
app.use(Maska);
app.use(ElementPlus);
app.mount("#app");
