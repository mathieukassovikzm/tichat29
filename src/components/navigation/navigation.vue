<template src="./navigation.html"></template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "./../../router";

export default {
  name: "Naviagion",
  data() {
    return {
      navItems: [
        { name: "Home", href: "PageHome" },
        { name: "Nos chats", href: "NosChats" },
        { name: "Actualitées", href: "PageActualitees" },
        { name: "Devenir Famille d'acceuil", href: "PageFamilleDaccueil" },
        { name: "Contact", href: "Contact" }
      ]
    };
  },
  computed: {
    ...mapGetters("mainStore", {
      getNavOpenState: "getNavOpenStateInStore"
    }),

    isOpen() {
      return this.getNavOpenState === true ? "is-opened" : "is-closed";
    }
  },
  methods: {
    ...mapActions("mainStore", {
      toggleNavOpen: "toggleNavOpenInStore",
      setToFalseNavOpen: "setToFalseNavOpenInStore",
      setToTrueNavOpen: "setToTrueNavOpenInStore"
    }),

    linkClicked(idLinkClicked) {
      router.push({ name: idLinkClicked });
      this.setToFalseNavOpen();
    },

    onNavBarItemClicked() {
      this.openMenu();
    }
  }
};
</script>

<style lang="scss" src="./navigation.scss"></style>
