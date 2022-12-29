<template>
  <div class="row my-5 gy-3">
    <div class="col-md-6 d-flex align-items-center justify-content-center">
      <div class="card elevation-6">
        <div class="image-box">
          <img :src="event.img" alt="" class="img-fluid rounded elevation-6" />
        </div>
      </div>
    </div>
    <div class="col-md-6 text-start">
      <p
        class="underline fs-1 font-1 border-2 border-bottom text-center text-pink darken-20"
      >
        {{ event.title }}
      </p>
      <div class="d-flex">
        <div class="me-3">
          <p class="text-start">
            {{ getDate(event.startDate) }} - {{ getDateTime(event.endDate) }}
          </p>

          <span class="font-2 mb-0 d-flex align-items-center">
            {{ event.location }}</span
          >
          <span class="font-2">
            <a
              :href="event.address"
              target="_blank"
              class="  "
              title="GoogleMaps Link"
            >
              <i class="mdi mdi-map-marker fs-3 text-pink darken-20">
                Map Link</i
              ></a
            >
          </span>
        </div>

        <div class="fs-2 font-2 ms-4">
          ${{ event.cost }} per
          <img
            src="https://cdn-icons-png.flaticon.com/512/84/84145.png"
            alt="Person Icon"
            title="Person Icon"
            class="img-fluid"
            width="70"
            height="60"
          />
        </div>
      </div>
      <p class="text-start">{{ event.description }}</p>
    </div>
  </div>
  <hr class="mt-4" />
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { Event } from "../../models/Event.js";
import { getDate, getDateTime } from "../../utils/Functions";

export default {
  props: {
    event: { type: Event, required: true },
  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      getDate,
      getDateTime,
      editable,
    };
  },
};
</script>

<style lang="scss" scoped></style>
