<template src="./App.html"></template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './components/header/header.vue';
import Navigation from './components/navigation/navigation.vue';
import Footer from './components/footer/footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Navigation,
    Footer,
  },
  computed: {
    ...mapGetters('mainStore', {
      getNavOpenState: 'getNavOpenStateInStore',
    }),

    isOpen() {
      return this.getNavOpenState === true ? 'is-opened' : 'is-closed';
    },
  },
  methods: {
    ...mapActions('mainStore', {
      toggleNavOpen: 'toggleNavOpenInStore',
      setToFalseNavOpen: 'setToFalseNavOpenInStore',
      setToTrueNavOpen: 'setToTrueNavOpenInStore',
    }),

    closeNav() {
      this.setToFalseNavOpen();
    },
  },
};
</script>

<style lang="scss" src="./App.scss"></style>
