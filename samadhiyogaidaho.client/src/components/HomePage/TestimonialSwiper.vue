<template>
  <swiper
  
  :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  :grabCursor="true"
    :pagination="true" :modules="modules" class="mySwiper fluid bg-transparent"
    v-motion-pop-visible-once
   
  >
    <swiper-slide v-for="t in testimonials" class="fluid">
      <div class="testimonial-card card bg-transparent border-0 position-relative  ">
        <div class="">
          <div
            class="justify-content-center d-flex flex-column align-items-center mt-5"
          >
            <img
              src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              class="elevation-6 img-fluid forcedImg"
            />
      
          </div>

          <div class="d-flex justify-content-center mt-2">
            <i
              class="mdi mdi-star stars text-warning text-shadow"
              v-for="i in t.rating"
            ></i>
            
          </div>
          <div
            class="text-center px-5 pb-3 d-flex flex-column align-items-center justify-content-center "
          >
                <h1 class="mb-0 fs-4 fw-bold mt-3"> {{t.name  }} </h1>
            <p class="text-center fs-4">
              <i class="mdi mdi-format-quote-open text-dark fs-3"></i>
              {{ t.text }}
              <i class="mdi mdi-format-quote-close text-dark fs-4"></i>
            </p>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { computed } from "@vue/reactivity";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  EffectCreative,
  Pagination,
  Navigation,
  Autoplay
} from "swiper";
import { AppState } from "../../AppState.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      testimonials:computed(() => AppState.testimonials),
      modules: [EffectCoverflow, Pagination, EffectCreative, Navigation,Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
.fluid{
  max-width: 100%;
  height: fit-content;
}
.mdi-star{
  font-size: 4rem;
}
.forcedImg {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
