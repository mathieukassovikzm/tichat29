<template src="./event.html"></template>

<script>
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import { Flipped } from "vue-flip-toolkit";

export default {
  name: "component-event",
  props: ["event", "expanded"],
  components: {
    SvgCatPaw,
    Flipped,
  },
  computed: {
    flipId() {
      return `listItem-${this.event.eventId}`;
    },
    isExpanded() {
      return this.expanded ? "expanded" : "";
    },
    noPhoto() {
      return this.event.photo === "" ? true : false;
    },
    getPhoto() {
      return {
        ...this.event.photo,
        img:
          this.event.photo &&
          require(`@/assets/img/Events/${this.event.photo}`),
      };
    },
  },
};
</script>

<style lang="scss" src="./event.scss"></style>
