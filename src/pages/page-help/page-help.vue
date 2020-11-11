<template src="./page-help.html"></template>

<script>
import PageTitle from "@/components/title/title.vue";
import SectionBkgImg from "@/components/section-bkg-img/section-bkg-img.vue";
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import TiChat from "@/components/svg/svg-tiChat29.vue";
import Functions from "@/functions.js";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TiChat,
    PageTitle,
    SectionBkgImg,
    SvgCatPaw,
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageHelp: "getBodyClassPageHelpInStore",
    }),
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageHelp);
    },
    goToDons() {
      Functions.moveSlowToId("#s-dons");
    },
    goToFamAcc() {
      Functions.moveSlowToId("#s-fam-acc");
    },
    goToLilo() {
      Functions.moveSlowToId("#s-lilo");
    },
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss" src="./page-help.scss"></style>