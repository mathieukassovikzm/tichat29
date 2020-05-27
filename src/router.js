import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/page-home/page-home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router;
