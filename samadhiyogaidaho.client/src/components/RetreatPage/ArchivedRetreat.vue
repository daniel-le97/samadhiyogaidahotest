<template>
  <div class="card border-0 bg-transparent">
    <div class="mb-4 text-center">
      <p class="display-4 font-1"></p>

      <h1 class="fs-1 font-1 underline mb-0">
        {{ retreat.title }} -
        {{
          new Date(retreat.startDate).toLocaleString("default", {
            month: "short",
          })
        }}, {{ new Date(retreat.startDate).getFullYear() }}
      </h1>
      <p class="fs-3 text-pink darken-20">{{ retreat.location.address }}</p>
    </div>

    <div class="row my-3">
      <div
        @click="setActiveImage(image)"
        data-bs-toggle="modal"
        data-bs-target="#activeImage"
        class="col-4 col-md-3 border-0 bg-transparent my-3 rounded-4"
        v-for="image in retreat.featuredImgs"
      >
        <img
          v-if="image"
          :src="image"
          alt=""
          class="img-fluid hover-image rounded selectable elevation-6"
        />

        <img
          v-else
          src=""
          alt=""
          class="img-fluid hover-image rounded-4 selectable skeleton-loader"
        />
      </div>
    </div>

    <hr />
  </div>
</template>

<script>
import { AppState } from "../../AppState.js";
import { Retreat } from "../../models/Retreat.js";

export default {
  props: {
    retreat: { type: Retreat, required: true },
  },
  setup(props) {
    return {
      setActiveImage(image) {
        AppState.activeImage = image;
     
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
