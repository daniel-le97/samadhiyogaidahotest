<template>
  <header class="sticky-top bg-lightPink elevation-5">
    <Navbar class="" id="nav" v-if="!routeAdmin"/>
    
  </header >
  <main>
    <router-view  />
  </main>
<ModalComponent id="activeImage">
<ActiveImage/>
</ModalComponent>
  <Footer v-if="!routeAdmin"/>
</template>

<script>
import { computed, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "./AppState";
import ActiveImage from "./components/ActiveImage.vue";
import Footer from "./components/MiscComponents/Footer.vue";
import Navbar from "./components/MiscComponents/Navbar.vue";
import ModalComponent from "./components/MiscComponents/ModalComponent.vue";
import { logger } from "./utils/Logger";

export default {
  setup() {
    onMounted(() => {
      hideOnScrollTest();
      getRoute()
    });
    function getRoute(){
      logger.log(route.name);
    }

    function hideOnScrollTest() {
      let nav = document.querySelector("#nav");
      let prevScrollpos = window.scrollY;

      window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          nav.style.top = "0";
          nav.style.transition = "all .50s ease";
          // nav.classList.remove("showOnScroll");
        } else {
          // nav.classList.add("hiddenOnScroll");
          nav.style.top = "-200px"
               nav.style.transition = "all .50s ease";
        }
        prevScrollpos = currentScrollPos;
      };
    }

    const route = useRoute()
    const router = useRouter()
    const names = ["Admin", "AdminEvents", "AdminRetreats", "AdminHome", "AdminSettings"]

    return {
      routeAdmin: computed(() => names.find(n => n == route.name)),
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
