<template >
  <section>
    <div class="section-container">
      <Article class="expanded" v-bind:article="article" />
    </div>
  </section>
</template>

<script>
import Article from "@/pages/page-actualitees/article/article.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Article,
  },
  data() {
    return {
      loading: false,
      error: null,
      article: null,
    };
  },
  computed: {
    ...mapGetters("articlesStore", {
      getArticle: "getArticleInStore",
    }),
    ...mapGetters("mainStore", {
      getBodyClassPageActuDetail: "getBodyClassPageActuDetailInStore",
    }),
  },
  methods: {
    ...mapActions("articlesStore", {
      fetchInfosArticles: "fetchInfosArticlesInStore",
    }),
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageActuDetail);
    },
    fetchData() {
      this.error = this.article = null;
      this.loading = true;
      const fetchedId = this.$route.params.itemId;
      var resultArticle = this.getArticle(fetchedId);
      this.article = resultArticle[0];
    },
  },
  beforeMount() {
    this.fetchData();
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss"></style>