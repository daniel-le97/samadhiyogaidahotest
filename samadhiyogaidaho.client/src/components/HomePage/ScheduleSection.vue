<template>
  <div class="container schedule-section">
    <div class="row my-5" v-motion-slide-visible-bottom :delay="200">
      <div class="col-md-12 text-center mt-2">
        <h1 v-motion-slide-visible-once-left class="display-2 font-1 underline">
          Schedule
        </h1>
        <br />
      </div>

      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <div class="card">
          <div class="image-box">
            <img
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              class="img-fluid rounded elevation-6 hover-image"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6 text-start">
        <div class="">
          <p
            class="underline fs-2 font-1 border-2 border-bottom text-start text-pink darken-20"
          >
            Level 1-2 Vinyasa Style Yoga
          </p>

      <div class="d-flex">
            <a
            href="https://goo.gl/maps/7bXj27T2fFr8gJ7D6"
            target="_blank"
            class="darken-20 text-dark font-2 fs-3"
          >
            <i class="mdi mdi-map-marker fs-1 text-pink darken-20"></i>HollyWood
            Market Yoga</a
          >
      </div>
        </div>
        <div class="mt-4">
          <p
            class="underline fs-2 font-1 border-2 border-bottom text-start text-pink darken-20"
          >
            Authentic Series
          </p>

          <div class="d-flex">
            <div class="me-3">
              <p class="text-start fs-3">Saturday 9AM</p>

              <a
                href="https://goo.gl/maps/7bXj27T2fFr8gJ7D6"
                target="_blank"
                class="darken-20 text-dark font-2 fs-3"
              >
                <i class="mdi mdi-map-marker fs-1 text-pink darken-20"></i
                >HollyWood Market Yoga</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row my-4">
      <div class="col-md-12 text-center mt-2">
        <h1 v-motion-slide-visible-once-left class="display-2 font-1 underline">
          Our Offerings To You
        </h1>
        <br />
        <h2
          v-motion-slide-visible-once-left
          class="text-lightPink darken-20 font-2 underline"
        >
          These curated programs are to help align you towards your best self
        </h2>
      </div>
      <div class="col-md-4">
        <div v-motion-pop-visible-once class="mb-5 mb-md-0">
          <div class="zoom-hover elevation-6">
            <router-link :to="{ name: 'Retreat' }" @click="scrollToTop()">
              <img
                src="../../assets/img/servicePhoto2.png"
                alt=""
                class="img-fluid rounded"
              />
            </router-link>
          </div>

          <div class="card-body">
            <div class="text-pink darken-20 font-2 fs-2 my-3">Classes</div>
            <div class="">
              <p class="font-2 fs-4 text-start" style="z-index: 99999">
                Monday & Wednesday you can catch us at 6AM at HollyWood Market
                Yoga Where we hold Level 1-2 Vinyasa Style Yoga ( Commonly
                referred to as “flow”) Saturday at 9AM we hold an authentic
                series class at Authentic yoga studio
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div v-motion-pop-visible-once class="mb-5 mb-md-0">
          <div class="zoom-hover elevation-6">
            <router-link :to="{ name: 'Retreat' }" @click="scrollToTop()">
              <img
                src="../../assets/img/YoutubeOffering.png"
                alt=""
                class="img-fluid rounded"
              />
            </router-link>
          </div>

          <div class="card-body">
            <div class="text-pink darken-20 font-2 fs-2 my-3">
              Online Series
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
          <div class="zoom-hover elevation-6">
            <router-link :to="{ name: 'Retreat' }" @click="scrollToTop()">
              <img
                src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/291518073_128132356576521_7530546115358918920_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=bHJ0OcW_2gAAX-7oHpz&_nc_ht=scontent-fml2-1.xx&oh=00_AfAdzk-xLbVt1NsLbKqNuJJt5uo2-tJWeJrYyzXmfxQR9Q&oe=63A11BE8"
                alt=""
                class="img-fluid rounded"
              />
            </router-link>
          </div>

          <div class="card-body">
            <div class="text-pink darken-20 font-2 fs-2 my-3">
              Pop-Up Events
            </div>
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



    </div> -->
  </div>
</template>

<script>
export default {
  setup() {
    return {
      schedule: {
        address: "https://goo.gl/maps/7bXj27T2fFr8gJ7D6",
        title: "Level 1-2 Vinyasa Style Yoga",
        location: "HollyWood Market Yoga",
        time: "Monday & Wednesday 6AM",
        cost: 0,
      },
      async changeText() {
        try {
          await scheduleService.createSchedule(this.schedule);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
