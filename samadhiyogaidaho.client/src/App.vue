<template>
  <header >
    <Navbar class="d-none fixed-top d-md-flex" id="nav" v-if="!routeAdmin"/>
    
  </header >
  <main>
     <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  </main>
 <Navbar class="d-block fixed-bottom d-md-none" id="nav" v-if="!routeAdmin"/>

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
          nav.style.top = "-250px"
               nav.style.transition = "all .50s ease";
        }
        prevScrollpos = currentScrollPos;
      };
    }

    const route = useRoute()
    const router = useRouter()
    const names = ["Admin", "AdminEvents", "AdminRetreats", "AdminHome", "AdminSettings", "AdminSchedule"]

    return {
      routeAdmin: computed(() => names.find(n => n == route.name)),
      appState: computed(() => AppState),
    };
  },
  components: { Navbar, Footer, ModalComponent, ActiveImage },
};
</script>
<style lang="scss">

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
  transition: all .25s ease;
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
