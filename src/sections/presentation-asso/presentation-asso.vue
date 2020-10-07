<template >
  <section class="section s-presentation-asso">
    <div class="section-container">
      <div class="title-h1">
        <TitleH1 class="bkg-light">TiChat29</TitleH1>
      </div>
      <p>
        L'association Ti Chat 29 a été créée afin de venir en aide aux chats
        abandonnés. L'objectif étant de recueillir, identifier, stériliser et
        placer les chats abandonnés.
      </p>
      <p>Nous militons pour des adoptions responsables et engagées.</p>
      <p>
        Nos protégés, chats jeunes et moins jeunes, ont tous un point commun:
        avoir souffert de l'abandon, souvent de l'errance et de conditions de
        vie misérable dans la rue.
      </p>
      <p>
        Nous tenons à responsabiliser les adoptants potentiels sur le fait
        qu'adopter un animal est bien un engagement sur un certain nombre
        d'années : ce n'est ni une peluche, ni un jouet !
      </p>
      <p>
        De part leur histoire, certains de nos chats auront besoin de patience
        et de douceur pour reprendre confiance en l'humain, qui les a malmenés.
      </p>
      <p>
        En adoptant un de nos protégés, vous nous permettez de sauver une
        nouvelle vie!
      </p>
      <p></p>
    </div>

    <SectionBkgImg class="img-obj-asso bkg-light">
      <div class="section-bkg-img img-obj-asso">
        <div class="section-container">
          <TitleH1>Objectifs de l'association</TitleH1>
          <p>
            Les chats sociables sont recueillis par notre association pour être
            proposés à l’nos-chats (ils sont identifiés, vaccinés, stérilisés ou
            castrés). Afin de remédier à la prolifération des chats errants qui
            ne sont pas sociables, nous souhaitons les faire stériliser ou
            castrer par un vétérinaire, puis les remettre sur site où ils sont
            nourris et disposent d’un abri que nous confectionnons.
          </p>
        </div>
      </div>
    </SectionBkgImg>

    <div class="section-container">
      <TitleH1 class="bkg-light">Familles d'accueil</TitleH1>
      <p>
        Nous sommes à la recherche de familles d'accueil afin de mettre nos
        petits protégés à l'abri le temps de leur nos-chats. Les chats sont mis
        en quarantaine dans un premier temps, soit dans la famille d'accueil ou
        soit dans une famille d'accueil prévue pour les quarantaines. Ils seront
        vus par un vétérinaire, déparasités interne et externe, identifiés,
        stérilisés et primo vaccinés.
      </p>
    </div>
    <SectionBkgImg class="img-fam-acc bkg-light">
      <div class="section-container">
        <p>
          Ti Chat 29 fournit les croquettes et prend en charge les frais
          vétérinaires. Actuellement les demandes de prise en charge affluent
          mais nous manquons cruellement de familles d'accueil. Etre famille
          d'accueil c'est de l'amour et le bonheur de participer à un sauvetage
          : n'hésitez pas à en parler autour de vous ! Nous avons besoin de
          votre aide pour donner une seconde chance à tous ces chats abandonnés.
        </p>
      </div>
    </SectionBkgImg>
  </section>
</template>

<script>
import TitleH1 from "@/components/title/title.vue";
import SectionBkgImg from "@/components/section-bkg-img/section-bkg-img.vue";
export default {
  components: {
    TitleH1,
    SectionBkgImg,
  },
};
</script>

<style lang="scss" >
.s-presentation-asso {
  p {
    text-align: center;
    color: $c-primary-dark;
  }
  .img-obj-asso,
  .img-fam-acc {
    .section-container {
      display: flex;
      flex-wrap: wrap;
      .title-h1 {
        width: 100%;
      }
      p {
        width: 100%;
        color: $c-text-dark;
      }
    }
  }
}

@media only screen and (min-width: $min-width-m) {
  .s-presentation-asso {
    .img-obj-asso,
    .img-fam-acc {
      .section-container {
        p {
          width: 50%;
        }
      }
    }
  }
}
</style>