<template src="./chat-detail.html"></template>

<script>
import { mapGetters } from "vuex";
import { Flipped } from "vue-flip-toolkit";
export default {
  name: "component-chat-detail",
  components: { Flipped },
  data() {
    return {
      loading: false,
      error: null,
      chat: null,
    };
  },
  computed: {
    ...mapGetters("chatsStore", {
      getChat: "getChatInStore",
    }),
    getMainPhoto() {
      return {
        ...this.chat.photos[0],
        img:
          this.chat.photos[0] &&
          require(`@/assets/img/Chats/${this.chat.photos[0]}`),
      };
    },
  },
  methods: {
    fetchData() {
      this.error = this.chat = null;
      this.loading = true;
      const fetchedId = this.$route.params.itemId;
      var resultChat = this.getChat(fetchedId);
      this.chat = resultChat[0];
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" src="./chat-detail.scss"></style>
