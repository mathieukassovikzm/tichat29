<template >
  <div class="title-h1">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.title-h1 {
  padding: 0 0 $titles-padding-tb 0;
  h1 {
    position: relative;
    display: inline-block;
    font-size: $titles-font-size;
    text-transform: uppercase;
    text-align: center;
    font-style: italic;
    font-weight: lighter;
    left: 50%;
    transform: translateX(-50%);
    &::after {
      content: "";
      position: absolute;
      bottom: 0%;
      right: 1%;
      height: $menu-item-link-height !important;
      width: $titles-bar-width;
    }
  }

  &.bkg-dark {
    h1 {
      color: $titles-bkg-dark-color;
      &::after {
        background-color: $titles-bkg-dark-color;
      }
    }
  }
  &.bkg-light {
    h1 {
      color: $titles-bkg-light-color;
      &::after {
        background-color: $titles-bkg-light-color;
      }
    }
  }
}
</style>