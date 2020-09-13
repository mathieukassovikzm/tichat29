<template src="./chat-detail.html"></template>

<script>
import CarouselComponent from "@/components/carousel-lightbox/carousel-component.vue";
import { mapGetters, mapActions } from "vuex";
import { Flipped } from "vue-flip-toolkit";
export default {
  name: "component-chat-detail",
  components: { Flipped, CarouselComponent },
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
  },

  beforeMount() {
    this.fetchData();
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss" src="./chat-detail.scss"></style>
