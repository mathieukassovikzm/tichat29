<template src="./page-home.html"></template>

<script>
import Cat from "@/components/svg/svg-cat.vue";
import CatPaw from "@/components/svg/svg-cat-paw.vue";
import TiChat from "@/components/svg/svg-tiChat29.vue";
import PresAsso from "@/sections/presentation-asso/presentation-asso.vue";
import Articles from "@/sections/articles/articles.vue";
import Help from "@/sections/help/help.vue";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
export default {
  components: {
    Cat,
    TiChat,
    PresAsso,
    Articles,
    Help,
    CatPaw,
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageHome: "getBodyClassPageHomeInStore",
    }),
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageHome);
    },
    goToPresAsso() {
      $("html,body").animate(
        {
          scrollTop: $("#s-pres-asso").offset().top 
        },
        "slow"
      );
    },
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss" src="./page-home.scss"></style>
