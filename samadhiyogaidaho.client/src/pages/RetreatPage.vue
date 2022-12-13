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

      <div class="row my-5 ">
  <div class="col-md-8">
          <ul class="nav nav-pills mb-3 justify-content-center d-flex" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="summary-tab" data-bs-toggle="pill" data-bs-target="#summary" type="button" role="tab" aria-controls="summary" aria-selected="true">Summary</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="location-tab" data-bs-toggle="pill" data-bs-target="#location " type="button" role="tab" aria-controls="location " aria-selected="false">Location</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="cost-tab" data-bs-toggle="pill" data-bs-target="#cost" type="button" role="tab" aria-controls="cost" aria-selected="false">Cost</button>
  </li>
  
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="activities-tab" data-bs-toggle="pill" data-bs-target="#activities" type="button" role="tab" aria-controls="activities" aria-selected="false">Activities</button>
  </li>
  
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="summary" role="tabpanel" aria-labelledby="summary-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="location" role="tabpanel" aria-labelledby="location -tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="cost" role="tabpanel" aria-labelledby="cost-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="activities" role="tabpanel" aria-labelledby="activities-tab" tabindex="0">...</div>
 
</div>
  </div>
  <div class="col-md-4 d-flex justify-content-center">
    <div class="card border-0 elevation-5 rounded-4 p-4">
    <button class="btn btn-outline-success"> Price</button>
    </div>
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
  setup(props) {
    const editable = ref({});
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
      retreat: computed(() => AppState.currentRetreat),
    };
  },
  components: { RetreatForm },
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: 100vh;
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
