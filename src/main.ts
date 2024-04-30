import 'reset-css';
import 'nprogress/nprogress.css';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import i18n from './lang';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(PrimeVue);
app.mount('#app');
