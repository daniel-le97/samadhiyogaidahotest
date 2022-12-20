<template>
  <div class="container p-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <h1    v-motion-slide-visible-left class="display-1 font-1 text-start underline">
         MY Offerings To You
        </h1>
        <h2
            v-motion-slide-visible-left
          class="display-6 courgette text-lightPink darken-20 font-2 underline"
        >
          COUPLES REJUVENATION YOGA RETREAT
        </h2>
        <br />
        <h3
           v-motion-slide-visible-left
          class="fs-4 font-2 text-lightPink darken-30 underline"
        >
          NOW BOOKING FOR 2023
        </h3>
      </div>
      <!-- <div class="col-md-4">
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
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
