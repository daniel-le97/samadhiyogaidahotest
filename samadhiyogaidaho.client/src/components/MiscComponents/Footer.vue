<template>
 
  <footer class="text-center text-dark footer-image bg-pink position-relative">

    <FooterWave />
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-6">
          <NewsLetter />
        </div>
        <div class="col-md-6 d-flex">
          <p class="fs-3">Join Our NewsLetter and stay connected with us!</p>
          <img src="https://img.freepik.com/free-vector/staying-touch-modern-communication-means-phone-calls-letters-emails-person-contacting-friends-customers-via-email-encouraging-feedback-vector-isolated-concept-metaphor-illustration_335657-2779.jpg?w=740&t=st=1671237218~exp=1671237818~hmac=f0cc7d983a1fc1055faa6830d3cb9820f93a12e81969470acf01ae2f51555029" alt="" class="img-fluid w-50 rounded-circle ">
        </div>
      </div>

      <section class="mt-5">
   
        <div class="row text-center d-flex justify-content-center pt-5">
    
          <div class="col-md-2">
            <router-link :to="{ name: 'About' }" title="about">
              <h6 class="text-uppercase font-weight-bold  text-dark">
                About
              </h6>
              </router-link>
          </div>
  
          <div class="col-md-2">
            <router-link :to="{ name: 'Services' }" title="services">
              <h6 class="text-uppercase font-weight-bold  text-dark">
                Services
              </h6>
            </router-link>
          </div>
  
          <div class="col-md-2">
            
              <h6 class="text-uppercase font-weight-bold  text-dark">
                <a href=" https://ghost.apps.ledano.tk/ " target="_blank"
                  class="text-dark" title="blog">
                  Blog
                </a>
              </h6>
            
          </div>
  
          <div class="col-md-2">
            <router-link :to="{ name: 'FAQ' }" title="FAQ">
              <h6 class="text-uppercase font-weight-bold  text-dark">
                FAQ
              </h6>
            </router-link>
          </div>

          <div class="col-md-2">
            <router-link :to="{ name: 'Contact' }" title="contact">
              <h6 class="text-uppercase font-weight-bold  text-dark">
                Connect
              </h6>
            </router-link>
          </div>
 
        </div>

      </section>
      <!-- Section: Links -->

  
      <div class="divider div-transparent div-dot my-5"></div>
      <!-- Section: Text -->
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              "Yoga is not about touching your toes, it’s about what you learn on the way down." — Jigar Gor
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->

      <!-- Section: Social -->
      <section class="text-center mb-5">
        <a
          href="https://www.facebook.com/people/Samadhi-Yoga-Idaho/100083164429288/?fref=nf&paipv=0&eav=AfZsU1GyYC-3TCWawqpkhNjTENoxFcR48yXyJKsoQDuqyKNUkhTIyy2dAGa7wTrD6QQ&_rdr"
          class="text-dark me-4"
          target="_blank"
        >
          <i class="mdi mdi-facebook fs-1 hover-image rounded-5"></i>
        </a>
        <a
          href="https://www.instagram.com/samadhiyogaidaho/"
          class="text-dark me-4"
          target="_blank"
        >
          <i class="mdi mdi-instagram fs-1 hover-image rounded-5"></i>
        </a>
        <a href="https://www.youtube.com/@Samadhiyogaidaho" class="text-dark me-4" target="_blank">
          <i class="mdi mdi-youtube fs-1 hover-image rounded-5"></i>
        </a>
      </section>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->

    <!-- <p>
      Vector Images by
      <a
        href="https://www.freepik.com/free-vector/organic-flat-people-meditating-illustration_13297280.htm#query=yoga&position=3&from_view=search&track=sph"
        >Freepik</a
      >
    </p> -->
    <!-- Copyright -->
    <div class="text-center p-3 bg-lightPink darken-10">
      © 2022 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/"
        >Samadhi Yoga Idaho, created by <b> Dev Opportunities</b></a
      >
    </div>
    <div class="">
      <!-- <a href="https://www.freepik.com">designed by Freepik - Freepik.com</a> -->
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { logger } from "../../utils/Logger.js";
import Pop from "../../utils/Pop.js";
import NewsLetter from "../NewsLetter.vue";
import FooterWave from "../PluginComponents/FooterWave.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {});
    watchEffect(() => {});
    return {
      editable,
    };
  },
  components: { NewsLetter, FooterWave },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 90px;
}

.divider {
  position: relative;
  margin-top: 90px;
  height: 1px;
}

.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}


.div-dot:after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -18px;
  left: calc(50% - 9px);
  width: 36px;
  height: 36px;
  background-color: rgb(255, 225, 205);
  border: 1px solid rgb(48, 49, 51);
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px white, 0 0 0 4px white;
}
footer {
  margin-top: 50px;
}
</style>
