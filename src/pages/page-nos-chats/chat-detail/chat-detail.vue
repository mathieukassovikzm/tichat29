<template src="./chat-detail.html"></template>

<script>
import CarouselComponent from "@/components/carousel-lightbox/carousel-component.vue";
import CatPaw from "@/components/svg/svg-cat-paw.vue";
import SvgTiChat from "@/components/svg/svg-tiChat29.vue";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
export default {
  name: "component-chat-detail",
  components: { CarouselComponent, SvgTiChat, CatPaw },
  data() {
    return {
      loading: false,
      limiteSize: 850,
      error: null,
      chat: null,
    };
  },
  computed: {
    ...mapGetters("chatsStore", {
      getChat: "getChatInStore",
    }),
    ...mapGetters("mainStore", {
      getBodyClassPageNosChatsDetail: "getBodyClassPageNosChatsDetailInStore",
    }),
    getMainPhoto() {
      return {
        ...this.chat.photos[0],
        img:
          this.chat.photos[0] &&
          require(`@/assets/img/Chats/${this.chat.photos[0]}`),
      };
    },
  },
  methods: {
    ...mapActions("chatsStore", {
      fetchInfosChats: "fetchInfosChatsInStore",
    }),
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageNosChatsDetail);
    },
    fetchData() {
      this.error = this.chat = null;
      this.loading = true;
      const fetchedId = this.$route.params.itemId;
      var resultChat = this.getChat(fetchedId);
      this.chat = resultChat[0];
    },
    goBack() {
      this.$router.go(-1);
    },
    /* Recalcul des dimentions en fonction de la taille du cercle */
    onResize() {
      let windowWidth = document.documentElement.clientWidth;
      var listPhotos = $("#chat-list-photos");
      var ctnCarousel = $("#ctn-carousel");
      var ctnDsc = $("#ctn-dsc");
      if (windowWidth > this.limiteSize) {
        listPhotos.width(document.documentElement.clientWidth - ctnDsc.width());
        ctnCarousel.height(listPhotos.height() / 1.5);
        listPhotos.css("top", -listPhotos.width() / 4);
        listPhotos.css("left", -listPhotos.width() / 12);
      } else {
        listPhotos.width("auto");
        ctnCarousel.height("auto");
        listPhotos.css("top", "auto");
        listPhotos.css("left", "auto");
      }
    },
  },

  beforeMount() {
    this.fetchData();
    this.setSiteContainerClass();
  },

  mounted() {
    this.onResize();

    this.$nextTick(function () {
      var resizeId;
      window.addEventListener("resize", () => {
        clearTimeout(resizeId);
        resizeId = setTimeout(this.onResize(), 500);
      });
    });
  },

  destroy() {
    window.removeEventListener("resize", () => {});
  },
};
</script>

<style lang="scss" src="./chat-detail.scss"></style>
