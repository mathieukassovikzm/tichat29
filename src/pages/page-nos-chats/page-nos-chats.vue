<template>
  <div class="p-nos-chats">
    <transition
      name="fade-slide-height"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Functions from "@/functions.js";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "page-nos-chats",
  components: {},
  data() {
    return {
      prevHeight: 0,
      voirCond: true,
    };
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageNosChats: "getBodyClassPageNosChatsInStore",
    }),
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    ...mapActions("chatsStore", {
      fetchInfosChats: "fetchInfosChatsInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageNosChats);
    },
    voirConditions() {
      if (this.$route.name == "ConditionsAdoption") {
        this.$router.go(-1);
        this.voirCond = true;
      } else {
        this.$router.push({ name: "ConditionsAdoption" });
        this.voirCond = false;
      }
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      Functions.moveFastToId("#app");
      element.style.height = "auto";
    },
  },
  beforeMount() {
    this.fetchInfosChats();
    this.setSiteContainerClass();
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" src="./page-nos-chats.scss" ></style>
