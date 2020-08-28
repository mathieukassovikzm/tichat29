<template src="./event.html"></template>

<script>
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import { Flipped } from "vue-flip-toolkit";
import moment from "moment";

export default {
  name: "component-event",
  props: ["event", "expanded"],
  components: {
    SvgCatPaw,
    Flipped,
  },
  data() {
    return {
      paragraphs: [
        {
          index: 1,
          txt: `${this.event.titre}`,
        },
        {
          index: 2,
          txt: `Date: ${moment(this.event.date).format("DD/MM/YYYY")}`,
        },
        {
          index: 3,
          txt: `Heure: ${moment(this.event.date).format("H:mm")}`,
        },
        {
          index: 4,
          txt: `Lieu: ${this.event.lieu}`,
        },
      ],
    };
  },
  computed: {
    flipId() {
      return `listItem-${this.event.eventId}`;
    },
    flipIdAvatar() {
      return `listItem-avatar-${this.event.eventId}`;
    },
    flipIdInfosSupp() {
      return `listItem-infos-supp-${this.event.eventId}`;
    },
    isExpanded() {
      return this.expanded ? "expanded" : "";
    },
    noPhoto() {
      return this.event.photo === "" ? true : false;
    },
    getPhoto() {
      return {
        ...this.event.photo,
        img:
          this.event.photo &&
          require(`@/assets/img/Events/${this.event.photo}`),
      };
    },
  },
  methods: {
    shouldFlip(prev, current) {
      return prev === this.event.eventId || current === this.event.eventId;
    },
    onStart({ el }) {
      el.classList.add("animated-in");
    },
    descTitle(index) {
      return index === 1 ? "desc-title" : "";
    },
  },
};
</script>

<style lang="scss" src="./event.scss"></style>
