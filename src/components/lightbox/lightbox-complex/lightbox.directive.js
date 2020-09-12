import Vue from 'vue';
import store from './lightbox-store';

Vue.directive('lightbox-complex', {
  bind(el, binding) {
    let group = '';
    if (binding.value === undefined) {
      group = 'default';
    } else {
      group = binding.value;
    }
    store.addImage(el.getAttribute('href'), group);
    el.addEventListener('click', function(e) {
      e.preventDefault();
      store.open(el.getAttribute('href'), group);
    });
  },
  unbind(el, binding) {
    let group = '';
    if (binding.value === undefined) {
      group = 'default';
    } else {
      group = binding.value;
    }
    store.remove(el.getAttribute('href'), group);
  },
});
