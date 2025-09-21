import { createApp } from "vue";
import "./style.css";
import "./reset.css";
import App from "./App.vue";
import i18n from "./i18n";
import 'flag-icons/css/flag-icons.min.css';

document.documentElement.classList.add("dark");
createApp(App)
  .use(i18n)
  .mount('#app');
