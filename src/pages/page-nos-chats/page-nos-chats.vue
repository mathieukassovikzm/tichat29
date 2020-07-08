<template src="./page-nos-chats.html"></template>

<script>
import miniDiapo from "./../../components/mini-diapo/mini-diapo.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    miniDiapo
  },
  computed: {
    ...mapGetters("chatsStore", {
      getListChatsDispo: "getListChatsDispoInStore"
    }),
    listChats() {
      return this.getListChatsDispo;
    }
  }
};
</script>

<style lang="scss" src="./page-nos-chats.scss"></style>
