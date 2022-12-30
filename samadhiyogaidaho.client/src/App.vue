<template>
  <header>
    <Navbar class="d-none fixed-top d-md-flex" id="nav" v-if="!routeAdmin" />
  </header>
  <main>
    <router-view   />
  </main>
  <Navbar class="d-block fixed-bottom d-md-none" id="nav" v-if="!routeAdmin" />

  <ModalComponent id="activeImage">
    <ActiveImage />
  </ModalComponent>
  <Footer v-if="!routeAdmin" />
</template>

<script>
import { computed, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { AppState } from "./AppState";
import ActiveImage from "./components/MiscComponents/ActiveImage.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import ModalComponent from "./components/MiscComponents/ModalComponent.vue";
import { logger } from "./utils/Logger";
import { retreatsService } from "./services/RetreatsService.js";
import Pop from "./utils/Pop";

export default {
  setup() {
    onMounted(() => {
      hideOnScrollTest();
      getRetreats()
    });
    async function getRetreats() {
      try {
        await retreatsService.getAllRetreats()
      } catch (error) {
        Pop.error(error, "[getRetreats]");
      }
    }
    function hideOnScrollTest() {
      let nav = document.querySelector("#nav");
      let prevScrollpos = window.scrollY;

      window.onscroll = function () {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          nav.style.top = "0";
        } else {
          nav.style.top = "-250px";
        }
        prevScrollpos = currentScrollPos;
      };
    }

    const route = useRoute();
    const names = [
      "Admin",
      "AdminEvents",
      "AdminRetreats",
      "AdminHome",
      "AdminSettings",
      "AdminSchedule",
    ];

    return {
      routeAdmin: computed(() => names.find((n) => n == route.name)),
      appState: computed(() => AppState),
    };
  },
  components: { Navbar, Footer, ModalComponent, ActiveImage },
};
</script>
<style lang="scss">
#nav {
  transition: all 0.5s ease;
}
.slideX-enter-active,
.slideX-leave-active {
  transform: translateX(0);
  transition: all 0.5s ease;
}
.slideX-enter-from,
.slideX-leave-to {
  transform: translateX(100vw);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 80px);
}
</style>
