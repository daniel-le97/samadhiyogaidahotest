<template>
  <header class="sticky-top bg-lightPink elevation-5">
    <Navbar class="" id="nav" v-if="!routeAdmin"/>
    
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
import ModalComponent from "./components/MiscComponents/ModalComponent.vue";

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
