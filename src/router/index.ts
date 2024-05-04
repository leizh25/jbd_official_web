import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import InnovationView from '../views/InnovationView.vue';
import ProductionView from '../views/ProductionView.vue';
import ServiceView from '../views/ServiceView.vue';
import NewsView from '../views/NewsView.vue';
import ContactView from '../views/ContactView.vue';
//@ts-ignore
import NProgress from 'nprogress';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/innovation',
      name: 'innovation',
      component: InnovationView
    },
    {
      path: '/production',
      name: 'production',
      component: ProductionView
    },
    {
      path: '/production/detail',
      name: 'pdoDetail',
      component: () => import('../views/ProductionDetail.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/news/detail',
      name: 'newsDetail',
      component: () => import('../views/NewsDetail.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
