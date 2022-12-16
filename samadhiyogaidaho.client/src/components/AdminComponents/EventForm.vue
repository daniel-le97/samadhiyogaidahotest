<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="handleSubmit()" class="">
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  id="title"
                  placeholder="Event Title"
                  v-model="editable.title"
                />
                <label for="title">title</label>
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
                  v-model="editable.location"
                />
                <label for="location">location</label>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div class="form-floating mb-3 me-3">
              <input
                type="datetime-local"
                class="form-control"
                name="date"
                id="date"
                placeholder="Date"
                v-model="editable.date"
              />
              <label for="date">date</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="datetime-local"
                class="form-control"
                name="time"
                id="time"
                placeholder="Time"
                v-model="editable.time"
              />
              <label for="time">time</label>
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
                  v-model="editable.coverImg"
                />
                <label for="coverImage">cover Image</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  name="cost"
                  id="cost"
                  placeholder=""
                  v-model="editable.cost"
                />
                <label for="cost">cost</label>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              class="form-control"
              name="description"
              id="description"
              rows="3"
              v-model="editable.description"
            ></textarea>
          </div>
          <button class="btn bg-success fs-2 font-2">Submit Event</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { eventsService } from "../../services/EventsService";
import Pop from "../../utils/Pop";

export default {
  setup() {
    const editable = ref({});

    return {
      editable,

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
    };
  },
};
</script>

<style scoped></style>
