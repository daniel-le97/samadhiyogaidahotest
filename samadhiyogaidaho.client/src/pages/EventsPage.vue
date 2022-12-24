<template>
  <div>
    <div class="tsparticles">
      <ParticleComponent />
    </div>
    <div
      class="hero-image d-flex flex-column justify-content-center align-items-center"
    >
      <h1
        class="display-1 text-light text-shadow font-1 text-wrap page-title text-center"
      >
        Join our Events
      </h1>
      <p class="font-1 text-light text-shadow display-6">
        Enjoy an enriching and memorable experience
      </p>
    </div>

.<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-10 ">
        <p class="fs-4 text-start">
        We have been working hard behind the scenes getting several classes and
        events set up for 2023! <br />
        Space will be extremely limited at each event, So please DM us today or
        call the Grove Fitness Club & Spa to sign up.
        <br />

        Our pop up schedule for 2023 will be posted soon so you can have an idea
        and plan for events you’d like to attend next year.
      </p>

     
    </div>
  </div>
</div>

    <div class="container my-5">
    

      <div
        v-motion-slide-visible-bottom
        :delay="200"
        v-for="e in events"
        :key="e.id"
      >
        <EventCard :event="e" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import EventForm from "../components/AdminComponents/EventForm.vue";
import CommentBox from "../components/MiscComponents/CommentBox.vue";
import { logger } from "../utils/Logger.js";

import { eventsService } from "../services/EventsService.js";
import EventCard from "../components/EventsPage/EventCard.vue";
import ParticleComponent from "../components/PluginComponents/ParticleComponent.vue";

export default {
  setup() {
    const editable = ref({});
    onMounted(() => {
      getEvents();
    });
    watchEffect(() => {});
    async function getEvents() {
      try {
        await eventsService.getEvents();
      } catch (error) {
        logger.error(error, "[getEvents]");
      }
    }
    return {
      editable,
      events: computed(() => AppState.events),
    };
  },
  components: { CommentBox, EventForm, EventCard, ParticleComponent },
};
</script>

<style lang="scss" scoped>
.hero-image {
  h1 {
    font-size: 8rem;
  }
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1590049740844-b670996635ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

@media only screen and (max-width: 768px) {
  .hero-image {
    h1 {
      font-size: 4rem;
    }
  }
}
</style>
