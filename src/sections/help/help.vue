<template src="./help.html"></template>

<script>
import TitleH1 from "@/components/title/title.vue";
import SvgCatHelp from "@/components/svg/svg-cat-help";
import SvgChild from "@/components/svg/svg-child";
import SvgHands from "@/components/svg/svg-hands";
import SvgDonate from "@/components/svg/svg-donate";
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import { mapGetters } from "vuex";

export default {
  components: {
    TitleH1,
    SvgCatHelp,
    SvgChild,
    SvgHands,
    SvgDonate,
    SvgCatPaw,
  },
  computed: {
    ...mapGetters("chatsStore", {
      getNbChatAdoptes: "getNbChatAdoptesInStore",
      getNbChatsDisponibles: "getNbChatsDisponiblesInStore",
    }),
    NbCatSaved() {
      return this.getNbChatAdoptes;
    },
    NbCatAvailable() {
      return this.getNbChatsDisponibles;
    },
  },
};
</script>

<style lang="scss" src="./help.scss"></style>