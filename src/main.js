import { createApp } from "vue"; //來自於套件
import { createPinia } from "pinia";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
// main.js
import $ from "jquery";
window.$ = $;
// 匯入 vee-validate 主套件
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
// 匯入 vee-validate 相關規則
import { required, email, min } from "@vee-validate/rules";
// 匯入多國語系的功能
import { localize, setLocale } from "@vee-validate/i18n";
// 匯入繁體中文語系檔案
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import App from "./App.vue"; //來自src資料夾內
import router from "./router";
import "./assets/all.scss";

// 定義驗證規則
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 強制設定預設語系 $ npm install swiper
setLocale("zh_TW");
const app = createApp(App);
const pinia = createPinia();
app.component("ErrorForm", Form);
app.component("ErrorField", Field);
app.component("ErrorMessage", ErrorMessage);
app.use(createPinia());
app.use(router);
app.use(pinia);
app.use(VueAxios, axios);
app.component("VueLoading", Loading); //全域原件
app.mount("#app");
