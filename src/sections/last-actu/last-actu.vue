<template >
  <section class="section">
    <div class="section-container">
      <div class="section-container">
        <TitleH1 class="bkg-light">Nos dernières actualités</TitleH1>
      </div>
      <div class="article" v-for="article in listArticles" v-bind:key="article.articleID">
        <h2>{{ article.titre }}</h2>
        <p>{{ article.date }}</p>
        <p>{{ article.lieu }}</p>
        <p>{{ article.description }}</p>
        <p>{{ article.photo }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import TitleH1 from "@/components/title/title.vue";
import DateHelper from "../../dateHelper.js";
import { mapGetters } from "vuex";

export default {
  components: {
    TitleH1,
  },
  computed: {
    ...mapGetters("articlesStore", {
      getListArticles: "getListArticlesInStore",
    }),
    listArticles() {
      return DateHelper.getListEventsSortedAntiChrono(this.getListArticles);
    },
  },
};
</script>

<style lang="scss" >
</style>