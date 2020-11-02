<template >
  <div class="section-bkg-img">
    <slot></slot>
    <div class="separation">
      <span class="dome"></span>
      <span class="dot"></span>
      <hr class="line line1" />
      <hr class="line line2" />
      <hr class="line line3" />
      <hr class="line line4" />
      <hr class="line line5" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-bkg-img {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  &.bkg-dark {
    box-shadow: $sbkgimg-box-shadow-dark;
  }
  &.bkg-light {
    box-shadow: $sbkgimg-box-shadow-light;
  }
  .separation {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(-50%);
    .dome {
      height: $sbkgimg-crop-img-height;
      width: $sbkgimg-crop-img-width;
      background-color: $site-bkg-color;
      border-radius: 50%;
      display: inline-block;
    }
    .dot {
      position: absolute;
      display: inline-block;
      left: 50%;
      bottom: $sbkgimg-dot-bottom;
      transform: translateX(-50%) translateY(-50%);
      height: $sbkgimg-dot-size;
      width: $sbkgimg-dot-size;
      background-color: $sbkgimg-dot-color;
      border-radius: 50%;
    }
    .line {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: $sbkgimg-line-width;
      height: $sbkgimg-line-height;
      border: 0;
      background-color: $sbkgimg-line-color;
      @for $i from 1 through $sbkgimg-line-nb {
        &.line#{$i} {
          bottom: $sbkgimg-line-bottom +
            $sbkgimg-line-space *
            $i +
            $sbkgimg-line-height *
            $i;
        }
      }
    }
  }

  &.img-obj-asso {
    background-image: url("./../../assets/img/pageHome/img-obj-asso.jpg");
    background-position: right 60% center;
  }
  &.img-fam-acc {
    background-image: url("./../../assets/img/pageHelp/img-fam-acc.jpg");
  }
  &.img-lilo {
    background-image: url("./../../assets/img/pageHelp/img-lilo.jpg");
  }
  &.img-actualitees {
    background-image: url("./../../assets/img/pageHome/img-actualitees.jpg");
  }
  &.img-chats {
    background-image: url("./../../assets/img/pageNosProteges/img-chats.jpg");
  }
  &.img-chattons {
    background-image: url("./../../assets/img/pageNosProteges/img-chattons.jpg");
  }
  &.img-sauvetages {
    background-image: url("./../../assets/img/pageNosProteges/img-sauvetages.jpg");
  }
  &.bkg-dark {
    h1,
    p {
      color: $c-text-light;
      &::after {
        background-color: $c-text-light;
      }
    }
  }
  &.bkg-light {
    h1,
    p {
      color: $c-text-dark;
      &::after {
        background-color: $c-text-dark;
      }
    }
  }
}
</style>