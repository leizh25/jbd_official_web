import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import InnovationView from '../views/InnovationView.vue';
import ProductionView from '../views/ProductionView.vue';
import ServiceView from '../views/ServiceView.vue';
import NewsView from '../views/NewsView.vue';
import NewsDetail from '../views/NewsDetail.vue';
import ContactView from '../views/ContactView.vue';
//@ts-ignore
import NProgress from 'nprogress';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/innovation',
      name: 'innovation',
      component: InnovationView,
      meta: {
        title: ''
      }
    },
    {
      path: '/production',
      name: 'production',
      component: ProductionView,
      meta: {
        title: '产品中心'
      }
    },
    {
      path: '/production/detail',
      name: 'proDetail',
      component: () => import('../views/ProductionDetail.vue'),
      meta: {
        title: '产品中心 - 详情'
      }
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView,
      meta: {
        title: '服务支持'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta: {
        title: '新闻中心'
      }
    },
    {
      path: '/news/detail',
      name: 'newsDetail',
      component: () => import('../views/NewsDetail.vue'),
      meta: {
        title: '新闻中心 - 详情'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: '联系我们'
      }
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
