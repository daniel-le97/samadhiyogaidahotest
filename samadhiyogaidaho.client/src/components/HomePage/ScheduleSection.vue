<template>
  <div class="container p-5" style="margin-bottom:300px;">





    
      <div class="row">
        <div class="col-md-12 text-center mt-2">
          <h1
            v-motion-slide-visible-left
            class="display-1 font-1   underline"
          >
            Our Offerings To You
          </h1>
          <br>
           <!-- <h2
           v-motion-slide-visible-left
            class="display-6 courgette text-lightPink darken-20 font-2 underline"
          >
         Current Layed Out Schedule
          </h2> -->
        </div>
      </div>


      <div class="row my-4">

  <div class="col-md-4">
        <div
           v-motion-pop-visible
        class=" mb-5 mb-md-0 ">
          <img
            src="../../assets/img/purpleroom2.png"
            alt=""
            class=" img-fluid rounded-1 elevation-6"
          />
      
          <div class="card-body">
            <div class=" text-pink darken-30 font-2 fs-2 my-3">Classes</div>
            <div class="">
              <p class="font-2 fs-4 text-start" style="z-index:99999;">
               Monday & Wednesday you can catch us at 6AM at HollyWood Market Yoga Where we hold Level 1-2 Vinyasa Style Yoga ( Commonly referred to as “flow”)
              </p>
               <router-link
              :to="{ name: 'Retreat' }"
              @click="scrollToTop()"
            >
              <button class="btn btn-dark display-1 fs-4 font-2">
                More Information
              </button>
            </router-link>
            </div>
          </div>
        </div>
      </div>

  <div class="col-md-4">
        <div
           v-motion-pop-visible
        class=" mb-5 mb-md-0 ">
          <img
            src="../../assets/img/YoutubeOffering.png"
            alt=""
            class=" img-fluid rounded-1 elevation-6"
          />
      
          <div class="card-body">
            <div class=" text-pink darken-30 font-2 fs-2 my-3">Online Classes</div>
            <div class="">
              <p class="font-2 fs-4 text-start" style="z-index:99999;">
                Starting in 2022 I began recording a mix of Online class series, and recorded content that can be accessed on your own time. Our online offerings are to meant to help you experience the beauty and art of transformation that takes place within yoga from the comfort of your own home and integrate it into your daily life
              </p>
               <router-link
              :to="{ name: 'Retreat' }"
              @click="scrollToTop()"
            >
              <button class="btn btn-dark display-1 fs-4 font-2">
                More Information
              </button>
            </router-link>
            </div>
          </div>
        </div>
      </div>

  <div class="col-md-4">
        <div
           v-motion-pop-visible
        class=" mb-5 mb-md-0 ">
          <img
            src="../../assets/img/retreatCoverImage.png"
            alt=""
            class=" img-fluid rounded-1 elevation-6"
          />
      
          <div class="card-body">
            <div class=" text-pink darken-30 font-2 fs-2 my-3">Our Retreats</div>
            <div class="">
              <p class="font-2 fs-4 text-start" style="z-index:99999;">
                Starting in 2022 I began recording a mix of Online class series, and recorded content that can be accessed on your own time. Our online offerings are to meant to help you experience the beauty and art of transformation that takes place within yoga from the comfort of your own home and integrate it into your daily life
              </p>
               <router-link
              :to="{ name: 'Retreat' }"
              @click="scrollToTop()"
            >
              <button class="btn btn-dark display-1 fs-4 font-2">
                More Information
              </button>
            </router-link>
            </div>
          </div>
        </div>
      </div>

<!-- <div class="col-12 d-flex ">
  <div class="elevation-6 p-2 rounded bg-pink ">
<p class="font-2 fs-3">Monday 6AM Level 1-2 Vinyasa Style Yoga at Hollywood Market</p>
  </div>
  <div class="elevation-6 p-2 rounded mx-3 bg-pink ">
<p class="font-2 fs-3">Wednesday 6AM Level 1-2 Vinyasa Style Yoga at Hollywood Market</p>
  </div>
  <div class="elevation-6 p-2 rounded bg-pink ">
<p class="font-2 fs-3">Saturday 9:30AM authentic series class Level 1-2 at Authentic Yoga</p>
  </div>
</div> -->
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

.img-fluid{
  height: 400px;
  object-fit: cover;
}
</style>