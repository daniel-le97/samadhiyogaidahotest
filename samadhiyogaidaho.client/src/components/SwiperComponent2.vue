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
    class="mySwiper6 rounded elevation-6 "
  >
   <swiper-slide >  
          <div
            class="testimonial-card card   border-0 position-relative elevation-6 "
          >
        
            <div class="d-flex">
              <img
                src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                class="testimonial-profile-image  rounded-start elevation-6 img-fluid forcedImg "
              />
              <div class="text-center mt-3 p-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class="mb-0 fs-4 fw-bold">Jane Doe</h1>
                  <p class="text-start fs-4">
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
        
            <div class="d-flex">
              <img
                src="https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1438&q=80"
                alt=""
                class="testimonial-profile-image  rounded-start elevation-6 img-fluid forcedImg "
              />
              <div class="text-center mt-3 p-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class="mb-0 fs-4 fw-bold">Jane Doe</h1>
                  <p class="text-start fs-4">
              <i class="mdi mdi-format-quote-open text-dark fs-3"></i>
              Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio iure saepe et minima error! amet consectetur adipisicing elit.
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
        
            <div class="d-flex">
              <img
                src="https://images.unsplash.com/photo-1620862657760-72a639a2daef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                class="testimonial-profile-image  rounded-start elevation-6 img-fluid forcedImg "
              />
              <div class="text-center mt-3 p-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class="mb-0 fs-4 fw-bold">Jane Doe</h1>
                  <p class="text-start fs-4">
              <i class="mdi mdi-format-quote-open text-dark fs-3"></i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur autem debit  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus ullam pariatur? Voluptatem, qui dignissimos! Quasi similique quas at id vero cum omnis deserunt! Pariatur, est deleniti, animi nemo error blanditiis fugit ex expedita consectetur eius quaerat atque in magnam! is dolorum maiores. Veniam nisi facere
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
        
            <div class="d-flex">
              <img
                src="https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""
                class="testimonial-profile-image  rounded-start elevation-6 img-fluid forcedImg "
              />
              <div class="text-center mt-3 p-5 d-flex flex-column align-items-center justify-content-center">
                <h1 class="mb-0 fs-4 fw-bold">Jane Doe</h1>
                  <p class="text-start fs-4">
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

.swiper {

}


.forcedImg{
 height: 800px;
  width: 600px;
  object-fit: cover;
}

</style>
