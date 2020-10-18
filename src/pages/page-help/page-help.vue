<template src="./page-help.html"></template>

<script>
import PageTitle from "@/components/title/title.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    PageTitle,
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageFamAcc: "getBodyClassPageFamAccInStore",
    }),
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageFamAcc);
    },
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss" src="./page-help.scss"></style>