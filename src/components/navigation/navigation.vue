<template src="./navigation.html"></template>

<script>
import { mapGetters, mapActions } from 'vuex';
import router from './../../router';

export default {
  name: 'Naviagion',
  data() {
    return {
      navItems: [
        { name: 'Home', href: 'PageHome' },
        { name: 'Adoptées', href: 'PageAdoptees' },
        { name: 'Adoption', href: 'PageAdoption' },
        { name: 'Event', href: 'PageEvents' },
        { name: 'Contact', href: 'Contact' },
      ],
    };
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

    linkClicked(idLinkClicked) {
      router.push({ name: idLinkClicked });
      this.setToFalseNavOpen();
    },

    onNavBarItemClicked() {
      this.openMenu();
    },
  },
};
</script>

<style lang="scss" src="./navigation.scss"></style>
