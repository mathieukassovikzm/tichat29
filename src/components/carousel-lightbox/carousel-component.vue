<template src="./carousel-component.html"></template>

<script>
import Carousel from "./carousel/carousel.vue";
import CarouselSlide from "./carousel/carousel-slide/carousel-slide.vue";
import SvgNext from "@/components/svg/svg-next.vue";
import Lightbox from "@/components/lightbox/lightbox.vue";
import { mapGetters } from "vuex";

export default {
  name: "carousel-chat-photos",
  props: ["listPhotos"],
  components: {
    Carousel,
    CarouselSlide,
    SvgNext,
    Lightbox,
  },
  data() {
    return {
      listPhotosWithIndex: [],
    };
  },
  computed: {
    ...mapGetters("chatsStore", {
      getChat: "getChatInStore",
    }),
  },
  methods: {
    next() {
      this.$refs.refCarousel.next();
    },
    prev() {
      this.$refs.refCarousel.prev();
    },
    carouselIndex(index) {
      return index;
    },
    getPhoto(i) {
      return {
        ...i,
        img: i && require(`@/assets/img/Chats/${i}`),
      };
    },
    createListWithIndex() {
      for (var i = 0; i < this.listPhotos.length; i++) {
        this.listPhotosWithIndex.push({
          index: i,
          photo: this.listPhotos[i],
        });
      }
    },
  },
  beforeMount() {
    this.createListWithIndex();
  },
};
</script>

<style lang="scss" src="./carousel-component.scss"></style>
