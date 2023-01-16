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
        <RetreatButton />
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

    <div class="row">
      <CTACard />
    </div>
  </div>
</template>

<script>
import CTACard from "../CTACard.vue";
import { onMounted } from "vue";
import RetreatButton from "../RetreatButton.vue"
export default {
  setup() {
    onMounted(() => {

    });
    return {};
  },
  components: { CTACard },
};
</script>

<style lang="scss" scoped></style>
