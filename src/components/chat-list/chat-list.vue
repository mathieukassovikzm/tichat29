<template >
  <div class="list-chats">
    <div
      class="item-chat"
      v-for="chat in listChats"
      v-bind:key="chat.chatId"
      @click="onClick(chat.chatId)"
    >
      <ChatMini v-bind:chat="chat" v-bind:expanded="active === chat.chatId" />
    </div>
  </div>
</template>

<script>
import ChatMini from "@/components/chat-mini/chat-mini.vue";
import { mapGetters } from "vuex";
export default {
  name: "component-list-chat",
  components: { ChatMini },

  data() {
    return {};
  },
  computed: {
    ...mapGetters("chatsStore", {
      getListChatsDispo: "getListChatsDispoInStore",
    }),
    listChats() {
      return this.getListChatsDispo;
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
    .item-chat {
      width: 50%;
    }
  }
}
</style>
