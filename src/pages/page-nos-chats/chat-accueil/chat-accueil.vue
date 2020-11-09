<template >
  <div class="page-chat-accueil">
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
    <SectionConditions />
    <section id="s-chats" class="section-subtitle p-left">
      <div class="section-container">
        <TitleH1 class="bkg-dark">Chats</TitleH1>
        <div class="container-btn">
          <div class="button-paw" @click="goToConditions">
            <SvgCatPaw />
            <p>Conditions</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-container s-chats">
        <ChatList typeChat="chat" />
      </div>
    </section>
    <section id="s-chatons" class="section-subtitle p-right">
      <div class="section-container">
        <TitleH1 class="bkg-dark">Chattons</TitleH1>
        <div class="container-btn">
          <div class="button-paw" @click="goToConditions">
            <SvgCatPaw />
            <p>Conditions</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-container s-chatons">
        <ChatList typeChat="chatton" />
      </div>
    </section>
    <section id="s-sauvetage" class="section-subtitle p-left">
      <div class="section-container">
        <TitleH1 class="bkg-dark">Sauvetages</TitleH1>
        <div class="container-btn">
          <div class="button-paw" @click="goToConditions">
            <SvgCatPaw />
            <p>Conditions</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section-container s-sauvetage">
        <ChatList typeChat="sauvetage" />
      </div>
    </section>
  </div>
</template>

<script>
import TitleH1 from "@/components/title/title.vue";
import ChatList from "@/pages/page-nos-chats/chat-list/chat-list.vue";
import SectionConditions from "./section-conditions/section-conditions.vue";
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import Functions from "@/functions.js";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "component-list-chat",
  components: {
    TitleH1,
    ChatList,
    SvgCatPaw,
    SectionConditions,
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageNosChatsAccueil: "getBodyClassPageNosChatsAccueilInStore",
    }),
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageNosChatsAccueil);
    },
    goToConditions() {
      this.$router.push({ name: "ConditionsAdoption" });
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
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss" src="./chat-accueil.scss"></style>
