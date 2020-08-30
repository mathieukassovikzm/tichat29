<template >
  <div class="c-conditions">
    <section class="section">
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
.c-conditions {
  width: 100%;
  height: $c-chat-detail-size;
  background-color: $c-conditions-bkg-color;
}
</style>
