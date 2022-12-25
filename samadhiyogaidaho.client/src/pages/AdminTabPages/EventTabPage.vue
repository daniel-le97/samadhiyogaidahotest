<template>
  <div class="container-fluid my-3">
    <div class="row my-5" v-if="!activeEvent">
      <div class="col-md-12">
 
  <button class="btn btn-outline-success font-2 fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Create Event
  </button>

<div class="collapse" id="collapseExample">
   <EventForm />
</div>
      </div>
    </div>
    <div class="row " v-if="!activeEvent">
      <div class="col-12" v-for="event in events">
        <div class="position-relative">
          <EventCard :event="event" />
          <div
            class="d-flex justify-content-center gap-2 position-absolute bottom-100 "
          >
            <button
              class="btn btn-outline-warning font-2 fs-3"
              @click="editEvent(event)"
            >
              edit event
            </button>
            <button
              class="btn btn-outline-danger font-2 fs-3"
              @click="deleteEvent(event)"
            >
              delete event
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" v-if="activeEvent">
      <div class="row">
        <div class="col-12">
          <EventForm />
       
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

export default {
  setup() {
    onMounted(() => {
      getEvents();
    });
    onBeforeRouteLeave(() => (AppState.activeEvent = null));
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
          event.startDate = new Date(event.startDate)
            .toISOString()
            .slice(0, -1);
          event.endDate = new Date(event.endDate).toISOString().slice(0, -1);
          AppState.activeEvent = event;
          logger.log(event);
        } catch (error) {
          Pop.error(error);
        }
      },
      async createEvent() {
        try {
          await eventsService.createEvent();
        } catch (error) {
          Pop.error(error, "[create Event]");
        }
      },
      async deleteEvent(event) {
        try {
          const yes = await Pop.confirm();
          if (!yes) {
            return;
          }
          await eventsService.deleteEvent(event);
          // TODO finish connecting deleteEvent()
        } catch (error) {
          Pop.error(error, "[create Event]");
        }
      },
    };
  },
  components: { EventForm, EventCard },
};
</script>

<style lang="scss" scoped>
.scrollable-y {
  height: 90vh;
}
</style>
