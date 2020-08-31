<template >
  <div class="c-conditions section">
    <section class="section-container">
      <PageTitle class="bkg-light">Conditions</PageTitle>
      <div class="conditions">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae cupiditate similique et quaerat eaque harum commodi? Autem quia molestias recusandae similique, velit sapiente neque dolor amet nobis doloremque quis accusantium?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae cupiditate similique et quaerat eaque harum commodi? Autem quia molestias recusandae similique, velit sapiente neque dolor amet nobis doloremque quis accusantium?</p>
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
