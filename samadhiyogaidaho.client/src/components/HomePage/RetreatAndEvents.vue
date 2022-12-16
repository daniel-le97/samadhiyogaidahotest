<template>
  <div class="container p-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <h1    v-motion-slide-visible-left class="display-1 font-1 text-start underline">
          Join Our Retreat
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
      <div class="col-md-8">
        <div
           v-motion-pop-visible
        class="image-box mb-5 mb-md-0">
          <img
            src="../../assets/img/retreatCoverImage.png"
            alt=""
            class="hover-image img-fluid rounded-1 elevation-6"
          />
          <div class="text-box">
            <router-link
              :to="{ name: 'Retreat', params: {} }"
              @click="scrollToTop()"
            >
              <button class="btn btn-dark display-1 fs-1 font-2">
                More Information
              </button>
            </router-link>
          </div>
        </div>
      </div>
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
