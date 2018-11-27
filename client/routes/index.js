/* ===========
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import store from '@/store';

import login from '@/views/login.vue'
import regist from '@/views/regist.vue'
import chat from '@/views/chat.vue'

const routes = [
	{
    path: '/chat',
    name: 'chat',
    component: chat
  },
	{
    path: '/login',
    name: 'login',
    component: login
  },
	{
    path: '/regist',
    name: 'regist',
    component: regist
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: '/static',
  routes,
});

router.beforeEach((to, from, next) => {
  const matched = router.getMatchedComponents(to); // 是否有匹配组件
  // 配置404页面
  if (matched.length > 0) {
    if (to.matched.some(m => m.meta.auth) && !store.state.auth.authenticated) {
      /*
       * If the user is not authenticated and visits
       * a page that requires authentication, redirect to the login page
       */
      next({
        name: 'login',
      });
    } else if (to.matched.some(m => m.meta.guest) && store.state.auth.authenticated) {
      /*
       * If the user is authenticated and visits
       * an guest page, redirect to the dashboard page
       */
      next({
        name: 'home',
      });
    } else {
      next();
    }
  } else {
    next({
      name: '404',
    });
  }
});

export default router;
