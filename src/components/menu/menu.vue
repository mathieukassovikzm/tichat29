<template src="./menu.html"></template>

<script>
import Burger from "@/components/burger/burger.vue";
import SvgCat from "@/components/svg/svg-cat.vue";
import SvgTiChat from "@/components/svg/svg-tiChat29.vue";
import SvgPhone from "@/components/svg/svg-phone.vue";
import SvgFacebook from "@/components/svg/svg-facebook.vue";
import SvgInstagram from "@/components/svg/svg-instagram.vue";
import SvgHome from "@/components/svg/svg-home.vue";
import SvgCatPaw from "@/components/svg/svg-cat-paw-with-circle.vue";
import SvgHeart from "@/components/svg/svg-heart.vue";
import SvgScheduler from "@/components/svg/svg-scheduler.vue";
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
    SvgHome,
    SvgHeart,
    SvgScheduler,
    SvgCatPaw,
  },
  data() {
    return {
      limitSizeScroll: 50,
      isTopMenu: true,
      classMenuTop: "menu-top",
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
    toggleMenuTop() {
      return this.isTopMenu === true ? this.classMenuTop : "";
    },
  },
  methods: {
    ...mapActions("mainStore", {
      toggleNavOpen: "toggleNavOpenInStore",
      setToFalseNavOpen: "setToFalseNavOpenInStore",
      setToTrueNavOpen: "setToTrueNavOpenInStore",
    }),

    linkClicked(idLinkClicked) {
      if (
        this.$route.name !== idLinkClicked &&
        !(this.$route.name === "ListeChats" && idLinkClicked === "NosChats")
      ) {
        router.push({ name: idLinkClicked });
      }

      this.setToFalseNavOpen();
    },

    onNavBarItemClicked() {
      this.openMenu();
    },
    onScroll() {
      var y = window.scrollY;
      if (y > this.limitSizeScroll && this.isTopMenu) {
        this.isTopMenu = false;
      } else if (y < this.limitSizeScroll && !this.isTopMenu) {
        this.isTopMenu = true;
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },

  destroy() {
    document.removeEventListener("scroll", () => {});
  },
};
</script>

<style lang="scss" src="./menu.scss"></style>
