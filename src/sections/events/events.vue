<template src="./events.html"></template>

<script>
import DateHelper from "../../dateHelper.js";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("eventsStore", {
      getListEvents: "getListEventsInStore",
      getListEventsToCome: "getListEventsToComeInStore"
    }),
    listEvents() {
      return DateHelper.getListEventsSortedAntiChrono(this.getListEventsToCome);
    }
  }
};
</script>

<style lang="scss" src="./events.scss"></style>