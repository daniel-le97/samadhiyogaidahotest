<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabindex="0"
          >
            <HomeTabPage />
          </div>
          <div
            class="tab-pane fade"
            id="event"
            role="tabpanel"
            aria-labelledby="event-tab"
            tabindex="0"
          >
            <EventTabPage />
            <!-- <EventForm/> -->
          </div>

          <div
            class="tab-pane fade"
            id="retreats"
            role="tabpanel"
            aria-labelledby="retreats-tab"
            tabindex="0"
          >
            <RetreatTabPage />
            <!-- <RetreatForm/> -->
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
            tabindex="0"
          >
            <SettingsTabPage />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState";
import RetreatForm from "./RetreatForm.vue";
import EventForm from "./EventForm.vue";
import EventTabPage from "./AdminTabPages/EventTabPage.vue";
import RetreatTabPage from "./AdminTabPages/RetreatTabPage.vue";
import SettingsTabPage from "./AdminTabPages/SettingsTabPage.vue";
import HomeTabPage from "./AdminTabPages/HomeTabPage.vue";

export default {
  setup() {
    return {};
  },
  components: {
    EventForm,
    RetreatForm,
    EventTabPage,
    RetreatTabPage,
    SettingsTabPage,
    HomeTabPage,
  },
};
</script>

<style>
.fill {
  min-height: 75vh;
  max-height: 75vh;
}
/* Helper classes */
.bg-basil {
  background-color: #fffbe6 !important;
}
.text-basil {
  color: #356859 !important;
}
</style>
