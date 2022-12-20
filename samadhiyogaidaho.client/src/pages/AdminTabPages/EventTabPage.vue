<template>
  <div class="container-fluid">
    <div class="row flex-wrap">
      <div class="col-12" v-for="event in events">
        <div class="elevation-1 eventCard">
          <EventCard :event="event" />
        </div>
      </div>
    </div>
    <button @click="form = !form" class="btn btn-primary">add an event</button>
    <button @click="form = !form" class="btn btn-primary">edit an event</button>

    <EventForm v-if="form" />
  </div>
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

export default {
  setup() {
    onMounted(() => {
      getEvents();
    });
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
