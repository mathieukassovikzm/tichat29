<template src="./page-nos-chats.html"></template>

<script>
import TitleH1 from "@/components/title/title.vue";
import MiniDiapo from "@/components/mini-diapo/mini-diapo.vue";
import SvgCatPaw from "@/components/svg/svg-cat-paw.vue";
import PageTitle from "@/components/title/title.vue";
import Chat from "@/components/chat/chat.vue";
import { Flipper } from "vue-flip-toolkit";
import { mapGetters } from "vuex";

export default {
  components: {
    MiniDiapo,
    PageTitle,
    Chat,
    SvgCatPaw,
    TitleH1,
    Flipper,
  },
  data() {
    return {
      active: 0,
      staggerConfig: {
        listEvents: {
          speed: 0.5,
          reverse: false,
        },
      },
    };
  },
  computed: {
    ...mapGetters("chatsStore", {
      getListChatsDispo: "getListChatsDispoInStore",
    }),
    listChats() {
      return this.getListChatsDispo;
    },
    getMainPhoto() {
      return {
        ...this.listPhotos[this.index],
        img:
          this.listPhotos[this.index] &&
          require(`@/assets/img/Chats/${this.listPhotos[this.index]}`),
      };
    },
    spring() {
      return {
        stiffness: 70,
        damping: 15,
      };
    },
  },
  methods: {
    onClick(item) {
      this.active = this.active === item ? 0 : item;
      this.staggerConfig.listEvents.reverse = this.active !== 0;
    },
  },
};
</script>

<style lang="scss" src="./page-nos-chats.scss"></style>
