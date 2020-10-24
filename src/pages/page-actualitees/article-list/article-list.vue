<template >
  <section class="s-list-articles">
    <div class="section-container">
      <ul class="list-articles">
        <li
          class="item-article"
          v-for="article in listArticles"
          v-bind:key="article.articleId"
        >
          <Article class="not-expanded" v-bind:article="article" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Article from "./../article/article.vue";
import DateHelper from "@/dateHelper.js";
import { mapGetters } from "vuex";

export default {
  components: {
    Article,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("articlesStore", {
      getListArticles: "getListArticlesInStore",
      getListArticlesToCome: "getListArticlesToComeInStore",
    }),
    listArticles() {
      return DateHelper.getListArticlesSortedAntiChrono(
        this.getListArticlesToCome
      );
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.s-list-articles {
  .list-articles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    margin-top: $c-article-padding-t;

    .item-article {
      margin: $c-articles-margin-tb $c-articles-margin-lr;
    }
  }
}
</style>