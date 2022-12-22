<template>
  <div>
    <section id="Hero-Section">
      <div class="position-relative px-0">
        <div class="tsparticles">
          <ParticleComponent />
        </div>
        <div
          class="hero-image d-flex flex-column justify-content-center align-items-center"
        >
          <div style="margin-top: 80px" class="text-shadow container">
       
            <h5
              v-motion-slide-top
              :delay="600"
              class="fs-2 font-2 text-light text-uppercase text-center"
            >
              <br />
              Become aware of your capacity to create, <br />
              to be authentic in every day life, <br />
              to transform & to love
            </h5>

            <h1
              v-motion
              :initial="{
                y: -100,
                opacity: 0,
              }"
              :enter="{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 250,
                  damping: 25,
                  mass: 2.5,
                },
              }"
              :delay="1000"
              class="display-2 text-light font-1 text-center"
            >
              ESCAPE WITH SAMADHI YOGA IDAHO
            </h1>
          </div>

        </div>
      </div>
      <GentleWave />
    </section>

    <section id="Call-To-Action-Section">
      <CallToAction />
    </section>

    <!-- <section id="YinYoga-Section" class="bg-pink my-5">
      <div class="container p-5 mt-5">
        <div class="row">
          <div class="col-md-12">
            <h1
              v-motion-slide-visible-once-left
              class="display-1 font-1 underline text-start"
            >
              What Is Yin Yoga?
            </h1>
          </div>

          <div class="row mt-3">
            <div class="col-md-4">
              <div class="card bg-dark border-0 elevation-6 p-2">
                <p class="fs-4 text-warning">
                  Yin yoga is a quiet contemplative practice that involves
                  working with deeper, passive, and longer held poses. It
                  targets the deepest tissues of the body, our connective
                  tissues,ligaments,joints,bones, the deep fascia networks of
                  the body and the meridians. This is contract to a Yang Yoga
                  practice such as Vinyasa Yoga which targets the muscles
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-dark border-0 elevation-6 p-2">
                <p class="fs-4 text-warning">
                  A Yin yoga class usually consists of a series of long-held,
                  passive floor poses that mainly work the lower part of the
                  body - the hips, pelvis, inner thighs, and the lower spine
                  which are especially rich in connective tissues. The poses are
                  held for up to five minutes sometimes longer. Although almost
                  entirely passive some Yin asanas contain Yang elements, During
                  the asanas the muscles are relaxed to avoid muscle spasm which
                  could result from engaging muscles for long periods.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-dark border-0 elevation-6 p-2">
                <ul>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      Increases circulation & improves flexibility
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      Calms and balances the mind & body
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">Reduces stress & anxiety</p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">Releases fascia</p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      Encourages deeper relaxation
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">Improves Joint mobility</p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      Balance to the organs through meridian stimulation
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      improved pranayama(breath work & life energy)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    
    <section>
      <ScheduleSection />
    </section>
    <section id="Retreat-Section" class="bg-pink">
         <RetreatAndEvents />
       </section>

    <section id="About-Katie-Section" class="bg-pink">
   <AboutSection/>
    </section>

    <section id="Testimonials-Section " class="mb-5">
      <TestimonialSection />
    </section>

   
    <section class="bg-pink">
      <InstagramFeed />
    </section>
  </div>
</template>

<script>
import ParticleComponent from "../components/PluginComponents/ParticleComponent.vue";
import GentleWave from "../components/PluginComponents/GentleWave.vue";
import SwiperComponent2 from "../components/HomePage/TestimonialSwiper.vue";
import CallToAction from "../components/HomePage/CallToAction.vue";
import TestimonialSection from "../components/HomePage/TestimonialSection.vue";
import YouTubeSection from "../components/ServicesPage/YouTubeSection.vue";
import RetreatAndEvents from "../components/HomePage/RetreatAndEvents.vue";
import { defineAsyncComponent } from "vue";
import CommentBox from "../components/MiscComponents/CommentBox.vue";
import ScheduleSection from "../components/HomePage/ScheduleSection.vue";
import ServicesSection from "../components/HomePage/ServicesSection.vue";
import Pop from "../utils/Pop.js";
import { youtubeService } from "../services/YoutubeService.js";
import { onMounted } from "vue";
import InstagramFeed from "../components/HomePage/InstagramFeed.vue";
import { firebaseService } from "../services/FirebaseService.js";
import AboutSection from "../components/HomePage/AboutSection.vue";
export default {
  setup() {
    onMounted(() => {
      // getYoutubeVideos()
      // getPastRetreatImages()
    });

    async function getPastRetreatImages() {
      try {
        // const {firebaseService} = async() => await import(`../services/FirebaseService`)
        await firebaseService.getPastRetreatsImages();
      } catch (error) {
        Pop.error(error, "[]");
      }
    }
    async function getYoutubeVideos() {
      try {
        await youtubeService.getPlayList();
      } catch (error) {
        Pop.error(error, "[]");
      }
    }
    return {};
  },
   components: {
    SwiperComponent2,
    ParticleComponent,
    GentleWave,
    CallToAction,
    TestimonialSection,
    YouTubeSection,
    RetreatAndEvents,
    CommentBox,
    ScheduleSection,
    ServicesSection,
    InstagramFeed,
    AboutSection
},
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";



.hero-image {
  width: 100%;
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-position: end;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
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
