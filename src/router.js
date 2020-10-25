import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/page-home/page-home.vue';
import NosChats from './pages/page-nos-chats/page-nos-chats.vue';
import ListChats from './pages/page-nos-chats/chat-list/chat-list.vue';
import DetailChat from './pages/page-nos-chats/chat-detail/chat-detail.vue';
import ConditionsAdoption from './pages/page-nos-chats/conditions-adoption/conditions-adoption.vue';
import PageActualitees from './pages/page-actualitees/page-actualitees.vue';
import Listactualite from "@/pages/page-actualitees/actualite-list/actualite-list.vue";
import Detailactualite from './pages/page-actualitees/actualite-detail/actualite-detail.vue';
import PageHelp from './pages/page-help/page-help.vue';
import PageContact from './pages/page-contact/page-contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    name: 'PageHome',
  },
  {
    path: '/nos-chats',
    redirect: { name: 'ListChats' },
    component: NosChats,
    name: 'NosChats',
    children: [
      {
        path: '/nos-chats/liste-chats',
        component: ListChats,
        name: 'ListChats',
      },
      {
        path: '/nos-chats/detail-chat/:itemId',
        component: DetailChat,
        name: 'DetailChat',
      },
      {
        path: '/nos-chats/conditions-adoption',
        component: ConditionsAdoption,
        name: 'ConditionsAdoption',
      },
    ],
  },
  {
    path: '/actualitees',
    redirect: { name: 'Listactualite' },
    component: PageActualitees,
    name: 'PageActualitees',
    children: [
      {
        path: '/actualitees/liste-actualites',
        component: Listactualite,
        name: 'Listactualite',
      },
      {
        path: '/actualitees/detail-actualite/:itemId',
        component: Detailactualite,
        name: 'Detailactualite',
      },
    ],
  },

  {
    path: '/nous-aider',
    component: PageHelp,
    name: 'PageHelp',
  },
  {
    path: '/contact',
    component: PageContact,
    name: 'PageContact',
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  routes: routes,
});

export default router;
