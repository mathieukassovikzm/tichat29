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
import Functions from "@/functions.js";
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
      limiteSize: 650,
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
      IdNavItemActif: "menu-item-link-home",
    };
  },
  computed: {
    ...mapGetters("mainStore", {
      getNavOpenState: "getNavOpenStateInStore",
    }),

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
      if (this.IdNavItemActif != "") {
        var elementOld = document.getElementById(this.IdNavItemActif);
        elementOld.classList.remove("link-active");
      }
      var eltId = "";
      switch (idLinkClicked) {
        case "PageHome":
          eltId = "menu-item-link-home";
          break;
        case "NosChats":
          eltId = "menu-item-link-nos-chats";
          break;
        case "PageHelp":
          eltId = "menu-item-link-help";
          break;
        case "PageActualitees":
          eltId = "menu-item-link-actualitees";
          break;
        case "PageContact":
          eltId = "menu-item-link-contact";
          break;
        default:
      }
      if (eltId != "") {
        var elementNew = document.getElementById(eltId);
        elementNew.classList.add("link-active");
        this.IdNavItemActif = eltId;
      }
      if (
        this.$route.name !== idLinkClicked &&
        !(this.$route.name === "ChatAccueil" && idLinkClicked === "NosChats") &&
        !(
          this.$route.name === "ListActualite" &&
          idLinkClicked === "PageActualitees"
        )
      ) {
        router.push({ name: idLinkClicked });
      }
      this.setToFalseNavOpen();
    },

    goToFooter() {
      Functions.moveSlowToId("#footer");
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
