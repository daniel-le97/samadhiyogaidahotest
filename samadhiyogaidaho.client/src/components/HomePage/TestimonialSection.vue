<template>
  <div class="container p-5">
      <div class="row">
        <div class="col-md-8  mt-2">
          <h1
            v-motion-slide-visible-left
            class="display-1 font-1 text-start  underline"
          >
            Testimonials
          </h1>
           <h2
           v-motion-slide-visible-left
            class="display-6 courgette text-lightPink darken-20 font-2 underline"
          >
         Kind words from clients
          </h2>
        </div>
      </div>
    </div>

    <div class="container mt-5 mt-md-0">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <TestimonialSwiper />
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
    components: { TestimonialSwiper }
}
</script>


<style lang="scss" scoped>

</style>