<template src="./mini-diapo.html"></template>

<script>
export default {
  props: ["listPhotos"],
  data() {
    return {
      index: 0,
      nbThumbnails: 2
    };
  },
  computed: {
    getMainPhoto() {
      return {
        ...this.listPhotos[this.index],
        img:
          this.listPhotos[this.index] &&
          require(`@/assets/Chats/${this.listPhotos[this.index]}`)
      };
    },
    getFilteredList() {
      var newArray = this.listPhotos.filter(
        el => el !== this.listPhotos[this.index]
      );

      console.log(newArray);
      return newArray;
    }
  },
  methods: {
    getThumbnailPhoto(nbTN) {
      return {
        ...this.listPhotos[this.index + nbTN],
        img:
          this.listPhotos[this.index + nbTN] &&
          require(`@/assets/Chats/${this.listPhotos[this.index + nbTN]}`)
      };
    }
  }
};
</script>

<style lang="scss" src="./mini-diapo.scss"></style>
