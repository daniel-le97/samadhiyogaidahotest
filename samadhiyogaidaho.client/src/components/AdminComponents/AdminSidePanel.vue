<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 p-0">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark elevation-6 side-panel sticky-top grow"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <img
              src="../../assets/img/Samadhi-Yoga.png"
              alt=""
              height="50"
              width="50"
              class="rounded"
            />
            <span class="fs-4">Dashboard</span>
          </a>
          <hr />
          <div class="d-flex flex-column">
            <router-link class="navbar-brand d-flex" :to="{ name: 'AdminHome' }">
              <button class="btn btn-primary">Home</button>
            </router-link>
            <router-link class="navbar-brand" :to="{ name: 'AdminEvents' }">
              <button class="btn btn-primary">Events</button>
            </router-link>
            <router-link class="navbar-brand" :to="{ name: 'AdminRetreats' }">
              <button class="btn btn-primary">Retreats</button>
            </router-link>
            <router-link class="navbar-brand" :to="{ name: 'AdminSettings' }">
              <button class="btn btn-primary">Settings</button>
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
.nav-link {
  color: var(--teal);
}
.grow {
  height: 97vh;
}

.active {
  background: rgb(214, 163, 150) !important;
}
</style>
