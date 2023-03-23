<template >
  <ul class="list-chats">
    <li
      class="item-chat"
      v-for="chat in listChats"
      v-bind:key="chat.chatId"
      @click="onClick(chat.chatId)"
    >
      <ChatMini v-bind:chat="chat" />
    </li>
  </ul>
</template>

<script>
import ChatMini from "@/pages/page-nos-chats/chat-mini/chat-mini.vue";
import { mapGetters } from "vuex";
export default {
  name: "component-list-chat",
  components: { ChatMini },
  props: ["typeChat"],

  data() {
    return {};
  },
  computed: {
    ...mapGetters("chatsStore", {
      getListChatsType: "getListChatsTypeInStore",
    }),
    listChats() {
      return this.getListChatsType(this.typeChat);
    },
  },
  methods: {
    onClick(itemId) {
      this.$router.push({ name: "DetailChat", params: { itemId } });
    },
  },
};
</script>

<style lang="scss">
.list-chats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .item-chat {
    width: 100%;
  }
}
/*******************************
 * Menu screen size
 *******************************/
@media only screen and (min-width: $min-width-m) {
  .list-chats {
    justify-content: space-evenly;
    .item-chat {
      width: auto;
    }
  }
}
</style>
