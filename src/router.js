import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './pages/main/main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router;
