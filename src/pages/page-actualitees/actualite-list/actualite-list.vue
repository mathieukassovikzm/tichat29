<template >
  <div>
    <div class="section-actualites section-title">
      <div class="title-full title-actualites">
        <h1>Actualité</h1>
      </div>
    </div>

    <section>
      <div class="section-container">
        <ul class="list-actualites">
          <li
            class="item-actualite"
            v-for="actualite in listActualites"
            v-bind:key="actualite.actualiteId"
          >
            <actualite class="not-expanded" v-bind:actualite="actualite" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import actualite from "./../actualite/actualite.vue";
import DateHelper from "@/dateHelper.js";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    actualite,
  },
  data() {
    return {};
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
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss">
.list-actualites {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  margin-top: $c-actualite-padding-t;

  .item-actualite {
    margin: $c-actualites-margin-tb $c-actualites-margin-lr;
  }
}
</style>