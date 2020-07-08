<template src="./mini-diapo.html"></template>

<script>
export default {
  props: ["listPhotos"],
  data() {
    return {
      path: "./../../assets/Chats"
    };
  },
  methods: {
    buildSrc(srcPhoto) {
      console.log(`${this.path}/${srcPhoto}`);
      return `${this.path}/${srcPhoto}`;
    }
  }
};
</script>

<style lang="scss" src="./mini-diapo.scss"></style>
