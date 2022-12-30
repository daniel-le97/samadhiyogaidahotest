<template>
  <div class="container schedule-section my-5">
    <div class="row" >
      <div class="col-md-12 text-center">
        <h1
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="display-2 font-1 underline"
        >
          Schedule
        </h1>
        <br />
      </div>

      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="card border-0 elevation-6"
        >
          <div class="image-box">
            <img
              src="https://images.unsplash.com/photo-1609611884865-4bb969258ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              class="img-fluid rounded-4 elevation-6 schedule-image"
            />
          </div>
        </div>
      </div>
      <div
        class="col-md-6 d-flex flex-column align-content-center justify-content-center"
      >
        <ScheduleCard :schedule="s" v-for="s in schedules" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from "../../AppState.js";
import ScheduleCard from "./ScheduleCard.vue";
import { computed } from "@vue/reactivity";
export default {
  setup() {
    return {
      schedules: computed(() => AppState.schedules),

      async changeText() {
        try {
          await scheduleService.createSchedule(this.schedule);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
  components: { ScheduleCard },
};
</script>

<style lang="scss" scoped></style>
