<template src="./actualite.html"></template>

<script>
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import moment from "moment";

export default {
  name: "component-actualite",
  props: ["actualite"],
  components: {
    SvgCatPaw,
  },
  data() {
    return {};
  },
  computed: {
    noPhoto() {
      return this.actualite.photo === "" ? true : false;
    },
    getPhoto() {
      return {
        ...this.actualite.photo,
        img:
          this.actualite.photo &&
          require(`@/assets/img/actualites/${this.actualite.photo}`),
      };
    },
    getDateFormated() {
      return moment(this.actualite.date).locale("fr").format("DD MMMM YYYY");
    },
    getHourFormated() {
      return moment(this.actualite.date).locale("fr").format("DD MMMM YYYY");
    },
  },
  methods: {
    goToDetailactualite() {
      var itemId = this.actualite.actualiteId;
      this.$router.push({ name: "Detailactualite", params: { itemId } });
    },
    goTolistActualites() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" src="./actualite.scss"></style>
