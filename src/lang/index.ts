import { createI18n } from 'vue-i18n';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

const language = localStorage.getItem('language') || navigator.language; //  获取本地存储 || 根据浏览器语言设置

const i18n = createI18n({
  legacy: false,
  locale: language,
  globalInjection: true,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
});

export default i18n;
