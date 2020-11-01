<template >
  <div>
    <div class="section-list-chats section-title">
      <div class="title-container title-list-chats">
        <h1>Nos protégés</h1>
        <div class="buttons">
          <div class="button-paw" @click="goToDons">
            <SvgCatPaw />
            <p>Chats</p>
          </div>
          <div class="button-paw" @click="goToFamAcc">
            <SvgCatPaw />
            <p>Chattons</p>
          </div>
          <div class="button-paw" @click="goToLilo">
            <SvgCatPaw />
            <p>Sauvetages</p>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="section-container">
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
      </div>
    </section>
  </div>
</template>

<script>
import ChatMini from "@/pages/page-nos-chats/chat-mini/chat-mini.vue";
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import { mapGetters } from "vuex";
export default {
  name: "component-list-chat",
  components: { ChatMini, SvgCatPaw },

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
