<template>
  <div>
    <section id="hero-section">
       <div class="container-fluid">
          <div class="row">
            <div class="col-md-12 p-0">
              <div
                class="hero-image d-flex flex-column align-items-center justify-content-center"
              >
                <div class="tsparticles">
                  <ParticleComponent />
                </div>
                <div class="text-center container">
                  <h1
                    v-motion-slide-top
                    :delay="200"
                    id="shadow1"
                    class="font-1 text-shadow page-title text-light"
                  >
                    Frequently Asked Questions
                  </h1>
                  <p
                    v-motion-slide-top
                    :delay="400"
                    class="font-2 text-light text-shadow display-6"
                  >
                    How can we help you?
                  </p>
                </div>
                <HeroImageDivider />
              </div>
            </div>
          </div>
        </div>
    </section>

    <section id="accordion-faq" class="container my-5">
      <div class="row my-5 justify-content-center">
        <div
          class="col-md-8 d-flex justify-content-center flex-column align-content-center align-items-center"
        >
          <blockquote
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-1 quote text-center"
          >
            On an inhale, think of the things that are no longer serving you,
            whatever that may be. Maybe it’s a thought Maybe it’s a feeling
            Maybe it’s a person Or an experience But taking it, And on an
            exhale, choosing consciously to let it go.
          </blockquote>
          <cite v-motion-slide-visible-once-bottom :delay="300"
            >- SamadhiYogaIdaho</cite
          >
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-6">
          <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="fs-2 text-center"
          >
            Frequently Asked Questions
          </p>
        </div>
        <div class="col-md-6">
          <p v-motion-slide-visible-once-bottom :delay="300" class="fs-5 text-center ">
            Got a question? We're here to answer! if you don't see your question
            here, drop us a line on our
            <a href="/contact" class="text-pink darken-20">Connect Page.</a>
          </p>
        </div>
        <div class="col-md-12 text-center">
          <img
            v-motion-slide-visible-once-bottom
            :delay="300"
            src="../assets/svg/FAQ.svg"
            alt=""
            class="w-50"
          />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="accordion" id="faqAccordion">
            <div
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="accordion-item border-0"
              v-for="(faq, index) in QA"
            >
              <h2
                class="accordion-header border-0"
                :id="`heading${index.toString()}`"
              >
                <button
                  class="accordion-button text-dark font-2 fs-3 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#Collapse${index.toString()}`"
                  :aria-expanded="index == 0 ? true : false"
                  :aria-controls="`Collapse${index.toString()}`"
                >
                  <i class="mdi mdi-help-circle me-3"></i> {{ faq.q }}
                </button>
              </h2>
              <div
                :class="index == 0 ? '' : ''"
                :id="`Collapse${index.toString()}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`heading${index.toString()}`"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  <p class="fs-5">
                    {{ faq.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <p class="fs-5">
            Learn more about me and the yoga I love and teach by visiting my
            blog!
          </p>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import { AppState } from "../AppState.js";
import ParticleComponent from "../components/MiscComponents/ParticleComponent.vue";
import { computed, onMounted } from "vue";
import HeroImageDivider from "../components/MiscComponents/HeroImageDivider.vue";
import { faqsService } from "../services/FAQsService.js";
import { logger } from "../utils/Logger.js";
export default {
  setup() {
    onMounted(() => {
      getFAQs();
    });
    async function getFAQs() {
      try {
        await faqsService.getFAQs();
      } catch (error) {
        logger.error(error, "GetFAQS");
      }
    }
    return {
      QA: computed(() => AppState.FAQS),
    };
  },
  components: { ParticleComponent, HeroImageDivider },
};
</script>

<style lang="scss" scoped>

.page-title{
  font-size: 4.5rem;
}
.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
     @media only screen and (max-width: 768px){
 background-attachment: scroll;
 
  }
}

@media only screen and (max-width: 768px) {
  .quote {
    font-size: 16px;
  }
}
</style>
