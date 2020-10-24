<template src="./page-help.html"></template>

<script>
import PageTitle from "@/components/title/title.vue";
import SectionBkgImg from "@/components/section-bkg-img/section-bkg-img.vue";
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
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
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss" src="./page-help.scss"></style>