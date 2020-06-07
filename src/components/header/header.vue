<template src="./header.html"></template>

<script>
import $ from "jquery";
import Burger from './../burger/burger.vue';
import Cat from './../svg/svg-cat.vue';
import TiChat from './../svg/svg-tiChat29.vue';
import Facebook from './../svg/svg-facebook.vue';
import Instagram from './../svg/svg-instagram.vue';

export default {
  name: 'Header',
  components: {
    Burger,
    TiChat,
    Cat,
    Facebook,
    Instagram
  },
  data() {
    return {
      limitSmallHeader: 50,
      isSmallHeader: true,
      classSmallHeader: "smallHeader"
    };
  },
  computed: {
    toggleSmallSquare() {
      return this.isSmallHeader === true ? this.classSmallHeader : "";
    }
  },
  methods: {
    goToTop() {
      $("html,body").animate(
        {
          scrollTop: 0
        },
        "slow"
      );
    },
    handleScroll() {
      console.log("handleScroll");
      // var y = window.scrollY;
      // if (y > this.limitSmallHeader && !this.isSmallHeader) {
      //   this.isSmallHeader = true;
      // } else if (y < this.limitSmallHeader && this.isSmallHeader) {
      //   this.isSmallHeader = false;
      // }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll)
  },
  destroyed () {
    document.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" src="./header.scss"></style>
