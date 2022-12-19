<template>
  <div class="container p-5" style="margin-bottom:300px;">





    
      <div class="row">
        <div class="col-md-8  mt-2">
          <h1
            v-motion-slide-visible-left
            class="display-1 font-1 text-start  underline"
          >
            Schedule
          </h1>
           <h2
           v-motion-slide-visible-left
            class="display-6 courgette text-lightPink darken-20 font-2 underline"
          >
         Current Layed Out Schedule
          </h2>
        </div>
      </div>


      <div class="row my-4">
  
<div class="col-12 d-flex ">
  <div class="elevation-6 p-2 rounded bg-pink ">
<p class="font-2 fs-3">Monday 6AM Level 1-2 Vinyasa Style Yoga at Hollywood Market</p>
  </div>
  <div class="elevation-6 p-2 rounded mx-3 bg-pink ">
<p class="font-2 fs-3">Wednesday 6AM Level 1-2 Vinyasa Style Yoga at Hollywood Market</p>
  </div>
  <div class="elevation-6 p-2 rounded bg-pink ">
<p class="font-2 fs-3">Saturday 9:30AM authentic series class Level 1-2 at Authentic Yoga</p>
  </div>
</div>
      </div>

      <div class="row  ">
     <div class="d-flex">
         <span>

          <p>  I'm also excited to be posting new  </p>  
        </span>
        <span>

          <i class="mdi mdi-youtube fs-1 hover-image rounded-5"></i>
        </span>
        <span>

          <p>  videos every two weeks</p>
        </span>
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