<template src="./last-actu.html"></template>

<script>
import DateHelper from "../../dateHelper.js";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("articlesStore", {
      getListArticles: "getListArticlesInStore"
    }),
    listArticles() {
      return DateHelper.getListEventsSortedAntiChrono(this.getListArticles);
    }
  }
};
</script>

<style lang="scss" src="./last-actu.scss">
</style>