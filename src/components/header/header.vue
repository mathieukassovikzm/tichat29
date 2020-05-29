<template src="./header.html"></template>

<script>
import $ from "jquery";

export default {
  name: "Header",

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
      wasUnderLimiteSize: false,
      isOpened: false
    };
  },
  computed: {
    isOpen() {
      return this.isOpened === true ? "is-opened" : "is-closed";
    }
  },
  methods: {
    openMenu() {
      let windowWidth = document.documentElement.clientWidth;
      if (windowWidth < this.limiteSize) {
        const navLinks = document.querySelectorAll(".nav-item-responsive");
        if (this.isOpened === true) {
          this.isOpened = false;
          navLinks.forEach(link => {
            link.style.animation = `navLinkFadeOut 0.5s ease`;
          });
        } else {
          this.isOpened = true;
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
        this.isOpened = false;
      }
      $("html,body").animate(
        {
          scrollTop: $(idLinkClicked).offset().top - $("#fake-elt").height()
        },
        "slow"
      );
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
        this.isOpened = false;
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
        if (this.isOpened === true) {
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
      this.isOpened = false;
    } else {
      this.isOpened = true;
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
