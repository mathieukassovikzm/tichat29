<template >
  <div class="div-title">
    <h2>
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.div-title {
  h2 {
    &::after {
      height: $menu-item-link-height !important;
    }
  }

  &.bkg-dark {
    h2 {
      color: $titles-bkg-dark-color;
      &::after {
        background-color: $titles-bkg-dark-color;
      }
    }
  }
  &.bkg-light {
    h2 {
      color: $titles-bkg-light-color;
      &::after {
        background-color: $titles-bkg-light-color;
      }
    }
  }
}
</style>