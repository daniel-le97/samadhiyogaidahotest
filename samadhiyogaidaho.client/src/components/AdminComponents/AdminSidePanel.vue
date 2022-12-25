<template>
  <div class="container-fluid sticky-top">
    <div class="row">
      <div class="col-md-12 p-0">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark elevation-6 side-panel sticky-top grow"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none justify-content-center"
          >
            <img
              src="../../assets/img/Samadhi-Yoga.png"
              alt=""
              height="50"
              width="50"
              class="rounded me-4"
            />
            <span class="fs-4">Dashboard</span>
          </a>
          <hr />
          <div class="d-flex flex-column navbar-nav">
            <router-link class="nav-link " :to="{ name: 'AdminHome' }">
              Home
            </router-link>
            <router-link class="nav-link" :to="{ name: 'AdminEvents' }">
            Events
            </router-link>
            <router-link class="nav-link" :to="{ name: 'AdminRetreats' }">
            Retreats
            </router-link>
            <router-link class="nav-link" :to="{ name: 'AdminSchedule' }">
            Schedule
            </router-link>
            <router-link class="nav-link" :to="{ name: 'AdminSettings' }">
             Settings
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from "../../AppState";
import { AuthService } from "../../services/AuthService";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    return {
      admin: computed(() => AppState?.account),
      async loadTab(tab) {
        AppState.activeTab = tab;
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
        // AuthService.
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.grow{
  height: 100vh;
}
.navbar-nav .router-link-exact-active {


  color: var(--peach);
  transform: translateX(80px);
  transition: all 0.25s ease !important;
  text-decoration: underline;
  font-size: 2.5rem;
}

.nav-link{
  margin-bottom: 5px;
  font-size: 1.75rem;
}
.nav-link:hover {
  color: var(--peach) !important;
  transition: all 0.25s ease;


}

.active {
  background: rgb(214, 163, 150) !important;
}
</style>
