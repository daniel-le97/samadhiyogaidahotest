<template>
  <div>
    <section id="Hero-Section">
       <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 p-0">
              <div class="position-relative px-0">
                <div class="tsparticles">
                  <ParticleComponent />
                </div>
                <div
                  class="hero-image container-fluid d-flex flex-column justify-content-center align-items-center"
                >
                  <div style="margin-top: 80px" class="text-shadow container">
                    <h1
                      v-motion-slide-top
                      :delay="200"
                      class="display-2 text-light font-1 text-center"
                    >
                      SAMADHI YOGA IDAHO
                    </h1>
                    <h5
                      v-motion-slide-top
                      :delay="400"
                      class="fs-2 font-2 text-light text-uppercase text-center"
                    >
                      <br />
                      Become aware of your capacity to create <br />
                      to be authentic in every day life <br />
                      to transform & to love
                    </h5>
                  </div>
                </div>
                <GentleWave />
              </div>
            </div>
          </div>
        </div>
        
    </section>

    <section id="Call-To-Action-Section" class="my-5">
      <CallToAction />
    </section>

    <section id="About-Katie-Section" class="bg-pink about-section">
      <AboutSection />
    </section>

    <section>
      <ScheduleSection />
    </section>
    <section id="Retreat-Section">
      <RetreatAndEvents />
    </section>

    <section id="Testimonials-Section " class="mb-5 bg-pink py-5">
      <TestimonialSection />
    </section>

    <section>
      <div class="container">
        <InstagramFeed />
      </div>
    </section>
  </div>
  <!-- <LoadingComponent /> -->
</template>

<script>
import ParticleComponent from "../components/MiscComponents/ParticleComponent.vue";
import GentleWave from "../components/MiscComponents/GentleWave.vue";
import SwiperComponent2 from "../components/HomePage/TestimonialSwiper.vue";
import CallToAction from "../components/HomePage/CallToAction.vue";
import { defineAsyncComponent } from "vue";
import ServicesSection from "../components/HomePage/ServicesSection.vue";
import Pop from "../utils/Pop.js";
import { onMounted } from "vue";
import InstagramFeed from "../components/HomePage/InstagramFeed.vue";
import { scheduleService } from "../services/ScheduleService.js";
import { computed } from "@vue/reactivity";
import { pocketBaseService } from "../services/PocketBaseService.js";
import LoadingComponent from "../components/LoadingComponent.vue";
import { AppState } from "../AppState.js";
export default {
  setup() {
    onMounted(() => {
      getYogaSchedules();
    });
    let rest = true;
    async function getYogaSchedules() {
      try {
        await scheduleService.getSchedules();
      } catch (error) {
        Pop.error(error, "[getYogaSchedules]");
      }
    }

    return {
      rest,
      schedules: computed(() => AppState.schedules),
    };
  },
  components: {
    SwiperComponent2,
    ParticleComponent,
    GentleWave,
    CallToAction,
    TestimonialSection: defineAsyncComponent(() =>
      import("../components/HomePage/TestimonialSection.vue")
    ),
    YouTubeSection: defineAsyncComponent(() =>
      import("../components/ServicesPage/YouTubeSection.vue")
    ),
    RetreatAndEvents: defineAsyncComponent(() =>
      import("../components/HomePage/RetreatAndEvents.vue")
    ),
    ScheduleSection: defineAsyncComponent(() =>
      import("../components/HomePage/ScheduleSection.vue")
    ),
    ServicesSection,
    AboutSection: defineAsyncComponent(() =>
      import("../components/HomePage/AboutSection.vue")
    ),
    InstagramFeed,
    LoadingComponent,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.about-section {
  margin-top: 10rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
}
.hero-image {

  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
    height: auto;
  background-position: center;
  }
}

//when screen is 768px OR LESS
@media only screen and (max-width: 768px) {
  .logo-image {
    width: 75%;
  }

  .team-section-title {
    margin-top: 140px;
  }
}


</style>
