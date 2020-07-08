<template src="./page-nos-chats.html"></template>

<script>
import { mapGetters } from "vuex";

export default {
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
