<template src="./App.html"></template>

<script>
import { mapGetters, mapActions } from "vuex";
import MenuResp from "./components/menu/menu.vue";
import FooterResp from "./sections/footer/footer.vue";

export default {
  name: "app",
  components: {
    MenuResp,
    FooterResp,
  },
  computed: {
    ...mapGetters("mainStore", {
      getNavOpenState: "getNavOpenStateInStore",
      getBodyClass: "getBodyClassInStore",
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
    ...mapActions("chatsStore", {
      fetchInfosChats: "fetchInfosChatsInStore",
    }),
    ...mapActions("articlesStore", {
      fetchInfosArticles: "fetchInfosArticlesInStore",
    }),
    closeNav() {
      this.setToFalseNavOpen();
    },
  },
  created() {
    this.fetchInfosChats();
    this.fetchInfosArticles();
  },
};
</script>

<style lang="scss" src="./App.scss"></style>
