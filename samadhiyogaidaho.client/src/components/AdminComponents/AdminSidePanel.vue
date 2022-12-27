<template>
  <div class="container-fluid sticky-md-top fixed-bottom">
    <div class="row">
      <div class="col-md-12 p-0">
        <div
          class=" p-3 text-white bg-dark elevation-6  sticky-top grow"
        >
          <a
            href="/"
            class="d-none d-md-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none justify-content-center"
          >
            <img
              src="../../assets/img/Samadhi-Yoga.png"
              alt=""
              height="50"
              width="50"
              class="rounded me-4"
            />
            <span class="fs-4 d-none d-md-block">Dashboard</span>
          </a>

          <hr class="d-none d-md-block" />
        
          <ul class="  d-flex flex-md-column justify-content-evenly p-2 p-md-0">
            <li class="list-group-item">
              <router-link class="nav-link" :to="{ name: 'AdminHome' }">
                Home
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link class="nav-link" :to="{ name: 'AdminEvents' }">
                Events
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link class="nav-link" :to="{ name: 'AdminRetreats' }">
                Retreats
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link class="nav-link" :to="{ name: 'AdminSchedule' }">
                Schedule
              </router-link>
            </li>
            <li class="list-group-item">
              <router-link class="nav-link" :to="{ name: 'AdminSettings' }">
                Settings
              </router-link>
            </li>
          
          </ul>
         Logged in:
              {{ admin.name }}
              <Login/>
        </div>
    
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from "../../AppState";
import { AuthService } from "../../services/AuthService";
import { computed } from "@vue/reactivity";
import Login from "../MiscComponents/Login.vue";

export default {
    setup() {
        return {
            admin: computed(() => AppState?.account),
            async loadTab(tab) {
                AppState.activeTab = tab;
            },
            async logout() {
                AuthService.logout({ returnTo: window.location.origin });
                // AuthService.
            },
        };
    },
    components: { Login }
};
</script>

<style lang="scss" scoped>
.grow {
  height: 100vh;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    height: auto;
  }
}


 .router-link-exact-active {
  color: var(--peach);
  transform: translateX(120px);
width: 25%;
  transition: all 0.25s ease;
  text-decoration: underline;
  font-size: 2.5rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    font-size: 0.75rem;
    transform: translateX(0px);
  }
}

.nav-link {
  margin-bottom: 5px;
  font-size: 1.75rem;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
}
.nav-link:hover {
  color: var(--peach) !important;
  transition: all 0.25s ease;
}

.active {
  background: rgb(214, 163, 150) !important;
}
</style>
