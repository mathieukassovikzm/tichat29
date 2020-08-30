<template >
  <div>
    <PageTitle class="bkg-light">Nos Chats</PageTitle>
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
  </div>
</template>

<script>
import ChatMini from "@/components/chat-mini/chat-mini.vue";
import PageTitle from "@/components/title/title.vue";
import { mapGetters } from "vuex";
export default {
  name: "component-list-chat",
  components: { ChatMini, PageTitle },

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
    spring() {
      return {
        stiffness: 70,
        damping: 15,
      };
    },
  },
  methods: {
    onClick(itemId) {
      this.active = this.active === itemId ? 0 : itemId;
      this.staggerConfig.listEvents.reverse = this.active !== 0;
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
    width: 50%;
  }
}
</style>
