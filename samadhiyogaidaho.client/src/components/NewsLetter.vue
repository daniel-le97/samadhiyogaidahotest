<template>
  <div
    v-motion-pop-visible-once
    class="container mt-5 image d-flex align-items-center rounded flex-column justify-content-center"
  >
    <form @submit.prevent="handleSubmit()">
      <div class="container mailing-list my-2">
        <div class="row">
          <div class="col-md-6">
            <div
              class="d-flex rounded-pill bg-white align-items-center elevation-5"
            >
              <input
                type="num"
                min="10"
                pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$"
                v-model="editable.phone"
                class="form-control rounded-pill p-3 border-0 bg-transparent"
                placeholder="(optional) Phone Number"
              />
            </div>
          </div>
          <div class="col-md-12 my-4">
            <div
              class="d-flex rounded-pill p-1 bg-white align-items-center elevation-5"
            >
              <input
                type="email"
                name=""
                id=""
                v-model="editable.email"
                class="form-control rounded-pill p-3 mx-2 border-0 bg-white"
                placeholder="Enter email address"
              />
              <div class="">
                <button
                  class="btn btn-dark fw-bold elevation-6 rounded-pill py-4 px-5"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { newsLetterService } from "../services/NewsLetterService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({emailType:'subscribe'});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
      async handleSubmit() {
        try {
          await newsLetterService.addNewsLetterSubscription(editable.value);
          Pop.success("Thanks for Subscribing!");
        } catch (error) {
          Pop.error(error, "[addingNewsLetterSubscription]");
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
