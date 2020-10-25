<template src="./App.html"></template>

<script>
import { mapGetters, mapActions } from "vuex";
import MenuResp from "./components/menu/menu.vue";
import FooterResp from "./components/footer/footer.vue";

export default {
  name: "app",
  components: {
    MenuResp,
    FooterResp,
  },
  data() {
    return {
      limiteSize: 650,
    };
  },
  computed: {
    ...mapGetters("mainStore", {
      getNavOpenState: "getNavOpenStateInStore",
      getBodyClass: "getBodyClassInStore",
    }),

    isOpen() {
      this.openMenu();
      return this.getNavOpenState === true ? "is-opened" : "is-closed";
    },
  },
  methods: {
    ...mapActions("mainStore", {
      toggleNavOpen: "toggleNavOpenInStore",
      setToFalseNavOpen: "setToFalseNavOpenInStore",
      setToTrueNavOpen: "setToTrueNavOpenInStore",
    }),
    ...mapActions("chatsStore", {
      fetchInfosChats: "fetchInfosChatsInStore",
    }),
    ...mapActions("actualitesStore", {
      fetchInfosactualites: "fetchInfosactualitesInStore",
    }),
    closeNav() {
      this.setToFalseNavOpen();
    },

    openMenu() {
      let windowWidth = document.documentElement.clientWidth;
      if (windowWidth < this.limiteSize) {
        const navLinks = document.querySelectorAll(".menu-item");
        // If the menu just closed => Fadeout, else FadeIn
        if (this.getNavOpenState === false) {
          navLinks.forEach((link) => {
            link.style.animation = `navLinkFadeOut 0.4s ease`;
          });
        } else {
          navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFadeIn 0.5s ease forwards ${
              index / 7 + 0.1
            }s`;
          });
        }
      }
    },

    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
  },
  created() {
    this.fetchInfosChats();
    this.fetchInfosactualites();
  },
};
</script>

<style lang="scss" src="./App.scss"></style>
