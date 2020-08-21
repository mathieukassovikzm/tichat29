<template >
  <section class="section">
    <div class="section-container">
      <TitleH1 class="bkg-light">Evenements</TitleH1>
      <div class="item-event" v-for="event in listEvents" v-bind:key="event.titre">
        <Event v-bind:event="event" />
      </div>
    </div>
  </section>
</template>

<script>
import TitleH1 from "@/components/title/title.vue";
import Event from "@/components/event/event.vue";
import DateHelper from "../../dateHelper.js";
import { mapGetters } from "vuex";

export default {
  components: {
    TitleH1,
    Event,
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

<style lang="scss">
.item-event {
  margin: $c-events-margin-tb 0;
}
</style>