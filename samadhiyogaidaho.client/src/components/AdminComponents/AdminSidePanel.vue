<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 p-0 rounded">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark rounded-end elevation-6 side-panel sticky-top grow"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
         <img src="../../assets/img/Samadhi-Yoga.png" alt="" height="50" width="50" class="rounded">
            <span class="fs-4">Dashboard</span>
          </a>
          <hr />
          <div
            class="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              class="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Home
            </button>
            <button
              class="nav-link"
              id="event-tab"
              data-bs-toggle="pill"
              data-bs-target="#event"
              type="button"
              role="tab"
              aria-controls="event"
              aria-selected="false"
            >
              Events
            </button>

            <button
              class="nav-link"
              id="retreats-tab"
              data-bs-toggle="pill"
              data-bs-target="#retreats"
              type="button"
              role="tab"
              aria-controls="retreats"
              aria-selected="false"
            >
              Retreats
            </button>
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Settings
            </button>
          </div>
          <hr />
          <div class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                :src="
                  admin?.picture ? admin?.picture : 'https://github.com/mdo.png'
                "
                alt=""
                width="32"
                height="32"
                class="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button class="dropdown-item" type="button" @click="logout">
                  Sign out
                </button>
              </li>
            </ul>
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
  height: 100vh;
}

.active {
  background: rgb(214, 163, 150) !important;
}
</style>
