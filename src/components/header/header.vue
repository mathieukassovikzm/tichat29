<template src="./header.html"></template>

<script>
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";
import router from "./../../router";
import Burger from "./../burger/burger.vue";

export default {
  name: "Header",
  components: {
    Burger
  },
  data() {
    return {
      navItems: [
        { name: "Home", href: "PageHome" },
        { name: "Adoptées", href: "PageAdoptees" },
        { name: "Adoption", href: "PageAdoption" },
        { name: "Event", href: "PageEvents" },
        { name: "Contact", href: "Contact" }
      ],
      limiteSize: 650,
      isUnderLimiteSize: false,
      wasUnderLimiteSize: false
    };
  },
  computed: {
    ...mapGetters("mainStore", {
      getNavOpenState: "getNavOpenStateInStore"
    }),

    isOpen() {
      return this.getNavOpenState === true ? "is-opened" : "is-closed";
    }
  },
  methods: {
    ...mapActions("mainStore", {
      toggleNavOpen: "toggleNavOpenInStore",
      setToFalseNavOpen: "setToFalseNavOpenInStore",
      setToTrueNavOpen: "setToTrueNavOpenInStore"
    }),

    openMenu() {
      let windowWidth = document.documentElement.clientWidth;
      if (windowWidth < this.limiteSize) {
        const navLinks = document.querySelectorAll(".nav-item-responsive");
        // If the menu just closed => Fadeout, else FadeIn
        if (this.getNavOpenState === false) {
          navLinks.forEach(link => {
            link.style.animation = `navLinkFadeOut 0.5s ease`;
          });
        } else {
          navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index /
              7 +
              0.1}s`;
          });
        }
      }
    },

    goToTop() {
      $("html,body").animate(
        {
          scrollTop: 0
        },
        "slow"
      );
    },

    linkClicked(idLinkClicked) {
      if (this.isUnderLimitSize()) {
        this.setToFalseNavOpen();
      }
      router.push({ name: idLinkClicked });
    },

    onNavBarItemClicked() {
      this.openMenu();
    },

    onResize() {
      this.isUnderLimiteSize = this.isUnderLimitSize();

      if (this.isUnderLimiteSize !== this.wasUnderLimiteSize) {
        /* enlever l'animation ici */
        const nav = document.getElementById("nav-responsive");
        nav.style.animation = "";
        this.setToFalseNavOpen();
      }
      this.wasUnderLimiteSize = this.isUnderLimiteSize;
    },

    /* Check if the window is under the limiteSize
     * @returns true is window under the limiteSize, false otherwise
     */
    isUnderLimitSize() {
      if (document.documentElement.clientWidth < this.limiteSize) {
        return true;
      } else {
        return false;
      }
    },

    /* Toggle the class to the body to forbid the scroll if the Nav is open
     * Called before and after the transition on the Nav
     */
    toggleScroll() {
      if (this.isUnderLimitSize()) {
        const elementBody = document.getElementsByTagName("body")[0];
        if (this.getNavOpenState) {
          elementBody.classList.add(this.classCantScroll);
        } else {
          elementBody.classList.remove(this.classCantScroll);
        }
      }
    },

    onScroll() {
      var y = window.scrollY;
      if (y > 50 && !this.isSmallSquare) {
        this.isSmallSquare = true;
      } else if (y < 50 && this.isSmallSquare) {
        this.isSmallSquare = false;
      }
    }
  },

  beforeMount() {
    this.wasUnderLimiteSize = this.isUnderLimitSize();
    this.isUnderLimiteSize = this.wasUnderLimiteSize;
    if (this.isUnderLimiteSize === true) {
      this.setToFalseNavOpen();
    } else {
      this.setToTrueNavOpen();
    }
  },

  mounted() {
    this.$nextTick(function() {
      var resizeId;
      window.addEventListener("resize", () => {
        clearTimeout(resizeId);
        resizeId = setTimeout(this.onResize(), 500);
      });
    });

    document.addEventListener("scroll", this.onScroll);
  },

  destroy() {
    window.removeEventListener("resize", () => {});
    document.removeEventListener("scroll", () => {});
  }
};
</script>

<style lang="scss" src="./header.scss"></style>
