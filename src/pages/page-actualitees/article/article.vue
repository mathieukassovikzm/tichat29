<template src="./article.html"></template>

<script>
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import moment from "moment";

export default {
  name: "component-article",
  props: ["article"],
  components: {
    SvgCatPaw,
  },
  data() {
    return {};
  },
  computed: {
    noPhoto() {
      return this.article.photo === "" ? true : false;
    },
    getPhoto() {
      return {
        ...this.article.photo,
        img:
          this.article.photo &&
          require(`@/assets/img/articles/${this.article.photo}`),
      };
    },
    getDateFormated() {
      return moment(this.article.date).locale("fr").format("DD MMMM YYYY");
    },
    getHourFormated() {
      return moment(this.article.date).locale("fr").format("DD MMMM YYYY");
    },
  },
  methods: {
    goToDetailArticle() {
      var itemId = this.article.articleId;
      this.$router.push({ name: "DetailArticle", params: { itemId } });
    },
    goToListArticles() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" src="./article.scss"></style>
