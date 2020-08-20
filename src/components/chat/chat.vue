<template src="./chat.html"></template>

<script>
export default {
  props: ["chat"],
  components: {},
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
