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
            />
            <label for="price">cost/price</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control" name="coverImg" id="coverImg" placeholder="coverImage">
            <label for="coverImg">coverImg</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control" name="schedule" id="schedule" placeholder="schedule">
            <label for="schedule">schedule</label>
          </div>
        
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" name="description" id="description" rows="3"></textarea>
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
      handleSubmit(){
        try {
            await 
          } catch (error) {
            Pop.error(error,'[createRetreat]')
          }
      }
    };
  },
};
</script>

<style lang="scss" scoped></style>
