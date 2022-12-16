<template>
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
          <EventForm/>
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
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState";
import RetreatForm from "./RetreatForm.vue";
import EventForm from "./EventForm.vue";

export default {
    setup() {
        return {};
    },
    components: { EventForm, RetreatForm }
};
</script>

<style>
.fill{
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
