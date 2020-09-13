<template src="./page-actualitees.html"></template>

<script>
import PageTitle from "@/components/title/title.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    PageTitle,
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageActu: "getBodyClassPageActuInStore",
    }),
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageActu);
    },
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss" src="./page-actualitees.scss"></style>
