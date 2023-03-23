<template>
  <div class="p-actualites">
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
import DateHelper from "@/dateHelper.js";
import Functions from "@/functions.js";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      prevHeight: 0,
    };
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageActu: "getBodyClassPageActuInStore",
    }),
    ...mapGetters("actualitesStore", {
      getlistActualites: "getlistActualitesInStore",
      getlistActualitesToCome: "getlistActualitesToComeInStore",
    }),
    listActualites() {
      return DateHelper.getlistActualitesSortedAntiChrono(
        this.getlistActualitesToCome
      );
    },
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageActu);
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
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss">
</style>
