<template>
  <div>
 
    <div
      class="hero-image d-flex flex-column justify-content-center align-items-center"
    >
       <div class="tsparticles">
      <ParticleComponent />
    </div>
      <h1
        v-motion-slide-top
              :delay="200"
        class="display-1 text-light text-shadow font-1 text-wrap page-title text-center"
      >
        EVENTS
      </h1>
      <p
        v-motion-slide-top
              :delay="400" class="font-2 text-light text-shadow display-6 text-center">
        Enjoy an enriching and memorable experience
      </p>
      <HeroImageDivider/>
    </div>

    
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <p 
                        v-motion-slide-visible-once-bottom
          :delay="300"
          class="fs-4 ">
            We have been working hard behind the scenes getting several classes
            and events set up for 2023! <br />
            Space will be extremely limited at each event, So please DM us today
            or call the Grove Fitness Club & Spa to sign up.
            <br />

        
          </p>
          <p
                        v-motion-slide-visible-once-bottom
          :delay="300"
          class="fs-4 text-pink darken-20">    Our pop up schedule for 2023 will be posted soon.</p>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div
                    v-motion-slide-visible-once-bottom
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
import { logger } from "../utils/Logger.js";

import { eventsService } from "../services/EventsService.js";
import EventCard from "../components/EventsPage/EventCard.vue";
import ParticleComponent from "../components/MiscComponents/ParticleComponent.vue";
import HeroImageDivider from "../components/MiscComponents/HeroImageDivider.vue";

export default {
  setup() {

    onMounted(() => {
      getEvents();
    });

    async function getEvents() {
      try {
        await eventsService.getEvents();
      } catch (error) {
        logger.error(error, "[getEvents]");
      }
    }
    return {
  
      events: computed(() => AppState.events),
    };
  },
  components: { EventForm, EventCard, ParticleComponent, HeroImageDivider },
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1590049740844-b670996635ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
