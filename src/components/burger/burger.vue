<template src="./burger.html"></template>

<script>
export default {
  name: "Burger",
  data() {
    return {
      isOpened: false
    };
  },
  computed: {
    isOpen() {
      return this.isOpened === true ? "is-opened" : "is-closed";
    }
  },
  methods: {
    burgerClicked() {
      this.isOpened = !this.isOpened;
      this.$emit("burgerClicked");
    }
  }
};
</script>

<style lang="scss" src="./burger.scss"></style>