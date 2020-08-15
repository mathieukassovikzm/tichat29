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
    ...mapActions("chatsStore", {
      fetchInfosChats: "fetchInfosChatsInStore",
    }),
    ...mapActions("articlesStore", {
      fetchInfosArticles: "fetchInfosArticlesInStore",
    }),
    ...mapActions("eventsStore", {
      fetchInfosEvents: "fetchInfosEventsInStore",
    }),
    closeNav() {
      this.setToFalseNavOpen();
    },
  },
  created() {
    this.fetchInfosChats();
    this.fetchInfosArticles();
    this.fetchInfosEvents();
  },
};
</script>

<style lang="scss" src="./App.scss"></style>
