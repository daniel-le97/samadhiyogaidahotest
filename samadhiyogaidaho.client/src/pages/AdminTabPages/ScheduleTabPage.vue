<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 my-2">
        <div class="">
        
       
            <button
           
              class="btn btn-success font-2 fs-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Create Schedule
            </button>
       
          <div class="collapse" id="collapseExample">
          <ScheduleForm/>
          </div>
        </div>
      </div>
    </div>
    <div class="row " v-if="!activeSchedule">
      <div class="col-12" v-for="s in schedules">
        <div class="position-relative">
          <ScheduleCard :schedule="s" />
          <div
            class="d-flex justify-content-center gap-2 position-absolute top-0 end-0"
          >
            <button
              class="btn btn-outline-warning font-2 fs-3"
              @click="editSchedule(s)"
            >
              Edit Schedule
            </button>
            <button
              class="btn btn-outline-danger font-2 fs-3"
              @click="deleteSchedule(s)"
            >
              Delete Schedule
            </button>
          </div>
        </div>
        <hr>
      </div>
    </div>
    <div v-else class="container-fluid">
      <div class="row">
        <div class="col-12">
          <ScheduleForm/>
          <!-- <div class="elevation-1">
          <EventCard :event="activeEvent" />
        </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- <button @click="form = !form" class="btn btn-primary">add an event</button> -->
  <!-- <button @click="form = !form" class="btn btn-primary">edit an event</button> -->
</template>

<script>
import { getEventListeners } from "events";
import { onMounted, ref } from "vue";
import { AppState } from "../../AppState";
import EventForm from "../../components/AdminComponents/EventForm.vue";
import EventCard from "../../components/EventsPage/EventCard.vue";
import { eventsService } from "../../services/EventsService";
import Pop from "../../utils/Pop";
import { computed } from "@vue/reactivity";
import { logger } from "../../utils/Logger";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { scheduleService } from "../../services/ScheduleService.js";
import ScheduleCard from "../../components/HomePage/ScheduleCard.vue";
import ScheduleForm from "../../components/AdminComponents/ScheduleForm.vue";

export default {
  setup() {
    onMounted(() => {
      getSchedules();
    });
    onBeforeRouteLeave(() => (AppState.activeEvent = null));
    async function getSchedules() {
      try {
        await scheduleService.getSchedules();
      } catch (error) {
        Pop.error(error);
      }
    }
    const form = ref(false);
    return {
      schedules: computed(() => AppState.schedules),
      activeSchedule:computed(() => AppState.activeSchedule),
      events: computed(() => AppState.events),
      form,
      activeEvent: computed(() => AppState.activeEvent),
      async editSchedule(schedule) {
        try {
          AppState.activeSchedule = schedule;
        } catch (error) {
          Pop.error(error);
        }
      },

      async deleteSchedule(s) {
        try {
          if (await Pop.confirm()) {
            await scheduleService.deleteSchedule(s.id);
          }
        } catch (error) {
          Pop.error(error, "[deleteSchedule]");
        }
      },
    };
  },
  components: { EventForm, EventCard, ScheduleCard, ScheduleForm },
};
</script>

<style lang="scss" scoped>
.scrollable-y {
  height: 90vh;
}
</style>
