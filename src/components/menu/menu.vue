<template src="./menu.html"></template>

<script>
import Burger from "@/components/burger/burger.vue";
import SvgCat from "@/components/svg/svg-cat.vue";
import SvgTiChat from "@/components/svg/svg-tiChat29.vue";
import SvgPhone from "@/components/svg/svg-phone.vue";
import SvgFacebook from "@/components/svg/svg-facebook.vue";
import SvgInstagram from "@/components/svg/svg-instagram.vue";
import { mapGetters, mapActions } from "vuex";
import router from "./../../router";

export default {
  name: "menuResp",
  components: {
    Burger,
    SvgTiChat,
    SvgCat,
    SvgPhone,
    SvgFacebook,
    SvgInstagram,
  },
  data() {
    return {
      navItems: [
        { name: "Home", href: "PageHome" },
        { name: "Nos chats", href: "NosChats" },
        { name: "Actualitées", href: "PageActualitees" },
        { name: "Devenir Famille d'acceuil", href: "PageFamilleDaccueil" },
        { name: "Contact", href: "PageContact" },
      ],
    };
  },
  computed: {
    ...mapGetters("mainStore", {
      getNavOpenState: "getNavOpenStateInStore",
    }),

    isOpen() {
      return this.getNavOpenState === true ? "is-opened" : "is-closed";
    },
  },
  methods: {
    ...mapActions("mainStore", {
      toggleNavOpen: "toggleNavOpenInStore",
      setToFalseNavOpen: "setToFalseNavOpenInStore",
      setToTrueNavOpen: "setToTrueNavOpenInStore",
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

<style lang="scss" src="./menu.scss"></style>