<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 p-0 rounded">
        <div
          class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark rounded-end elevation-6 side-panel"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-4">Admin </span>
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
                src="https://github.com/mdo.png"
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
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="event"
            role="tabpanel"
            aria-labelledby="event-tab"
            tabindex="0"
          >
            EVENTS TAB
          </div>

          <div
            class="tab-pane fade"
            id="retreats"
            role="tabpanel"
            aria-labelledby="retreats-tab"
            tabindex="0"
          >
          <RetreatForm/>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabindex="0"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { RouterView } from "vue-router";
import { AppState } from "../AppState.js";
import AdminSidePanel from "../components/AdminComponents/AdminSidePanel.vue";
import AdminTabs from "../components/AdminComponents/AdminTabs.vue";
import RetreatForm from "../components/RetreatForm.vue";

import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {});
    watchEffect(() => {});
    return {
      editable,
    };
  },
  components: { RetreatForm, AdminSidePanel, AdminTabs, RetreatForm },
};
</script>

<style lang="scss" scoped>
.side-panel {
  height: 100vh;
}
</style>
