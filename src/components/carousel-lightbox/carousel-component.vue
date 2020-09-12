<template src="./carousel-component.html"></template>

<script>
import Carousel from "./carousel/carousel.vue";
import CarouselSlide from "./carousel/carousel-slide/carousel-slide.vue";
import SvgNext from "@/components/svg/svg-next.vue";
import Lightbox from "@/components/lightbox/lightbox-simple/lightbox.vue";

export default {
  components: {
    Carousel,
    CarouselSlide,
    SvgNext,
    Lightbox,
  },
  data() {
    return {
      slides: 5,
    };
  },
  methods: {
    next() {
      this.$refs.refCarousel.next();
    },
    prev() {
      this.$refs.refCarousel.prev();
    },
  },
};
</script>

<style lang="scss" src="./carousel-component.scss"></style>
