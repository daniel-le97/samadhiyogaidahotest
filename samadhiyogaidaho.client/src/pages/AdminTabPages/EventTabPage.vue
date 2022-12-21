<template>
  <div class="container-fluid" v-if="!activeEvent">
    <div class="row flex-wrap">
      <div class="col-12" v-for="event in events">
        <div class="elevation-1 eventCard">
          <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-primary" @click="editEvent(event)">
              edit event
            </button>
            <button class="btn btn-primary">delete event</button>
          </div>
          <EventCard :event="event" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container-fluid">
    <div class="row">
      <div class="col-12">
        <EventForm />
        <!-- <div class="elevation-1">
          <EventCard :event="activeEvent" />
        </div> -->
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

export default {
  setup() {
    onMounted(() => {
      getEvents();
    });
    onBeforeRouteLeave(() => AppState.activeEvent = null)
    async function getEvents() {
      try {
        await eventsService.getEvents();
      } catch (error) {
        Pop.error(error);
      }
    }
    const form = ref(false);
    return {
      events: computed(() => AppState.events),
      form,
      activeEvent: computed(() => AppState.activeEvent),
      async editEvent(event) {
        try {
          event.startDate = new Date(event.startDate).toISOString().slice(0,-1)
          event.endDate = new Date(event.endDate).toISOString().slice(0,-1)
          AppState.activeEvent = event;
          logger.log(event)
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
  components: { EventForm, EventCard },
};
</script>

<style lang="scss" scoped>
// .eventCard {
//   height: 25vh;
//   overflow-y: auto;
// }
</style>
