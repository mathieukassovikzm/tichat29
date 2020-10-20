<template >
  <section class="section">
    <div class="section-container">
      <TitleH1 class="bkg-light">Actualité</TitleH1>
        <ul>
          <li
            class="item-article"
            v-for="article in listArticles"
            v-bind:key="article.articleId"
          >
            <Article v-bind:article="article" />
          </li>
        </ul>
    </div>
  </section>
</template>

<script>
import TitleH1 from "@/components/title/title.vue";
import Article from "@/components/article/article.vue";
import DateHelper from "../../dateHelper.js";
import { mapGetters } from "vuex";

export default {
  components: {
    TitleH1,
    Article,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("articlesStore", {
      getListArticles: "getListArticlesInStore",
      getListArticlesToCome: "getListArticlesToComeInStore",
    }),
    listArticles() {
      return DateHelper.getListArticlesSortedAntiChrono(this.getListArticlesToCome);
    },
  },
  methods: {
  },
};
</script>

<style lang="scss">
.item-article {
 margin: $c-articles-margin-tb 0;
}
</style>