<template src="./mini-diapo.html"></template>

<script>
export default {
  props: ["listPhotos"],
  data() {
    return {
      listPhotosCopy: [],
      index: 0,
      listPhotosSize: 0,
      nbThumbnailsToShow: 2
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
      // var newArray = this.listPhotos.filter(
      //   el => el !== this.listPhotos[this.index]
      // );
      // console.log(newArray);
      // return newArray;
      var newArray = [];
      for (var i = this.index; i < this.index + this.nbThumbnailsToShow; i++) {
        newArray.push(this.listPhotosCopy[i]);
      }
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
    },
    GoPrev() {
      if (this.index == 0) {
        this.index = this.listPhotosSize - 1;
      } else {
        this.index--;
      }
    },
    GoNext() {
      if (this.index === this.listPhotosSize - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    }
  },
  created() {
    this.listPhotosSize = this.listPhotos.length;
    this.listPhotosCopy = this.listPhotos;
    // this.listPhotos.forEach(photo => {
    //   this.listPhotosCopy.push(photo);
    // });
  }
};
</script>

<style lang="scss" src="./mini-diapo.scss"></style>
