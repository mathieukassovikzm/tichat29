import Vue from 'vue';
import Vuex from 'vuex';
import MainStore from './store.module.js';
import ChatsStore from './chats.module.js';
import ArticlesStore from './articles.module.js';
import EventsStore from './events.module.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mainStore: MainStore,
    chatsStore: ChatsStore,
    articlesStore: ArticlesStore,
    eventsStore: EventsStore,
  },
});
