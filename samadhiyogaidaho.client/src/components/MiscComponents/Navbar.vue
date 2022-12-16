<template>
  <nav

    class="navbar navbar-expand-lg navbar-dark text-dark  px-3 fixed-top font-2"
  >
    <div class="d-flex mx-auto">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center">
          <!-- <img
            src="https://cdn-icons-png.flaticon.com/512/1927/1927059.png"
            alt=""
            width="70"
            height="70"
          /> -->
          <img
            src="src\assets\img\Samadhi Yoga.png"
            alt=""
            width="70"
            height="70"
            class="rounded-circle logo"
          />
           <!-- <div v-motion-fade class="text-center " style="margin-top:80px;">
          <img
            src="../assets/img/Screenshot_4.png"
            alt=""
            class="rounded-pill elevation-6 logoImage w-25"
          />
      
        </div> -->
        </div>
      </router-link>
     
      <button
        class="navbar-toggler btn-dark text-dark bg-dark"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto">
          <li>
            <router-link
              :to="{ name: 'Home' }"
              v-motion-pop
              :delay="300"
              class="btn text-uppercase  fw-bold fs-4 nav-link"
            >
              Home
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'About' }"
              v-motion-pop
              :delay="300"
              class="btn text-dark text-uppercase fw-bold fs-4 nav-link"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Retreat' }"
              v-motion-pop
              :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
            >
              Retreats
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Services' }"
              v-motion-pop
              :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
            >
              Services
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Events' }"
              v-motion-pop
              :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
            >
              Events
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Blog' }"
              v-motion-pop
              :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
            >
              Blog
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'NewsLetter' }"
              v-motion-pop
              :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
            >
              Stay Updated
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Testimonials' }"
              v-motion-pop
              :delay="300"
              class="btn  text-uppercase fw-bold fs-4 nav-link"
            >
              Testimonials
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Contact' }"
              v-motion-pop
              :delay="300"
              class="btn text-uppercase fw-bold fs-4 nav-link"
            >
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

<style scoped>



.nav-link {
  text-transform: uppercase;
  color:var(--dark);
  margin-left: 8px;
  margin-right: 8px;
}
.nav-link:hover {
  text-transform: uppercase;
  color: var(--darkPink) ! important
}

.logo{
  object-fit: cover;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 4px solid var(--darkPink);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: var(--darkPink);
}

@media screen and (min-width: 768px) {
  nav {
    height: 80px;
  }
}
</style>
