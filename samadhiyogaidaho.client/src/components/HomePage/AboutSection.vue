<template>
  <div>
    <div class="container position-relative py-5">
      <div 
         v-motion-slide-visible-once-bottom
          :delay="300"
      class="floating-image-1 d-none d-md-block">
        <PersonComponent />
      </div>
      <div class="row">
        <div
          class="col-md-8 team-section-title d-flex d-md-block flex-column align-items-sm-center justify-content-sm-center"
        >
          <h1
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="display-2 font-1 underline text-center text-md-start text-dark"
          >
            Katie Alverson
          </h1>
          <h2
             v-motion-slide-visible-once-bottom
          :delay="1200"
            class="display-6 font-2 underline text-lightPink darken-20 text-center text-md-start"
          >
            Experienced
          </h2>

          <h2
             v-motion-slide-visible-once-bottom
          :delay="900"
            class="display-6 font-2 underline text-lightPink darken-20 text-center text-md-start me-md-2"
          >
            Qualified
          </h2>

          <h2
             v-motion-slide-visible-once-bottom
          :delay="300"
            class="display-6 font-2 underline text-lightPink darken-20 text-center text-md-start"
          >
            Passionate
          </h2>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row gy-5 justify-content-center">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <div 
             v-motion-slide-visible-once-bottom
          :delay="300"
          class="card framed border-0">
            <div class="image-box">
              <img
                src="../../assets/img/KatiePortrait.png"
                alt="Katie Alverson"
                class="img-fluid elevation-6 rounded"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
       
          <p 
             v-motion-slide-visible-once-bottom
          :delay="300"
          class="text-start fs-4 font-2">
            I believe that to question, to inquire, to seek understanding is a
            core part of what it means to be human. Whether its at home or away
            on a retreat, they are always inspired by the experiences of life.
            the core of a healthy person is in the wellbeing of their body,
            mind, and soul.
          </p>

          <div class="text-center">
            <img
               v-motion-slide-visible-once-bottom
          :delay="600"
              src="https://www.yogahouse.gr/wp-content/uploads/2016/12/RYT-200-AROUND-BLACK-600x600.jpg"
              alt=""
              width="150"
              height="150"
              class="rounded-circle elevation-6"
            />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center justify-content-md-end">
        <router-link 
           v-motion-slide-visible-once-bottom
          :delay="300"
        :to="{ name: 'About' }" class="my-3">
          <button class="btn btn-dark font-2 fs-3">
            Learn more about Katie
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PersonComponent from "../MiscComponents/PersonComponent.vue";

export default {
  setup() {
    return {};
  },
  components: { PersonComponent },
};
</script>

<style lang="scss" scoped>
.floating-image-1 {
  position: absolute;
  left: 58%;
  top: -45%;
  width: 400px;
  height: 400px;
  z-index: 2;
  /* always scale the image to the appropriate size of your screen */
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    left: 14%;
    top: -40%;
    width: 300px;
    height: 300px;
  }
}
</style>
