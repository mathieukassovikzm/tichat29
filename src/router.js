import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/page-home/page-home.vue';
import NosChats from './pages/page-nos-chats/page-nos-chats.vue';
import ListChats from './components/chat-list/chat-list.vue';
import DetailChat from './components/chat-detail/chat-detail.vue';
import ConditionsAdoption from './components/conditions-adoption/conditions-adoption.vue';
import PageActualitees from './pages/page-actualitees/page-actualitees.vue';
import DetailArticle from './components/article-detail/article-detail.vue';
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
    redirect: { name: 'ListeChats' },
    component: NosChats,
    name: 'NosChats',
    children: [
      {
        path: '/liste-chats',
        component: ListChats,
        name: 'ListeChats',
      },
      {
        path: '/detail-chat/:itemId',
        component: DetailChat,
        name: 'DetailChat',
      },
      {
        path: '/conditions-adoption',
        component: ConditionsAdoption,
        name: 'ConditionsAdoption',
      },
    ],
  },
  {
    path: '/actualitees',
    component: PageActualitees,
    name: 'PageActualitees',
  },
  {
    path: '/detail-article/:itemId',
    component: DetailArticle,
    name: 'DetailArticle',
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
