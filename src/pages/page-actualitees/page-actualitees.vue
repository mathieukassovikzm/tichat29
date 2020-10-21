<template src="./page-actualitees.html"></template>

<script>
import PageTitle from "@/components/title/title.vue";
import Article from "@/components/article/article.vue";
import DateHelper from "@/dateHelper.js";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    PageTitle,
    Article,
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageActu: "getBodyClassPageActuInStore",
    }),
    ...mapGetters("articlesStore", {
      getListArticles: "getListArticlesInStore",
      getListArticlesToCome: "getListArticlesToComeInStore",
    }),
    listArticles() {
      return DateHelper.getListArticlesSortedAntiChrono(this.getListArticlesToCome);
    },
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
