<template>
  <div class="container p-5">
    <div class="row justify-content-center">
      <div class="col-md-8 mt-2 text-center">
        <h1
      v-motion-slide-visible-once-bottom
          :delay="300"
          class="display-2 font-1 text-center  underline"
        >
          Testimonials
        </h1>
        <h2
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="display-6 courgette text-lightPink text-center darken-20 font-2 underline"
        >
          Kind words from clients
        </h2>
      </div>
    </div>
  </div>

  <div class="container ">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <TestimonialSwiper />
      </div>
     <div class="d-flex justify-content-end">
      
      <a 
         v-motion-slide-visible-once-bottom
          :delay="300"
      target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSeIJYitUiRWOANo04GwFIfYINEu5NUUI6oYXUtmQzu0jfYvJw/viewform">
<button class="btn btn-dark font-2 fs-3"> Leave a review</button>

      </a>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialSwiper from "./TestimonialSwiper.vue";

export default {
  setup() {
    return {};
  },
  components: { TestimonialSwiper },
};
</script>

<style lang="scss" scoped></style>
