<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 my-2 ">
           <div class="d-flex justify-content-center ">
 <button class="btn btn-outline-success font-2 fs-3" @click="createEvent()">
              Create Event
            </button>
           </div>
      </div>
    </div>
    <div class="row scrollable-y"  v-if="!activeEvent">
      <div class="col-12" v-for="event in events">
      
         <div class="position-relative">

           <EventCard :event="event" />
               <div class="d-flex justify-content-center gap-2  position-absolute top-0 start-0">
            <button class="btn btn-outline-warning font-2 fs-3" @click="editEvent(event)">
              edit event
            </button>
            <button class="btn btn-outline-danger font-2 fs-3">delete event</button>
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
      async createEvent(){
        try {
            await eventsService.createEvent()
          } catch (error) {
            Pop.error(error,'[create Event]')
          }
      }
    };
  },
  components: { EventForm, EventCard },
};
</script>

<style lang="scss" scoped>
.scrollable-y{
  height: 90vh;
}
</style>
