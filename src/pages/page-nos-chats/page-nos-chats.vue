<template>
  <section class="page-nos-chats section">
    <div class="section-container">
      <router-view></router-view>
    </div>
    <div class="voir-conditions" @click="voirConditions">
      <SvgCatPaw />
      <h3 v-if="voirConditionsTxt">Voir Conditions</h3>
      <h3 v-else>Retour</h3>
    </div>
  </section>
</template>

<script>
import SvgCatPaw from "@/components/svg/svg-cat-paw.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "page-nos-chats",
  components: {
    SvgCatPaw,
  },
  data() {
    return {
      voirCond: true,
    };
  },
  computed: {
    ...mapGetters("mainStore", {
      getBodyClassPageNosChats: "getBodyClassPageNosChatsInStore",
    }),
    voirConditionsTxt() {
      return this.voirCond;
    },
  },
  methods: {
    ...mapActions("mainStore", {
      setBodyClass: "setBodyClassInStore",
    }),
    setSiteContainerClass() {
      this.setBodyClass(this.getBodyClassPageNosChats);
    },
    voirConditions() {
      if (this.$route.name == "ConditionsAdoption") {
        this.$router.go(-1);
        this.voirCond = true;
      } else {
        this.$router.push({ name: "ConditionsAdoption" });
        this.voirCond = false;
      }
    },
  },
  beforeMount() {
    this.setSiteContainerClass();
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
