<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form
          @submit.prevent="handleSubmit()"
          class="my-5 p-4 elevation-6 rounded-1"
        >
          <section v-if="formPaginate == 0" v-motion-pop>
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
                name="locationAddress"
                id="locationAddress"
                placeholder="locationAddress"
                v-model="editable.location.address"
              />
              <label for="location">location</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="url"
                class="form-control"
                name="locationImg"
                id="locationImg"
                placeholder="locationImg"
                v-model="editable.location.img"
              />
              <label for="location">location Image</label>
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
            <div class="mb-3">
              <label for="locationDescription" class="form-label"
                >Location Description</label
              >
              <textarea
                class="form-control"
                name="locationDescription"
                id="locationDescription"
                rows="3"
                v-model="editable.location.description"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">
                Retreat Description</label
              >
              <textarea
                class="form-control"
                name="description"
                id="description"
                rows="3"
                v-model="editable.description"
              ></textarea>
            </div>
            <div class="form-floating mb-3">
              <input
                type="url"
                class="form-control"
                name="coverImg"
                id="coverImg"
                placeholder="coverImage"
                v-model="editable.coverImg"
              />
              <label for="coverImg">Retreat Cover Image</label>
            </div>
            <div class="d-flex justify-content-end">
              <button @click="multiStepForm(1)" type="button" class="btn btn-dark fs-3">
                Next
              </button>
            </div>
          </section>

          <section v-if="formPaginate == 1" class="second-form" v-motion-pop :delay="0">
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                name="cost"
                id="cost"
                placeholder="cost"
                v-model="editable.cost.price"
              />
              <label for="cost">Cost</label>
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
              <label for="price">Additional Text For Retreat Cost</label>
            </div>

            <div class="mb-3">
              <label for="scheduleDescription" class="form-label"
                >Schedule Description</label
              >
              <textarea
                class="form-control"
                name="scheduleDescription"
                id="scheduleDescription"
                rows="3"
                v-model="editable.schedule.description"
              ></textarea>
            </div>

            <div class="mb-3">
              <label for="formFile" class="form-label"
                >Schedule File Upload</label
              >
              <input
                class="form-control"
                type="file"
                id="formFile"
                ref="file"
                v-on:change="onChangeFileUpload"
              />
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
            <div class="d-flex justify-content-between">
  <button @click="multiStepForm(0)" type="button" class="btn btn-dark fs-3">
    Previous
  </button>
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            
          </section>
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
import { firebaseService } from "../services/FirebaseService.js";
import { uploadsService } from "../services/UploadsService.js";

export default {
  setup() {
    const editable = ref({
      cost: {},
      location: {},
      food: {},
      schedule: {},
    });
    const file = ref(null);
    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      file,
      formPaginate:computed(()=> AppState.formPaginate),
      async handleSubmit() {
        try {
          console.log(editable.value);
          // await retreatsService.createRetreat(editable.value);
        } catch (error) {
          Pop.error(error, "[createRetreat]");
        }
      },
      async onChangeFileUpload(e) {
        try {
          // console.log(e.target.files);
          // await firebaseService.uploadFile(e);
          //  console.log(AppState.newActiveUpload);
          //  await uploadsService.addUpload
        } catch (error) {
          Pop.error(error, "[fileUpload]");
        }
      },
      multiStepForm(x) {
if (x == 1) {
  AppState.formPaginate = 1
}else 
      AppState.formPaginate = 0
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.second-form{
  transition: all 0.5s ease;
}

</style>
