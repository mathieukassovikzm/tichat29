<template >
  <section class="s-actualite-detail">
    <div class="section-container">
      <actualite class="expanded" v-bind:actualite="actualite" />
    </div>
  </section>
</template>

<script>
import actualite from "@/pages/page-actualitees/actualite/actualite.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    actualite,
  },
  data() {
    return {
      loading: false,
      error: null,
      actualite: null,
    };
  },
  computed: {
    ...mapGetters("actualitesStore", {
      getactualite: "getactualiteInStore",
    }),
    ...mapGetters("mainStore", {
      getBodyClassPageActuDetail: "getBodyClassPageActuDetailInStore",
    }),
  },
  methods: {
    ...mapActions("actualitesStore", {
      fetchInfosactualites: "fetchInfosactualitesInStore",
    }),
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageActuDetail);
    },
    fetchData() {
      this.error = this.actualite = null;
      this.loading = true;
      const fetchedId = this.$route.params.itemId;
      var resultactualite = this.getactualite(fetchedId);
      this.actualite = resultactualite[0];
    },
  },
  beforeMount() {
    this.fetchData();
    this.setSiteContainerClass();
  },
};
</script>

<style lang="scss">
.p-actualite-detail .site-pusher .site-content section {
  @include bkgImg($url: "./../../../assets/img/backgroundTichat29.png");
}
</style>