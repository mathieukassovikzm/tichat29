<template src="./page-home.html"></template>

<script>
import Cat from "@/components/svg/svg-cat.vue";
import CatPaw from "@/components/svg/svg-cat-paw.vue";
import TiChat from "@/components/svg/svg-tiChat29.vue";
import PresAsso from "@/sections/presentation-asso/presentation-asso.vue";
import Events from "@/sections/events/events.vue";
import LastActu from "@/sections/last-actu/last-actu.vue";
import Help from "@/sections/help/help.vue";

export default {
  components: {
    Cat,
    TiChat,
    PresAsso,
    Events,
    LastActu,
    Help,
    CatPaw,
  },
};
</script>

<style lang="scss" src="./page-home.scss"></style>
