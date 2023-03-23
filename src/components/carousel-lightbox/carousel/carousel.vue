<template src="./carousel.html"></template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      index: 0,
      slides: [],
      direction: "right",
    };
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    },
  },
  watch: {
    slides() {
      if (this.index >= this.slidesCount) {
        this.index = this.slidesCount - 1;
      }
    },
  },
  methods: {
    next() {
      this.index++;
      this.direction = "right";
      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      this.direction = "left";
      if (this.index < 0) {
        this.index = this.slidesCount - 1;
      }
    },
    goto(index) {
      this.direction = index > this.index ? "right" : "left";
      this.index = index;
    },
  },
  mounted() {
    var carouselSlides = this.$children.filter(
      (obj) => obj.$options.name === "carousel-slide"
    );
    this.slides = carouselSlides;
  },
};
</script>

<style lang="scss" src="./carousel.scss"></style>
