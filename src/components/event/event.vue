<template src="./event.html"></template>

<script>
import SvgCatPaw from "@/components/svg/svg-cat-paw";

export default {
  name: "component-event",
  props: ["event"],
  components: {
    SvgCatPaw,
  },
  computed: {
    noPhoto() {
      return this.event.photo === "" ? true : false;
    },
  },
};
</script>

<style lang="scss" src="./event.scss"></style>
