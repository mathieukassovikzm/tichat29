<template src="./title.html"></template>

<script>
export default {
  props: ["pageName"],
  data() {
    return {
      classNosChats: "pageNosChats",
      classActualitees: "pageActualitees",
      classFamilleAcc: "pageFamilleAcc",
      classContact: "pageContact"
    };
  },
  computed: {
    setH2() {
      if (this.pageName === this.classNosChats) return "Nos chats à l'adoption";
      else if (this.pageName === this.classActualitees) return "Actualitées";
      else if (this.pageName === this.classFamilleAcc)
        return "Devenir famille d'acceuil";
      else if (this.pageName === this.classContact) return "Contact";
      else return "";
    },
    setClass() {
      return this.pageName;
    }
  }
};
</script>

<style lang="scss" src="./title.scss">
</style>