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
    return {
      paragraphs: [
        {
          index: 1,
          txt: `${this.article.titre}`,
        },
        {
          index: 2,
          txt: `Date: ${moment(this.article.date).format("DD/MM/YYYY")}`,
        },
        {
          index: 3,
          txt: `Heure: ${moment(this.article.date).format("H:mm")}`,
        },
        {
          index: 4,
          txt: `Lieu: ${this.article.lieu}`,
        },
      ],
    };
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
  },
  methods: {

  },
};
</script>

<style lang="scss" src="./article.scss"></style>
