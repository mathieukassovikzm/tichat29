<template src="./header.html"></template>

<script>
import Burger from './../burger/burger.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  components: {
    Burger,
  },
  methods: {
    ...mapActions('mainStore', {
      toggleNavOpen: 'toggleNavOpenInStore',
      setToFalseNavOpen: 'setToFalseNavOpenInStore',
      setToTrueNavOpen: 'setToTrueNavOpenInStore',
    }),

    openMenu() {
      const navLinks = document.querySelectorAll('.nav-item-responsive');
      // If the menu just closed => Fadeout, else FadeIn
      if (this.getNavOpenState === false) {
        navLinks.forEach((link) => {
          link.style.animation = `navLinkFadeOut 0.5s ease`;
        });
      } else {
        navLinks.forEach((link, index) => {
          link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 +
            0.1}s`;
        });
      }
    },
  },
};
</script>

<style lang="scss" src="./header.scss"></style>
