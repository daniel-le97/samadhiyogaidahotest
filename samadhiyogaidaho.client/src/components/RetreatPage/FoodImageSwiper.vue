<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
      :loop="true"
    class="mySwiper  rounded-4 d-none d-md-block"
    
  >
    <swiper-slide v-for="i in images" class="bg-transparent elevation-6  rounded-4">
<img :src="i" alt="" class="rounded-4 img-fluid h-100 ">

    </swiper-slide>
  </swiper>


   <!-- <swiper :navigation="true" :modules="modules" class="mySwiper d-md-none d-flex">
       <swiper-slide v-for="i in images" class="bg-transparent elevation-6  rounded-4">
<img :src="i" alt="" class="rounded-4 img-fluid h-100  ">

    </swiper-slide>
  </swiper> -->
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { computed } from "@vue/reactivity";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";



// import required modules
import { EffectCards, Navigation } from "swiper";
import { AppState } from "../../AppState.js";

export default {
  components: {
    Swiper,
    SwiperSlide,

  },
  setup() {
    return {
      modules: [EffectCards,Navigation],
      images: computed(() => AppState.currentRetreat?.food?.imgs),
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  width:25rem;
  height: 600px;
img{
  object-fit: cover;
}
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
 width: 80%;
  height: 70vh;
 
  }
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-color: transparent;
  box-shadow: none;
}



</style>

