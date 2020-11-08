<template >
  <section class="p-conditions">
    <section class="section-container">
      <PageTitle class="bkg-light">Conditions d'adoptions</PageTitle>
      <div class="conditions">
        <p>
          Dans un premier temps, la prise de contact se fait auprès d'un des
          responsables de l'association, via téléphone, mail ou facebook. Nous
          connaissons bien nos chats, aussi des questions vous seront posées
          afin de déterminer si le caractère et le mode de vie de celui-ci peut
          vous correspondre.
        </p>
        <p>
          Dans un second temps, nous vous mettrons en contact avec la famille
          d'accueil de l'animal en question, afin de convenir d'un rendez-vous
          pour le rencontrer. Toute adoption donne lieu à un contrat auprès de
          l'association et à un engagement de stérilisation s'il s'agit d'un
          chaton.
        </p>
        <div class="tarif-title">
          <h3>Tarifs d'adoption</h3>
        </div>
        <div class="tarifs">
          <div class="item-tarif tarifs-chats">
            <div class="tarif-title">
              <h4>Chats adultes</h4>
            </div>
            <p>
              120€ Comprenant la stérilisation/castration, l'identification, la
              primo-vaccination (et rappel le cas échéant), et le déparasitage
              interne/externe.
            </p>
          </div>
          <div class="item-tarif tarifs-chattons">
            <div class="tarif-title">
              <h4>Chatons</h4>
            </div>
            <p>
              120€ Comprenant la stérilisation/castration, l'identification, la
              primo-vaccination (et rappel le cas échéant), et le déparasitage
              interne/externe. La stérilisation est obligatoire à l'âge de 6
              mois, les adoptants rempliront un engagement de stérilisation lors
              de l'adoption et fourniront un chèque de caution de 120euros, qui
              sera détruit lors de la réception de l'attestation vétérinaire.
            </p>
          </div>
          <div class="item-tarif tarifs-sauvetage">
            <div class="tarif-title">
              <h4>Chats en "sauvetage"</h4>
            </div>
            <p>
              chats et chatons, malades, âgés, handicapés... : don libre (+
              chèque de caution pour la stérilisation future s'il s'agit d'un
              chaton)
            </p>
            <p>
              Sachez que ces frais sont inférieurs à ceux que vous paierez en
              tant que particulier chez un vétérinaire, et qu'ils vous donneront
              la garantie d'un animal en règle (l'identification étant
              obligatoire en France). De plus, la stérilisation est le seul
              moyen de lutter contre la prolifération des futures petites
              misères de demain.
            </p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <div class="button-paw" @click="goBack">
          <SvgCatPaw />
          <p>Retour</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import PageTitle from "@/components/title/title.vue";
import SvgCatPaw from "@/components/svg/svg-cat-paw";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "component-conditions-adoption",
  components: { PageTitle, SvgCatPaw },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageCondition: "getBodyClassPageConditionInStore",
    }),
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageCondition);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  beforeMount() {
    this.setSiteContainerClass();
  },
};
</script>
  
<style lang="scss" src="./conditions-adoption.scss">
</style>
