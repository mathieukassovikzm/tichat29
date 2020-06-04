<template src="./burger.html"></template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Burger",

  computed: {
    ...mapGetters("mainStore", {
      getNavOpenState: "getNavOpenStateInStore"
    }),

    isOpen() {
      return this.getNavOpenState === true ? "is-opened" : "is-closed";
    }
  },
  methods: {
    ...mapActions("mainStore", {
      toggleNavOpen: "toggleNavOpenInStore"
    }),

    burgerClicked() {
      this.toggleNavOpen();
      this.$emit("burgerClicked");
    }
  }
};
</script>

<style lang="scss" src="./burger.scss"></style>