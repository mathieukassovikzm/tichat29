<template >
  <div>
    <div class="section-list-chats section-title">
      <div class="title-container title-list-chats">
        <h1>Nos protégés</h1>
        <div class="buttons">
          <div class="button-paw" @click="goToChats">
            <SvgCatPaw />
            <p>Chats</p>
          </div>
          <div class="button-paw" @click="goToChatons">
            <SvgCatPaw />
            <p>Chattons</p>
          </div>
          <div class="button-paw" @click="goToSauvetage">
            <SvgCatPaw />
            <p>Sauvetages</p>
          </div>
        </div>
      </div>
    </div>
    <SectionBkgImg id="s-chats" class="section img-chats bkg-light">
      <div class="section-container">
        <TitleH1 class="bkg-light">Chats</TitleH1>
      </div>
    </SectionBkgImg>
    <section>
      <div class="section-container s-chats">
        <ChatList typeChat="chat" />
      </div>
    </section>
    <SectionBkgImg id="s-chatons" class="section img-chattons bkg-light">
      <div class="section-container">
        <TitleH1 class="bkg-light">Chattons</TitleH1>
      </div>
    </SectionBkgImg>
    <section>
      <div class="section-container s-chatons">
        <ChatList typeChat="chatton" />
      </div>
    </section>
    <SectionBkgImg id="s-sauvetage" class="section img-sauvetages bkg-light">
      <div class="section-container">
        <TitleH1 class="bkg-light">Sauvetages</TitleH1>
      </div>
    </SectionBkgImg>
    <section>
      <div class="section-container s-sauvetage">
        <ChatList typeChat="sauvetage" />
      </div>
    </section>
  </div>
</template>

<script>
import TitleH1 from "@/components/title/title.vue";
import SectionBkgImg from "@/components/section-bkg-img/section-bkg-img.vue";
import ChatList from "@/pages/page-nos-chats/chat-list/chat-list.vue";
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import Functions from "@/functions.js";
import { mapGetters } from "vuex";
export default {
  name: "component-list-chat",
  components: {
    TitleH1,
    SectionBkgImg,
    ChatList,
    SvgCatPaw,
  },

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
    goToChats() {
      Functions.moveSlowToId("#s-chats");
    },
    goToChatons() {
      Functions.moveSlowToId("#s-chatons");
    },
    goToSauvetage() {
      Functions.moveSlowToId("#s-sauvetage");
    },
  },
};
</script>

<style lang="scss">
</style>
