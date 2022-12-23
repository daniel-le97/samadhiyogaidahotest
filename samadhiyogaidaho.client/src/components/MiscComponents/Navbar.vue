<template>
  <nav class="navbar navbar-expand-lg navbar-dark text-dark  px-3 font-2 nav py-md-5">
    <div class="d-flex mx-auto justify-content-center">
    
<p class="mb-0">
      <button class="navbar-toggler btn-dark text-dark bg-dark" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button></p>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto ">
          <li>
            <router-link :to="{ name: 'Home' }" v-motion-pop :delay="300"
              class="btn text-uppercase  fw-bold fs-4 nav-link"
              title="home">
              Home
            </router-link>
          </li>
          <li class="">
            <router-link :to="{ name: 'About' }" v-motion-pop :delay="300"
              class="btn text-uppercase text-uppercase fw-bold fs-4 nav-link"
              title="about">
              About
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Retreats' }" v-motion-pop :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link">
              Retreats
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Services' }" v-motion-pop :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
              title="services">
              Services
            </router-link>
          </li>
          <li class="mx-5  d-none d-md-flex justify-content-center align-items-center ">
            <div v-motion-fade :delay="1000" class="text-center">
              <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
                <img src="../../assets/img/logo.png" alt="" class="rounded-pill elevation-orange logo-image" title="home"  />
              </router-link>
            </div>
          </li>
          <li>
            <router-link :to="{ name: 'Events' }" v-motion-pop :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
              title="events">
              Events
            </router-link>
          </li>
          <li>
            <a href=" https://ghost.apps.ledano.tk/ " target="_blank" v-motion-pop :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
              title="blog">
              Blog
            </a>
          </li>
          <!-- <li>
            <router-link
              :to="{ name: 'NewsLetter' }"
              v-motion-pop
              :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
            >
              Stay Updated
            </router-link>
          </li> -->
          <li>
            <router-link :to="{ name: 'FAQ' }" v-motion-pop :delay="300"
              class="btn  text-uppercase fw-bold fs-4 nav-link"
              title="FAQ">
              FAQ
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }" v-motion-pop :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
              title="connect">
              Connect
            </router-link>
          </li>

        </ul>
        <!-- LOGIN COMPONENT HERE -->
        <!-- <Login /> -->
      </div>
    </div>
  </nav>
</template>

<script>
import { useRoute } from "vue-router";
import Login from "./Login.vue";
export default {
  setup() {
    const route = useRoute()
    return {
      route,
    };
  },
  components: { Login },
};
</script>

<style scoped lang="scss">
.nav-link {
  text-transform: uppercase;
  color: #ffffff;
  margin-left: 8px;
  margin-right: 8px;
  text-shadow: 0px 1px 4px #000000;
}

.nav-link:hover {
  text-transform: uppercase;
  color: var(--darkPink) ! important
}

.nav {
background: linear-gradient(to bottom,  rgba(5, 5, 5, 0.65) 0%,rgba(0, 0, 0, 0) 100%);

 @media only screen and (max-width: 768px){
 background: #ffa67cc2;
  }

}
/*

.logo-image {
background: linear-gradient(to bottom,  rgba(23, 50, 51, 0.65) 0%,rgba(255, 0, 0, 0) 100%); 
*/
.logo-image{
  width: 100px;
  height: 160px;
}

.logo {
  object-fit: cover;

}

.navbar-nav .router-link-exact-active {
  border-bottom: 4px solid var(--darkPink);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: var(--darkPink);
}

// @media screen and (min-width: 768px) {
//   nav {
//     height: 200px;
//   }
 
// }


</style>
