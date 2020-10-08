<template >
  <div class="c-conditions section">
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
        <p>Tarifs d'adoption</p>
        <p>
          Chats adultes : 120€ Comprenant la stérilisation/castration,
          l'identification, la primo-vaccination (et rappel le cas échéant), et
          le déparasitage interne/externe.
        </p>
        <p>
          Chatons : 120€ Comprenant la stérilisation/castration,
          l'identification, la primo-vaccination (et rappel le cas échéant), et
          le déparasitage interne/externe. La stérilisation est obligatoire à
          l'âge de 6 mois, les adoptants rempliront un engagement de
          stérilisation lors de l'adoption et fourniront un chèque de caution de
          120euros, qui sera détruit lors de la réception de l'attestation
          vétérinaire.
        </p>
        <p>
          Chats en "sauvetage" : chats et chatons, malades, âgés, handicapés...
          : don libre (+ chèque de caution pour la stérilisation future s'il
          s'agit d'un chaton)
        </p>
        <p>
          Sachez que ces frais sont inférieurs à ceux que vous paierez en tant
          que particulier chez un vétérinaire, et qu'ils vous donneront la
          garantie d'un animal en règle (l'identification étant obligatoire en
          France). De plus, la stérilisation est le seul moyen de lutter contre
          la prolifération des futures petites misères de demain.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/title/title.vue";
export default {
  name: "component-conditions-adoption",
  components: { PageTitle },
};
</script>

<style lang="scss">
.c-conditions.section {
  height: $c-chat-detail-size;
  background-color: $c-conditions-bkg-color;
  .section-container {
    margin: 0;
    width: $section-resp-width;
    padding-top: $section-padding-tb;
    padding-bottom: $section-padding-tb;
    padding-left: $section-padding-lr;
    padding-right: $section-padding-lr;
  }
  .conditions {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (min-width: $min-width-m) {
  .c-conditions.section {
    .section-container {
      margin: auto;
      width: $section-width;
      .conditions {
        flex-direction: row;
        flex-wrap: nowrap;
        p {
          width: 50%;
        }
      }
    }
  }
}
</style>
