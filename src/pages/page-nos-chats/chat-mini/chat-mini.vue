<template src="./chat-mini.html"></template>

<script>
import SvgPlus from "@/components/svg/svg-plus.vue";
import { Flipped } from "vue-flip-toolkit";
export default {
  name: "component-chat-mini",
  props: ["chat", "expanded"],
  components: { SvgPlus, Flipped },

  data() {
    return {};
  },
  computed: {
    getMainPhoto() {
      return {
        ...this.chat.photos[0],
        img:
          this.chat.photos[0] &&
          require(`@/assets/img/Chats/${this.chat.photos[0]}`),
      };
    },
  },
};
</script>

<style lang="scss" src="./chat-mini.scss"></style>
