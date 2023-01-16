<template>
  <div>
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 p-0">
            <div
              class="hero-image position-relative d-flex flex-column justify-content-center align-items-center"
            >
              <div class="tsparticles">
                <ParticleComponent />
              </div>
              <div
                class="text-center text-shadow container d-flex flex-column justify-content-center align-items-center"
              >
                <h1
                  v-motion-slide-top
                  :delay="200"
                  class="display-1 text-light font-1 page-title"
                >
                  CONNECT
                </h1>
                <p
                  v-motion-slide-top
                  :delay="400"
                  class="font-2 text-light text-shadow display-6"
                >
                  Stay in touch and be part of our community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-5">
      <div class="row justify-content-center">
        <div
          class="col-md-8 d-flex justify-content-center flex-column align-content-center align-items-center"
        >
          <blockquote
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="font-1 text-center"
          >
            On an inhale, think of the things that are no longer serving you,
            whatever that may be. Maybe it’s a thought Maybe it’s a feeling
            Maybe it’s a person Or an experience But taking it, And on an
            exhale, choosing consciously to let it go.
          </blockquote>
          <cite v-motion-slide-visible-once-bottom :delay="300"
            >- SamadhiYogaIdaho</cite
          >
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-8 text-center">
          <p v-motion-slide-visible-once-bottom :delay="300" class="display-4">
            We'd
            <i class="mdi mdi-heart-outline display-3 text-pink darken-20" /> to
            help!
          </p>
          <p v-motion-slide-visible-once-bottom :delay="300" class="fs-5">
            We like to create experiences with fun, open-minded people. Feel
            free to say hello!
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="col-md-12 my-3"
        >
          <ContactForm />
        </div>
      </div>
    </section>
    <section class="container-fluid my-5 bg-pink">
      <div class="row ">
        <div class="col-md-6 p-5 ">
        <div >
            <p
            v-motion-slide-visible-once-bottom
            :delay="300"
            class="display-4 text-center"
          >
            Contact us directly at:
          </p>

          <div class="text-center">
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="text-center fs-3"
            >
              <a href="tel:208-670-4139" class="text-dark font-2 email-phone">
                <i class="mdi mdi-phone fs-3"></i> 208-670-4139</a
              >
            </p>
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="text-center fs-3"
            >
              <a
                href="mailto:samadhiyogaidaho@gmail.com"
                class="text-dark font-2 email-phone"
              >
                <i class="mdi mdi-email fs-3"></i> samadhiyogaidaho@gmail.com</a
              >
            </p>
          </div>

        </div>
              <div class="row mt-2 mt-md-5 ">
               <div class="col-md-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.0401171489025!2d-116.1999963838341!3d43.62652396217208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef9219118320f%3A0x8e084b9e409ec87!2sHollywood%20Market%20Yoga%20%26%20Massage!5e0!3m2!1sen!2sus!4v1673220559248!5m2!1sen!2sus"
                      class="elevation-6 rounded"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div class="col-md-6">
                  <p class="fs-5">Hollywood Market</p>
                  <p class="fs-5">5634 W State St, Boise, ID 83703</p>
                  <p class="fs-5"> Monday & Wednesday </p>
                </div>

              </div>
              <div class="row mt-4">



                  <div class="col-md-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11546.307468094212!2d-116.27678296044921!3d43.656971100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aeff6d66eadd35%3A0x135a6917ddd02c27!2sAuthentic%20Yoga%20Studio!5e0!3m2!1sen!2sus!4v1673220846993!5m2!1sen!2sus"
                 class="elevation-6 rounded"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div class="col-md-6">
                  <p class="fs-5">
                    Authentic Yoga
                  </p>
                  <p class="fs-5">1319 N 8th St, Boise, ID 83702</p>
                  <p class="fs-5">Saturday</p>
                </div>
              </div>

        </div>
        <div class="col-md-6 p-0">
          <img
            v-motion-slide-visible-once-bottom
            :delay="300"
            src="../assets/img/IMG_4916.jpg"
            alt=""
            class="img-fluid studio-img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from "../components/ContactPage/ContactForm.vue";

import ParticleComponent from "../components/MiscComponents/ParticleComponent.vue";

export default {
  setup() {
    return {};
  },
  components: { ParticleComponent, ContactForm },
};
</script>

<style lang="scss" scoped>
.studio-img {
  width: 100%;
  height: 800px;
  object-fit: cover;
}
.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;

  background-image: url(https://images.unsplash.com/photo-1619781458519-5c6115c0ee98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-position: bottom;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
  @media only screen and (max-width: 768px) {
    background-attachment: scroll;
  }
}
</style>
