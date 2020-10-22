<template>
<div class="p-articles">
  <div class="section-articles section-title">
    <div class="title-full title-articles">
      <h1>
        Actualité
      </h1>
    </div>
  </div>
  <section>
    <ListArticle/>
  </section>
</div>
</template>

<script>
import ListArticle from "@/components/article-list/article-list.vue";
import DateHelper from "@/dateHelper.js";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ListArticle,
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
    }
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss">
.p-articles {
  .section-title {
    background-image: url('./../../assets/img/titles/pageActualitees.jpg');
  }
}
</style>
