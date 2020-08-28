<template >
  <section class="section">
    <div class="section-container">
      <TitleH1 class="bkg-light">Evenements</TitleH1>
      <Flipper
        :flipKey="active"
        :spring="spring"
        :decisionData="active"
        :staggerConfig="staggerConfig"
      >
        <ul>
          <li
            class="item-event"
            v-for="event in listEvents"
            v-bind:key="event.eventId"
            @click="onClick(event.eventId)"
          >
            <Event v-bind:event="event" :expanded="active === event.eventId" />
          </li>
        </ul>
      </Flipper>
    </div>
  </section>
</template>

<script>
import TitleH1 from "@/components/title/title.vue";
import Event from "@/components/event/event.vue";
import DateHelper from "../../dateHelper.js";
import { Flipper } from "vue-flip-toolkit";
import { mapGetters } from "vuex";

export default {
  components: {
    TitleH1,
    Event,
    Flipper,
  },
  data() {
    return {
      active: 0,
      staggerConfig: {
        listEvents: {
          speed: 1,
          reverse: false,
        },
        listEventsContent: {
          speed: 1,
          reverse: false,
        },
      },
    };
  },
  computed: {
    ...mapGetters("eventsStore", {
      getListEvents: "getListEventsInStore",
      getListEventsToCome: "getListEventsToComeInStore",
    }),
    listEvents() {
      return DateHelper.getListEventsSortedAntiChrono(this.getListEventsToCome);
    },
    spring() {
      return {
        stiffness: 70,
        damping: 15,
      };
    },
  },
  methods: {
    onClick(item) {
      this.active = this.active === item ? 0 : item;
      this.staggerConfig.listEvents.reverse = this.active !== 0;
      this.staggerConfig.listEventsContent.reverse = this.active !== 0;
    },
  },
};
</script>

<style lang="scss">
.item-event {
  margin: $c-events-margin-tb 0;
}
</style>