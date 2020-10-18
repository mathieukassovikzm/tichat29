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
      </p><br/>
      <p>Nous militons pour des adoptions responsables et engagées.</p><br/>
      <p>
        Nos protégés, chats jeunes et moins jeunes, ont tous un point commun:
        avoir souffert de l'abandon, souvent de l'errance et de conditions de
        vie misérable dans la rue.
      </p><br/>
      <p>
        Nous tenons à responsabiliser les adoptants potentiels sur le fait
        qu'adopter un animal est bien un engagement sur un certain nombre
        d'années : ce n'est ni une peluche, ni un jouet !
      </p><br/>
      <p>
        De part leur histoire, certains de nos chats auront besoin de patience
        et de douceur pour reprendre confiance en l'humain, qui les a malmenés.
      </p><br/>
      <p>
        En adoptant un de nos protégés, vous nous permettez de sauver une
        nouvelle vie!
      </p><br/>
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

<style lang="scss" scr="./presentation-asso.scss"></style>