<template src="./carousel-slide.html"></template>

<script>
export default {
  name: "carousel-slide",
  props: {
    index: { type: Number, default: 0 },
  },
  computed: {
    transition() {
      if (this.$parent.direction) {
        return "slide-" + this.$parent.direction;
      }
      return null;
    },
    visible() {
      return this.index === this.$parent.index;
    },
  },
};
</script>

<style lang="scss" src="./carousel-slide.scss"></style>
