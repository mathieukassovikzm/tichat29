<template >
<div>
  <section>
    <div class="section-container">
        <ul>
          <li
            class="item-article"
            v-for="article in listArticles"
            v-bind:key="article.articleId"
            @click="onClick(article.articleId)"
          >
            <Article class="not-expanded" v-bind:article="article" />
          </li>
        </ul>
    </div>
  </section>
</div>

</template>

<script>
import Article from "@/components/article/article.vue";
import DateHelper from "../../dateHelper.js";
import { mapGetters } from "vuex";

export default {
  components: {
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
    onClick(itemId) {
      this.$router.push({ name: "DetailArticle", params: { itemId } });
    }
  },
};
</script>

<style lang="scss">
.item-article {
 margin: $c-articles-margin-tb 0;
}
</style>