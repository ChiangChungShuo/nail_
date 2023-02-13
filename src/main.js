import { createApp } from "vue"; //來自於套件
import { createPinia } from "pinia";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue"; //來自src資料夾內
import router from "./router";
import "./assets/all.scss";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.component("VueLoading", Loading); //全域原件
app.mount("#app");
