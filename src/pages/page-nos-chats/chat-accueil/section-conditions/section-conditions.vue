<template >
  <section class="section section-conditions">
    <section class="section-container">
      <PageTitle class="bkg-light">Conditions d'adoptions</PageTitle>
      <div class="conditions">
        <p>Vous pensez à adopter un chat ?</p>
        <p>
          Tout d’abord sachez qu’en adoptant, vous donnez à ces petits orphelins
          la chance de vivre dans un foyer et de recevoir de l'amour et nous
          vous en remercions grandement !
        </p>
        <p>
          Soyez en assuré, vous faites une bonne action, mais avant de passer le
          pas nous vous demandons de bien prendre conscience des différentes
          conditions concernant l’adoption.
        </p>
        <div class="buttons">
          <div class="button-paw" @click="goToConditions">
            <SvgCatPaw />
            <p>Voir les conditions</p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import PageTitle from "@/components/title/title.vue";
import SvgCatPaw from "@/components/svg/svg-cat-paw";
export default {
  name: "component-conditions-adoption",
  components: { PageTitle, SvgCatPaw },
  methods: {
    goToConditions() {
      this.$router.push({ name: "ConditionsAdoption" });
    },
  },
};
</script>

<style lang="scss">
.section-conditions {
  .buttons {
    margin-top: 50px;
    @include btnPaw($btn-color: $p-chats-paw-color);
    .button-paw p {
      color: $c-text-dark;
    }
  }
}
</style>
