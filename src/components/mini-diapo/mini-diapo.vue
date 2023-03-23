<template src="./mini-diapo.html"></template>

<script>
import SvgNext from "@/components/svg/svg-next.vue";
import $ from "jquery";

export default {
  props: ["listPhotos"],
  components: {
    SvgNext,
  },
  data() {
    return {
      listPhotosCopy: [],
      index: 0,
      listPhotosSize: 0,
      nbThumbnailsToShow: 3,
      thumbnailMargin: 3,
      thumbnailWidth: 0,
      shadowHeight: 0,
      thumbnailActive: "thumbnail-active",
    };
  },
  computed: {
    getMainPhoto() {
      return {
        ...this.listPhotos[this.index],
        img:
          this.listPhotos[this.index] &&
          require(`@/assets/img/Chats/${this.listPhotos[this.index]}`),
      };
    },
    getFilteredList() {
      var newArray = [];
      for (var i = this.index; i < this.index + this.nbThumbnailsToShow; i++) {
        newArray.push(this.listPhotosCopy[i]);
      }
      return newArray;
    },
    getThumbnailWidth() {
      return {
        width: `${this.thumbnailWidth}px`,
      };
    },
    getShadowHeight() {
      return {
        height: `${this.shadowHeight}px`,
      };
    },
  },
  methods: {
    // Method that returns the thumbnail to display
    getThumbnailPhoto(nbTN) {
      return {
        ...this.listPhotosCopy[this.index + nbTN],
        img:
          this.listPhotosCopy[this.index + nbTN] &&
          require(`@/assets/img/Chats/${
            this.listPhotosCopy[this.index + nbTN]
          }`),
      };
    },
    getThumbnailActive(nbTN) {
      if (nbTN === this.index) {
        return this.thumbnailActive;
      }
    },
    // Method that displays the previous photo
    GoPrev() {
      if (this.index == 0) {
        this.index = this.listPhotosSize - 1;
      } else {
        this.index--;
      }
    },
    // Method that displays the next photo
    GoNext() {
      if (this.index === this.listPhotosSize - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
    windowResized() {
      this.resizeThumbnails();
      this.resizeShadow();
    },
    // Method that recalcule the width the Thumbnails
    resizeThumbnails() {
      var mainPhoto = $(".main-photo-div");
      var mainPhotoWidth = mainPhoto.width();
      this.thumbnailWidth =
        mainPhotoWidth / this.nbThumbnailsToShow - this.thumbnailMargin;
    },
    // Method that recalcule the height the Shadow
    resizeShadow() {
      var secondaryPhoto = $(".secondary-photo");
      var secondaryPhotoWidth = secondaryPhoto.height();
      this.shadowHeight = secondaryPhotoWidth;
    },
  },

  mounted() {
    // On Mounted we copy the table twice
    this.listPhotosSize = this.listPhotos.length;
    this.listPhotos.forEach((photo) => {
      this.listPhotosCopy.push(photo);
    });
    this.listPhotos.forEach((photo) => {
      this.listPhotosCopy.push(photo);
    });
    this.windowResized();
    this.$nextTick(function () {
      var resizeId;
      window.addEventListener("resize", () => {
        clearTimeout(resizeId);
        resizeId = setTimeout(this.windowResized(), 500);
      });
    });
  },
  destroy() {
    window.removeEventListener("resize", () => {});
  },
};
</script>

<style lang="scss" src="./mini-diapo.scss"></style>
