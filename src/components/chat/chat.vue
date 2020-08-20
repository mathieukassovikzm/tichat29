<template src="./chat.html"></template>

<script>
import SvgPlus from "@/components/svg/svg-plus.vue";
export default {
  props: ["chat"],
  components: { SvgPlus },
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

<style lang="scss" src="./chat.scss"></style>
