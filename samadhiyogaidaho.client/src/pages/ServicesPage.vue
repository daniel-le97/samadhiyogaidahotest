<template>
  <div class="hero-image d-flex justify-content-center align-items-center flex-column">
    <h1 class="display-1 font-1 text-light text-shadow">Take A Moment For Yourself</h1>
    <h4 class="font-1 text-light text-shadow">Vinyasa, Baptiste, & Yin</h4>
  </div>
  <div class="container-fluid" style="margin-top: 100px">
    <div class="row justify-content-center">
      <div class="col-md-6 p-5 d-flex justify-content-center">
        <div
          class="card rounded-circle text-dark border-0 elevation-5 rounded-1"
        >
          <img
            class="card-img rounded-circle"
            src="https://images.unsplash.com/photo-1610344264630-e77bc4bf5983?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHx5b2dhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Title"
          />
          <div class="card-img-overlay">
            <h1 class="text-center">
              Book a Private Class for your Work Group
            </h1>
          </div>
        </div>
      </div>

      <div class="col-md-6 p-5 d-flex justify-content-center">
        <div
          class="card rounded-circle text-dark border-0 elevation-5 rounded-1"
        >
          <img
            class="card-img rounded-circle"
            src="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Title"
          />
          <div class="card-img-overlay">
            <h1 class="text-center">Workshops</h1>
          </div>
        </div>
      </div>

      <div class="col-md-6 p-5 d-flex justify-content-center">
        <div
          class="card rounded-circle text-dark border-0 elevation-5 rounded-1"
        >
          <img
            class="card-img rounded-circle"
            src="https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Title"
          />
          <div class="card-img-overlay">
            <h1 class="text-center">Inclusive Retreats</h1>
          </div>
        </div>
      </div>

      <div class="col-md-6 p-5 d-flex justify-content-center">
        <div
          class="card rounded-circle text-dark border-0 elevation-5 rounded-1"
        >
          <img
            class="card-img rounded-circle"
            src="https://images.unsplash.com/photo-1636619297905-54f124aa90b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Title"
          />
          <div class="card-img-overlay">
            <h1 class="text-center">Events</h1>
          </div>
        </div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1499810631641-541e76d678a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

.card img {
  height: 320px;
  width: 320px;
  object-fit: cover;
}

.card-img-overlay {
  opacity: 0;
  transition: all 0.25s ease;
}

.card img {
  transition: all 0.25s ease;
}

.card:hover {
  transition: all 0.25s ease;
  box-shadow: none;
  background: transparent;

  img {
    opacity: 0;
    transition: all 0.25s ease;
  }

  .card-img-overlay {
    opacity: 1;
    transition: all 0.25s ease;
  }
}
</style>
