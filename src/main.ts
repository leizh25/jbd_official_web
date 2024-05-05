import 'reset-css';
import 'nprogress/nprogress.css';
import './style/base.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './lang';
import slideIn from './directives/slideIn';
const app = createApp(App);

app.use(router);
app.use(i18n);
app.directive('slideIn', slideIn);
app.mount('#app');
