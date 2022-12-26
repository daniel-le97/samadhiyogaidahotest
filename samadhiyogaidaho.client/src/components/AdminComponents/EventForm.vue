<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="event ? handleEdit() : handleSubmit()" class="">
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  id="title"
                  placeholder="Event Title"
                  required
                  v-model="editable.title"
                />
                <label for="title">Title</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="location"
                  id="location"
                  placeholder="Location"
                  required
                  v-model="editable.location.place"
                />
                <label for="location">Location</label>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div class="col-md-8 d-flex ">
              <div class="form-floating mb-3 me-3">
                <input
                  type="datetime-local"
                  class="form-control"
                  name="date"
                  id="date"
                  placeholder="Date"
                  required
                  v-model="editable.startDate"
                />
                <label for="date">StartDate</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="datetime-local"
                  class="form-control"
                  name="time"
                  id="time"
                  placeholder="Time"
                  required
                  v-model="editable.endDate"
                />
                <label for="time">endDate</label>
              </div>
            </div>
            <div class="col-md-4">
                  <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  name="cost"
                  id="cost"
                  placeholder=""
                  required
                  v-model="editable.cost"
                />
                <label for="cost">Cost</label>
              </div>
            
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="url"
                  class="form-control"
                  name="coverImage"
                  id="coverImage"
                  placeholder="Event Cover Image"
                  v-model="editable.img"
                />
                <label for="coverImage"
                  >Cover Image (Will use a Default Image if none
                  provided)</label
                >
              </div>
            </div>
            <div class="col-md-6">
            <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="location"
                  id="location"
                  placeholder="Location"
                  required
                  v-model="editable.location.address"
                />
                <label for="location">Address</label>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              class="form-control"
              name="description"
              id="description"
              rows="6"
              required
              v-model="editable.description"
            ></textarea>
          </div>
          <button class="btn bg-success fs-2 font-2">Submit Event</button>
        </form>
      </div>
    </div>

    <div v-if="event">
      <EventCard :event="new Event(editable)" />
    </div>
  </div>
</template>

<script>
import { watchOnce } from "@vueuse/shared";
import { computed, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { Event } from "../../models/Event";
import { eventsService } from "../../services/EventsService";
import Pop from "../../utils/Pop";
import EventCard from "../EventsPage/EventCard.vue";

export default {
  setup() {
    const editable = ref({ location: {} });
    // let activeEvent;
    watchEffect(() => {
      if (AppState.activeEvent) {
        editable.value = { ...AppState.activeEvent };
        // changeEvent(editable.value)
      }
    });
    // async function changeEvent(value) {
    //   value.startDate = new Date(value.startDate)
    //   activeEvent = new Event(value)
    // }
    return {
      editable,
      Event,
      activeEvent: computed(() => new Event(editable.value)),
      event: computed(() => AppState.activeEvent),

      account: computed(() => AppState.account),
      async handleSubmit() {
        try {
          await eventsService.createEvent(editable.value);
          Pop.success("Event Approved");
          editable.value = {};
        } catch (error) {
          Pop.error("[creatorEvent]");
        }
      },
      async handleEdit() {
        try {
          await eventsService.updateEvent(editable.value);
          Pop.success("Event Approved");
          editable.value = {};
        } catch (error) {
          Pop.error("[creatorEvent]");
        }
      },
    };
  },
  components: { EventCard },
};
</script>

<style scoped>
.form-control,
.form-control:required {
  border: 0;
  background-color: rgba(253, 163, 107, 0.2);
  box-shadow: rgba(255, 113, 25, 0.2) 0px 13px 27px -5px,
    rgba(249, 130, 18, 0.3) 0px 8px 16px -8px;
}

.form-control:valid {
  border: 0;
  background-color: rgba(71, 255, 25, 0.2);
  transition: all 0.5s ease;
  box-shadow: rgba(71, 255, 25, 0.2) 0px 13px 27px -5px,
    rgba(249, 130, 18, 0.3) 0px 8px 16px -8px;
}
</style>
