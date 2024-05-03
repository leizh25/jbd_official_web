import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/innovation',
      name: 'innovation',
      component: () => import('../views/InnovationView.vue')
    },
    {
      path: '/production',
      name: 'production',
      component: () => import('../views/ProductionView.vue')
    },
    {
      path: '/production/detail',
      name: 'pdoDetail',
      component: () => import('../views/ProductionDetail.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/news/detail',
      name: 'newsDetail',
      component: () => import('../views/NewsDetail.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
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
