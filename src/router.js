import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/page-home/page-home.vue';
import PageActualitees from './pages/page-actualitees/page-actualitees.vue';
import NosChats from './pages/page-nos-chats/page-nos-chats.vue';
import PageFamilleDaccueil from './pages/page-famille-accueil/page-famille-accueil.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'PageHome',
  },
  {
    path: '/actualitees',
    component: PageActualitees,
    name: 'PageActualitees',
  },
  {
    path: '/nos-chats',
    component: NosChats,
    name: 'NosChats',
  },
  {
    path: '/famille-accueil',
    component: PageFamilleDaccueil,
    name: 'PageFamilleDaccueil',
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router;
