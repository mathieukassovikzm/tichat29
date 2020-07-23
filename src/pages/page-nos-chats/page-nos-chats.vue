<template src="./page-nos-chats.html"></template>

<script>
import MiniDiapo from "@/components/mini-diapo/mini-diapo.vue";
import PageTitle from "@/components/title/title.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MiniDiapo,
    PageTitle,
  },
  computed: {
    ...mapGetters("chatsStore", {
      getListChatsDispo: "getListChatsDispoInStore",
    }),
    listChats() {
      return this.getListChatsDispo;
    },
  },
};
</script>

<style lang="scss" src="./page-nos-chats.scss"></style>
