<template>
  <div class="hero-image d-flex align-items-center justify-content-center">
    <div class="row">
      <div class="col-md-12">
        <h1 class="display-1 font-1 text-shadow text-light">Join Our Retreat</h1>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">

      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import RetreatForm from "../components/RetreatForm.vue";
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
    };
  },
  components: { RetreatForm },
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1589790272257-8c0f79c221da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
