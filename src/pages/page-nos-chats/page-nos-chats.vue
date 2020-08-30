<template>
  <section class="page-nos-chats section">
    <div class="section-container">
      <router-view></router-view>
    </div>
    <div class="voir-conditions">
      <SvgCatPaw />
      <h3>Voir Conditions</h3>
    </div>
  </section>
</template>

<script>
import SvgCatPaw from "@/components/svg/svg-cat-paw.vue";

export default {
  name: "page-nos-chats",
  components: {
    SvgCatPaw,
  },
};
</script>

<style lang="scss" >
.page-nos-chats {
  &.section .section-container {
    padding: 0;
  }
  .voir-conditions {
    position: absolute;
    bottom: $p-chats-vc-position-b;
    right: $p-chats-vc-position-r;
    .svg-cat-paw {
      position: relative;
      left: 50%;
      bottom: 30px;
      width: $p-chats-paw-width;
      filter: $p-chats-paw-drop-shadow;
      transition: transform $p-chats-paw-scale-up-duration ease;
      path,
      ellipse {
        fill: $p-chats-paw-color;
      }
    }
    h3 {
      margin-bottom: 0;
    }
    &:hover {
      cursor: pointer;
      .svg-cat-paw {
        transform: scale($p-chats-paw-scale-up);
      }
    }
  }
}
/*******************************
 * Menu Responsive
 *******************************/
@media only screen and (min-width: $min-width-m) {
  .page-nos-chats {
    &.section .section-container {
      width: 100%;
    }
  }
}
</style>
