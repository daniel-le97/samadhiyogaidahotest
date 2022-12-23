<template>
    <div class="container position-relative py-5">
        <div class="floating-image-1 d-none d-md-block">
          <PersonComponent />
        </div>
        <div class="row">
          <div class="col-md-8 team-section-title">
            <h1
              v-motion-slide-visible-once-left
              class="display-2 font-1 underline text-start"
            >
              Katie Alverson
            </h1>
            <h2
              v-motion-slide-visible-once-left
              class="display-6 font-2 underline text-lightPink darken-20 "
            >
              Experienced
            </h2>

            <h2
              v-motion-slide-visible-once-left
              class="display-6 font-2 underline text-lightPink darken-20  me-md-2"
            >
              Qualified
            </h2>

            <h2
              v-motion-slide-visible-once-left
              class="display-6 font-2 underline text-lightPink darken-20 "
            >
              Passionate
            </h2>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row  gy-5 justify-content-center">
          <div class="col-md-6 ">
            <img
             v-motion-pop-visible-once
              src="https://scontent.fboi1-1.fna.fbcdn.net/v/t39.30808-6/306519061_129159436532870_6494007048333346057_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZyXKoZ6J5CIAX-iRhfY&_nc_ht=scontent.fboi1-1.fna&oh=00_AfCPQrcs1-iLVW0CLPjhl0-intGdQOE1_KoCweThnqKaAg&oe=639D65A6"
              alt="Katie Alverson"
              class="img-fluid elevation-6 rounded framed "
            />
          </div>
          <div class="col-md-6">
            <h6 class="mb-0 fs-4 fw-bold text-center">
              Founder, Owner, Teacher
            </h6>
            <p class="text-start fs-4 font-2">
              I believe that to question, to inquire, to seek understanding is a
              core part of what it means to be human. Whether its at home or
              away on a retreat, they are always inspired by the experiences of
              life. the core of a healthy person is in the wellbeing of their
              body, mind, and soul.
            </p>

            <div class="text-center">
              <img
                src="https://www.yogahouse.gr/wp-content/uploads/2016/12/RYT-200-AROUND-BLACK-600x600.jpg"
                alt=""
                width="150"
                height="150"
                class="rounded-circle elevation-orange"
              />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center justify-content-md-end">
          <router-link
            :to="{ name: 'About' }"
            class="fs-3 btn bg-dark font-2 my-4"
          >
            Learn more about Katie
          </router-link>
        </div>
      </div>
</template>


<script>
import PersonComponent from "../PersonComponent.vue";

export default {
    setup() {
        return {};
    },
    components: { PersonComponent }
}
</script>


<style lang="scss" scoped>
.floating-image-1 {
  position: absolute;
  left: 65%;
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