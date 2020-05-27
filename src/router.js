import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/page-home/page-home.vue';
import PageAdoptees from './pages/page-adoptees/page-adoptees.vue';
import PageAdoption from './pages/page-adoption/page-adoption.vue';
import PageEvents from './pages/page-events/page-events.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'PageHome',
  },
  {
    path: '/adoptees',
    component: PageAdoptees,
    name: 'PageAdoptees',
  },
  {
    path: '/adoption',
    component: PageAdoption,
    name: 'PageAdoption',
  },
  {
    path: '/events',
    component: PageEvents,
    name: 'PageEvents',
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router;
