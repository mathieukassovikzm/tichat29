<template lang="html" src="./lightbox-image.html"></template>

<script>
export default {
  props: {
    imageMounted: String,
  },
  data() {
    return {
      loading: true,
      src: false,
      style: {},
    };
  },
  methods: {
    resizeImage(image) {
      let width = image.width;
      let height = image.height;
      if (width > window.innerWidth || height > window.innerHeight) {
        let ratio = width / height;
        let windowRatio = window.innerWidth / window.innerHeight;
        if (ratio > windowRatio) {
          width = window.innerWidth;
          height = width / ratio;
        } else {
          height = window.innerHeight;
          width = height * ratio;
        }
      }
      this.style = {
        width: width + "px",
        height: height + "px",
        top: (window.innerHeight - height) * 0.5 + "px",
        left: (window.innerWidth - width) * 0.5 + "px",
      };
    },
  },
  mounted() {
    let image = new window.Image();
    image.onload = () => {
      this.src = this.imageMounted;
      this.loading = false;
      this.resizeImage(image);
    };
    image.src = this.imageMounted;

    this.resizeEvent = () => {
      this.resizeImage(image);
    };

    window.addEventListener("resize", this.resizeEvent);
  },
  destroyed() {
    //do something after destroying vue instance
    window.removeEventListener("resize", this.resizeEvent);
  },
};
</script>

<style lang="css" scoped>
</style>
