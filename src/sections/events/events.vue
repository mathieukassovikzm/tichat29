<template >
  <section class="section">
    <div class="section-container">
      <div class="section-container">
        <TitleH1 class="bkg-light">Evenements</TitleH1>
      </div>
      <div class="event" v-for="event in listEvents" v-bind:key="event.titre">
        <h2>{{ event.titre }}</h2>
        <p>{{ event.date }}</p>
        <p>{{ event.lieu }}</p>
        <p>{{ event.description }}</p>
        <p>{{ event.photo }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import TitleH1 from "@/components/title/title.vue";
import DateHelper from "../../dateHelper.js";
import { mapGetters } from "vuex";

export default {
  components: {
    TitleH1,
  },
  computed: {
    ...mapGetters("eventsStore", {
      getListEvents: "getListEventsInStore",
      getListEventsToCome: "getListEventsToComeInStore",
    }),
    listEvents() {
      return DateHelper.getListEventsSortedAntiChrono(this.getListEventsToCome);
    },
  },
};
</script>

<style lang="scss" src="./events.scss"></style>