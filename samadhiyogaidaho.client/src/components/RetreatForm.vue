<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="handleSubmit()">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="title"
              id="title"
              placeholder="title"
              v-model="editable.title"
            />
            <label for="title">title</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="location"
              id="location"
              placeholder="location"
              v-model="editable.location"
            />
            <label for="location">location</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="datetime-local"
              class="form-control"
              name="date"
              id="date"
              placeholder="date"
              v-model="editable.date"
            />
            <label for="date">date</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              name="price"
              id="price"
              placeholder="price"
              v-model="editable.cost.price"
            />
            <label for="price">cost/price</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="costText"
              id="costText"
              placeholder="costText"
              v-model="editable.cost.text"
            />
            <label for="price">cost/price</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              name="coverImg"
              id="coverImg"
              placeholder="coverImage"
              v-model-="editable.coverImg"
            />
            <label for="coverImg">coverImg</label>
          </div>
          <div class="mb-3">
            <label for="schedule" class="form-label">Schedule</label>
            <textarea
              class="form-control"
              name="schedule"
              id="schedule"
              rows="3"
              v-model="editable.schedule"
            ></textarea>
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
          <div class="mb-3">
            <label for="activities" class="form-label">activities</label>
            <textarea
              class="form-control"
              name="activities"
              id="activities"
              rows="3"
              v-model="editable.activities"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { retreatsService } from "../services/RetreatsService";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      
  async handleSubmit(){
    try {
        await retreatsService.createRetreat(editable.value)
      } catch (error) {
        Pop.error(error,'[createRetreat]')
      }
  }
  }
}
};
</script>

<style lang="scss" scoped></style>
