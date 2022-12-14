<template>
  <header class="sticky-top bg-lightPink elevation-5" id="nav">
    <Navbar class="" id="navBar" v-if="!routeAdmin"/>
    
  </header>
  <main>
    <router-view />
  </main>
<ModalComponent id="activeImage">
<ActiveImage/>
</ModalComponent>
  <Footer v-if="!routeAdmin"/>
</template>

<script>
import { computed, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "./AppState";
import ActiveImage from "./components/ActiveImage.vue";
import Footer from "./components/MiscComponents/Footer.vue";
import Navbar from "./components/MiscComponents/Navbar.vue";
import ModalComponent from "./components/ModalComponent.vue";

export default {
  setup() {
    onMounted(() => {
      hideOnScrollTest();
    });

    watchEffect(() => {});

    function hideOnScrollTest() {
      let nav = document.querySelector("#nav");
      let prevScrollpos = window.scrollY;
      // console.log(["prev"], prevScrollpos);
      window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        // console.log(["current"], currentScrollPos);
        if (prevScrollpos > currentScrollPos) {
          nav.style.opacity = "1";
          nav.style.transition = "all 0.25s ease";
          // nav.classList.remove("showOnScroll");
        } else {
          // nav.classList.add("hiddenOnScroll");
          nav.style.opacity = "0";
        }
        prevScrollpos = currentScrollPos;
      };
    }

    const route = useRoute()

    return {
      routeAdmin: computed(() => route.name == "Admin"),
      appState: computed(() => AppState),
    };
  },
  components: { Navbar, Footer, ModalComponent, ActiveImage },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 80px);
}
</style>
