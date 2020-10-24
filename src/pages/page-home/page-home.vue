<template src="./page-home.html"></template>

<script>
import TitleH1 from "@/components/title/title.vue";
import SectionBkgImg from "@/components/section-bkg-img/section-bkg-img.vue";
import Cat from "@/components/svg/svg-cat.vue";
import CatPaw from "@/components/svg/svg-cat-paw.vue";
import TiChat from "@/components/svg/svg-tiChat29.vue";
import PresAsso from "./presentation-asso/presentation-asso.vue";
import Help from "./help/help.vue";
import Articles from "@/pages/page-actualitees/article-list/article-list.vue";
import Functions from "@/functions.js";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    TitleH1,
    SectionBkgImg,
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
      Functions.moveSlowToId("#s-pres-asso");
    },
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss" src="./page-home.scss"></style>
