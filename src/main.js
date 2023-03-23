import Vue from 'vue';
import App from './App.vue';
import Router from './router';
import Functions from './functions.js';
import Store from './store/index.js';
import Vuelidate from 'vuelidate';

window.$ = require('jquery');
window.JQuery = require('jquery');

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(require('vue-moment'));

new Vue({
  router: Router,
  store: Store,
  functions: Functions,
  render: (h) => h(App),
}).$mount('#app');
