<template src="./chat-detail.html"></template>

<script>
import CarouselComponent from "@/components/carousel-lightbox/carousel-component.vue";
import SvgTiChat from "@/components/svg/svg-tiChat29.vue";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
export default {
  name: "component-chat-detail",
  components: { CarouselComponent, SvgTiChat },
  data() {
    return {
      loading: false,
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
    /* Recalcul des dimentions en fonction de la taille du cercle */
    onResize() {
      var circle = $("#chat-detail-circle");
      var circleFake = $("#chat-detail-circle-fake");
      circleFake.width(circle.width() * 0.4);

      var detail = $("#chat-detail-container");
      console.log(circle.height());
      console.log(circle.offset().top);
      console.log(circleFake.height());
      console.log(circle.height() - circleFake.height());
      detail.css(
        "padding-top",
        circle.height() + circle.offset().top - circleFake.height()
      );
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
