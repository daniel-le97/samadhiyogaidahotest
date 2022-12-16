<template>
  <swiper
    :grabCursor="true"
    :navigation="true" 
      :pagination="{
      dynamicBullets: true,
    }"
    :effect="'creative'"
        :loop="true"
    :creativeEffect="{
      prev: {
        shadow: true,
        origin: 'left center',
        translate: ['-5%', 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: 'right center',
        translate: ['5%', 0, -200],
        rotate: [0, -100, 0],
      },
    }"
    :modules="modules"
      v-motion-pop-visible
    class="mySwiper6 rounded"
  >
   <swiper-slide >  
          <div
            class="testimonial-card card   border-0 position-relative elevation-6 "
          >
        
            <div class="">
            <div class="justify-content-center d-flex flex-column align-items-center mt-5">
                <img
                src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                class=" elevation-6 img-fluid forcedImg "
              />
               <h1 class="mb-0 fs-4 fw-bold mt-3">Jane Doe</h1>
            </div>
            
            <div class="d-flex justify-content-center mt-2">
<i class="mdi mdi-star fs-1 text-warning text-shadow" v-for=" i in 5"></i>

            </div>
              <div class="text-center  p-5 d-flex flex-column align-items-center justify-content-center">
               
                  <p class="text-center fs-4">
              <i class="mdi mdi-format-quote-open text-dark fs-3"></i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur autem debitis dolorum maiores. Veniam nisi facere
              obcaecati commodi similique nemo hic culpa, rem repellendus.
              Minus, quas? Dolorem, nihil cupiditate praesentium quas labore,
              <i class="mdi mdi-format-quote-close text-dark fs-4"></i>
            </p>
              </div>
            </div>
          
          </div>
       </swiper-slide>
   <swiper-slide >  
          <div
            class="testimonial-card card   border-0 position-relative elevation-6 "
          >
        
            <div class="">
            <div class="justify-content-center d-flex flex-column align-items-center mt-5">
                <img
                src="https://images.unsplash.com/photo-1620862657760-72a639a2daef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                class=" elevation-6 img-fluid forcedImg "
              />
               <h1 class="mb-0 fs-4 fw-bold mt-3">Jane Doe</h1>
            </div>
            
            <div class="d-flex justify-content-center mt-2">
<i class="mdi mdi-star fs-1 text-warning text-shadow" v-for=" i in 5"></i>

            </div>
              <div class="text-center  p-5 d-flex flex-column align-items-center justify-content-center">
               
                  <p class="text-center fs-4">
              <i class="mdi mdi-format-quote-open text-dark fs-3"></i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur autem debitis dolorum maiores. Veniam nisi facere
              obcaecati commodi similique nemo hic culpa, rem repellendus.
              Minus, quas? Dolorem, nihil cupiditate praesentium quas labore,
              <i class="mdi mdi-format-quote-close text-dark fs-4"></i>
            </p>
              </div>
            </div>
          
          </div>
       </swiper-slide>
   <swiper-slide >  
          <div
            class="testimonial-card card   border-0 position-relative elevation-6 "
          >
        
            <div class="">
            <div class="justify-content-center d-flex flex-column align-items-center mt-5">
                <img
                src="https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""
                class=" elevation-6 img-fluid forcedImg "
              />
               <h1 class="mb-0 fs-4 fw-bold mt-3">Jane Doe</h1>
            </div>
            
            <div class="d-flex justify-content-center mt-2">
<i class="mdi mdi-star fs-1 text-warning text-shadow" v-for=" i in 5"></i>

            </div>
              <div class="text-center  p-5 d-flex flex-column align-items-center justify-content-center">
               
                  <p class="text-center fs-4">
              <i class="mdi mdi-format-quote-open text-dark fs-3"></i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur autem debitis dolorum maiores. Veniam nisi facere
              obcaecati commodi similique nemo hic culpa, rem repellendus.
              Minus, quas? Dolorem, nihil cupiditate praesentium quas labore,
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

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, EffectCreative, Pagination,Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination,EffectCreative,Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>



.forcedImg{
 height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
}

</style>
