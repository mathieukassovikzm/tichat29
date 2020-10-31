<template lang="html" src="./lightbox.html"></template>

<script>
import "./lightbox.directive";
import store from "./lightbox-store";
import LightboxImage from "./lightbox-image";
import SvgNext from "@/components/svg/svg-next.vue";
import SvgClose from "@/components/svg/svg-close.vue";

export default {
  components: {
    LightboxImage,
    SvgNext,
    SvgClose,
  },
  data() {
    return {
      state: store.state,
      direction: "next",
    };
  },
  computed: {
    image() {
      if (this.state.index !== false || this.state.index == 0) {
        return this.state.images[this.state.group][this.state.index];
      } else {
        return null;
      }
    },
    transition() {
      return "lightbox-" + this.direction;
    },
  },
  methods: {
    close() {
      store.close();
    },
    next() {
      this.direction = "next";
      store.next();
    },
    prev() {
      this.direction = "prev";
      store.prev();
    },
  },
};
</script>

<style lang="scss" src="./lightbox.scss"></style>
