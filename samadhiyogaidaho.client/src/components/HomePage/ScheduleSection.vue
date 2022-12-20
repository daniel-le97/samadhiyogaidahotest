<template>
  <div class="container p-5" style="margin-bottom: 300px">
    <div class="row">
      <div class="col-md-12 text-center mt-2">
        <h1 v-motion-slide-visible-once-left class="display-1 font-1 underline">
          Our Offerings To You
        </h1>
        <br />
        <h2
           v-motion-slide-visible-once-left
            class=" text-lightPink darken-20 font-2 underline"
          >
       These curated programs are to help align you towards your best self
          </h2>
      </div>
    </div>




 <div class="row my-5"  v-motion-slide-visible-bottom :delay="200">
   <div class="col-md-6 d-flex align-items-center justify-content-center" >
<img   src="../../assets/img/purpleroom2.png" alt="" class="img-fluid rounded elevation-6 hover-image w-75">
   </div>
   <div class="col-md-6 text-start">
<p class="underline  fs-2 font-1  border-2 border-bottom text-start text-pink darken-20">Level 1-2 Vinyasa Style Yoga  </p>
<p> ( Commonly referred to as “flow”)</p>
<div class="d-flex">
  <div  class="me-3"><p class="text-start">Monday & Wednesday 6AM</p>

<p class="text-start"> HollyWood Market Yoga</p>
<p class="text-start">1319 N Eighth St, Boise, ID 83702, United States</p></div>
<div class="fs-2 font-2">
$

</div>
</div>
<!-- <p class="fs-4 text-start">{{event.description}} 
</p> -->


   </div>
  </div>


    <div class="row my-4">
      <div class="col-md-4">
        <div v-motion-pop-visible-once class="mb-5 mb-md-0">
          <router-link :to="{ name: 'Retreat' }" @click="scrollToTop()">
            <img
              src="../../assets/img/purpleroom2.png"
              alt=""
              class="img-fluid rounded-1 elevation-6 hover-image"
            />
          </router-link>

          <div class="card-body">
            <div class="text-pink darken-30 font-2 fs-2 my-3">Classes</div>
            <div class="">
              <p class="font-2 fs-4 text-start" style="z-index: 99999">
                Monday & Wednesday you can catch us at 6AM at HollyWood Market
                Yoga Where we hold Level 1-2 Vinyasa Style Yoga ( Commonly
                referred to as “flow”)
                Saturday at 9AM we hold an authentic series class at Authentic yoga studio
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div v-motion-pop-visible-once class="mb-5 mb-md-0">
          <router-link :to="{ name: 'Retreat' }" @click="scrollToTop()">
            <img
              src="../../assets/img/YoutubeOffering.png"
              alt=""
              class="img-fluid rounded-1 elevation-6 hover-image"
            />
          </router-link>

          <div class="card-body">
            <div class="text-pink darken-30 font-2 fs-2 my-3">
              Online Classes
            </div>
            <div class="">
              <p class="font-2 fs-4 text-start" style="z-index: 99999">
                Starting in 2022 I began recording a mix of Online class series,
                and recorded content that can be accessed on your own time. Our
                online offerings are to meant to help you experience the beauty
                and art of transformation that takes place within yoga from the
                comfort of your own home and integrate it into your daily life
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class="col-md-4">
        <div v-motion-pop-visible-once class="mb-5 mb-md-0">
          <router-link :to="{ name: 'Retreat' }" @click="scrollToTop()">
            <img
              src="../../assets/img/retreatCoverImage.png"
              alt=""
              class="img-fluid rounded-1 elevation-6 hover-image"
            />
          </router-link>

          <div class="card-body">
            <div class="text-pink darken-30 font-2 fs-2 my-3">Pop-Up Events</div>
            <div class="">
              <p class="font-2 fs-4 text-start" style="z-index: 99999">
                Are you feeling the need to get away with your partner not just
                to relax, but to also delve deeper into your relationship? It's
                time to stop putting yourself and your partner on the back
                burner and give yourselves a long weekend away from it all. A
                weekend full of relaxation, connection, and love.
              </p>
            </div>
          </div>
        </div>
      </div>



<!-- 
      <div class="col-md-4">
        <div v-motion-pop-visible-once class="mb-5 mb-md-0">
          <router-link :to="{ name: 'Retreat' }" @click="scrollToTop()">
            <img
              src="../../assets/img/retreatCoverImage.png"
              alt=""
              class="img-fluid rounded-1 elevation-6 hover-image"
            />
          </router-link>

          <div class="card-body">
            <div class="text-pink darken-30 font-2 fs-2 my-3">Our Retreats</div>
            <div class="">
              <p class="font-2 fs-4 text-start" style="z-index: 99999">
                Are you feeling the need to get away with your partner not just
                to relax, but to also delve deeper into your relationship? It's
                time to stop putting yourself and your partner on the back
                burner and give yourselves a long weekend away from it all. A
                weekend full of relaxation, connection, and love.
              </p>
            </div>
          </div>
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
  components: { TestimonialSwiper },
};
</script>

<style lang="scss" scoped>
.img-fluid {
  height: 300px;
  object-fit: cover;
}
</style>
