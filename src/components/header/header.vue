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
      limitBigHeader: 50,
      isBigHeader: false,
      classBigHeader: "big-header"
    };
  },
  computed: {
    toggleBigHeader() {
      return this.isBigHeader === true ? this.classBigHeader : "";
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
      var y = window.scrollY;
      if (y > this.limitBigHeader && !this.isBigHeader) {
        this.isBigHeader = true;
      } else if (y < this.limitBigHeader && this.isBigHeader) {
        this.isBigHeader = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style lang="scss" src="./header.scss"></style>
