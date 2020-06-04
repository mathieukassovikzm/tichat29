import Vue from 'vue';
import Vuex from 'vuex';
import MainStore from './store.module.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    mainStore: MainStore,
  },
});
