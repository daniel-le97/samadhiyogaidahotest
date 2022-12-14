<template>
  <section>
    <div class="hero-image d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-1 font-1 text-shadow text-light">
            Join Our Retreat
          </h1>
        </div>
      </div>
    </div>
  </section>
<RetreatForm/>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="font-1 text-dark display-2">{{ retreat.title }}</h1>
          <h2 class="font-1 display-6 text-muted">Sub Title</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img
            :src="retreat.coverImg"
            alt=""
            class="img-fluid rounded-4 elevation-5 h-100"
          />
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-12 mb-3">
              <img
                :src="retreat.coverImg"
                alt=""
                class="img-fluid rounded-4 elevation-5"
              />
            </div>
            <div class="col-md-6">
              <img
                :src="retreat.coverImg"
                alt=""
                class="img-fluid rounded-4 elevation-5"
              />
            </div>
            <div class="col-md-6">
              <img
                :src="retreat.coverImg"
                alt=""
                class="img-fluid rounded-4 elevation-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-md-6">
          {{ retreat?.location?.address }}
        </div>
        <div class="col-md-6">
          <img
            :src="retreat?.location?.img"
            alt=""
            class="img-fluid rounded-4"
          />
        </div>

        <div class="col-md-6 d-flex justify-content-center">
         <img src="../assets/img/samadhiretreatschedule.png" alt="" class="img-fluid elevation-5 rounded-4 w-75">
        </div>
        <div class="col-md-6"></div>
      </div>

      <!-- <div class="row my-5 ">
  
  <div class="col-md-12">
   <v-card class="border-0 ">
    <v-tabs
      v-model="tab"
      class="bg-transparent  elevation-5 font-2 fw-bold"
      slider-color="danger"
    >
      <v-tab value="summary">Summary</v-tab>
      <v-tab value="location"> Location</v-tab>
      <v-tab value="cost">Cost</v-tab>
      <v-tab value="activities">Activities</v-tab>
      <v-tab value="schedule">Schedule</v-tab>
      <v-tab value="food">Food</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="summary">
          {{retreat.description}}
        </v-window-item>

        <v-window-item value="location">
         {{retreat.location}}
        </v-window-item>

        <v-window-item value="cost">
          {{retreat.cost}}
        </v-window-item>
        <v-window-item value="activities">
          <ul class="list-group">
<li class="list-group-items" v-for="a in retreat.activities">
  {{a}}
</li>
          </ul>
        </v-window-item>
        <v-window-item value="schedule">
          Three
        </v-window-item>
        <v-window-item value="food">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  
  
  
  </div>
 
      </div> -->
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-1 font-1 text-dark">Past Retreats</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import RetreatForm from "../components/RetreatForm.vue";
import { retreatsService } from "../services/RetreatsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  data: () => ({
    tab: null,
  }),
  setup(props) {
    const editable = ref({});
const retreatDate = AppState.currentRetreat.date
    onMounted(() => {
      getAllRetreats();
    });
    watchEffect(() => {});

    async function getAllRetreats() {
      try {
        await retreatsService.getAllRetreats();
        console.log(AppState.currentRetreat);
      } catch (error) {
        Pop.error(error, "[getCurrentRetreat]");
      }
    }
    return {
      editable,
retreatDate,
      retreat: computed(() => AppState.currentRetreat),
    };
  },
  components: { RetreatForm },
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: 50vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1589790272257-8c0f79c221da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

.img-fluid {
  object-fit: cover;
}
</style>
