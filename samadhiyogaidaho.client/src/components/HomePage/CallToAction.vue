<template>
  <div class="container bg-white mt-4">
    <div class="row justify-content-center">
      <div class="col-md-12 text-center">
        <div></div>

        <h1
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="display-1 font-1 underline text-center text-dark mt-md-5"
        >
          Welcome Beautiful Soul
        </h1>
        <br />

        <h2
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="display-6 font-2 underline text-lightPink darken-20 mb-4"
        >
          Our Core Belief
        </h2>
      </div>
      <div class="col-md-8 text-center">
        <p v-motion-slide-visible-once-bottom :delay="300" class="fs-4 px-md-5">
          Is that we all want to be at peace with who we truly are, and that at
          every moment is an opportunity where we can be authentic with
          ourselves in everyday life.
        </p>

        <p v-motion-slide-visible-once-bottom :delay="300" class="fs-4 px-md-5">
          <b> SamadhiYogaIdaho </b> is a holistic approach to wellness using
          pranayama, asana, journaling, and meditation practices to increase our
          knowledge of self, life, mobility, and to help every person recognize
          their worthiness, beauty, and uniqueness.
        </p>
        <p class="fs-4" v-motion-slide-visible-once-bottom :delay="300">
          Escape with us and learn how to see yourself without judgment
        </p>
        <p>
          <a
            v-motion-slide-visible-once-bottom
            :delay="300"
            href="#newsletter"
            class="btn bg-warning selectable fs-3 px-4"
          >
            Begin Your Journey</a
          >
        </p>
      </div>
    </div>
    <hr class="my-5" />
    <!-- <div class="row g-3">
      <div class="col-md-4 mb-3 mb-md-0">
        <div
          class="card border-0 elevation-7 bg-pink p-2"
     v-motion-slide-visible-once-bottom
          :delay="300"
        >
          <div class="card-title font-1 fs-3 text-center">Vinyasa</div>
          <div class="card-body text-center font-2 fs-5">
            Vinyasa (Flow) is a flowing of postures executed in succession,
            often timed with the breath to attain balance in the mind and body.
            Classes build heat, endurance, flexibility, strength and conscious
            breathing.
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3 mb-md-0">
        <div
          class="card border-0 elevation-7 bg-pink p-2"
    v-motion-slide-visible-once-bottom
          :delay="300"
        >
          <div class="card-title font-1 fs-3 text-center">
            Pranayama & Meditation
          </div>
          <div class="card-body text-center font-2 fs-5">
            Pranayama (Breath control) an ancient tradition, is the conscious
            awareness of breath using specific rhythms & techniques to bring us
            to the present moment increasing our self-awareness.
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="card border-0 elevation-7 bg-pink p-2"
    
        >
          <div class="card-title font-1 fs-3 text-center">Journaling</div>
          <div class="card-body text-center font-2 fs-5">
            Keeping a yoga journal leads to more mindful yoga practice. You
            notice the sensations of each of your movements, drawing your mind
            into the present moment, so you can really appreciate the process of
            your yoga practice.
          </div>
        </div>
      </div>
    </div> -->

    <div class="row">
      <CTACard />
    </div>
  </div>
</template>

<script>
import CTACard from "../CTACard.vue";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(()=>{
     
         const script = document.createElement('script')
    script.innerHTML = `src="https://cdn.wetravel.com/widgets/embed_packages.js" id="wetravel_package_listing" data-env="https://www.wetravel.com" data-version="v0.3" data-uid="564570" data-uuid="61962464" data-color="33ae3f" data-text="Book Now" data-showreviews="true"`
    document.head.appendChild(script)
    })
    return {};
  },
  components: { CTACard },
};
</script>

<style lang="scss" scoped></style>
