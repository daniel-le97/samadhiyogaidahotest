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
  <!-- <RetreatForm /> -->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="font-1 text-dark display-2">{{ retreat.title }}</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img
           src="https://static.wixstatic.com/media/b8cf7c_5d6c60bf684a4d28b53449c011a1e6b4~mv2.png/v1/fill/w_447,h_597,al_c,q_85,enc_auto/b8cf7c_5d6c60bf684a4d28b53449c011a1e6b4~mv2.png"
            alt=""
            class="img-fluid rounded-4 elevation-6 h-100"
          />
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-12 mb-3">
              <img
                :src="retreat.coverImg"
                alt=""
                class="img-fluid rounded-4 elevation-6"
              />
            </div>
            <div class="col-md-6">
              <img
                src="https://static.wixstatic.com/media/b8cf7c_4d877974bcb8417ca80ddc531f457acc~mv2.png/v1/fill/w_782,h_571,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b8cf7c_4d877974bcb8417ca80ddc531f457acc~mv2.png"
                alt=""
                class="img-fluid rounded-4 elevation-6"
              />
            </div>
            <div class="col-md-6">
              <img
                src="https://static.wixstatic.com/media/b8cf7c_6bc5e680c17a494d9f4bd16b0a29960d~mv2.png/v1/fill/w_783,h_571,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b8cf7c_6bc5e680c17a494d9f4bd16b0a29960d~mv2.png"
                alt=""
                class="img-fluid rounded-4 elevation-6"
              />
            </div>
          </div>
        </div>

        <div class="mt-3">
          <button
            class="btn btn-dark font-2 fs-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#retreatImages"
            aria-expanded="false"
            aria-controls="retreatImages"
          >
            More Images
          </button>
        </div>

        <div class="collapse" id="retreatImages">
          <div class="container my-4">
            <div class="masonry">
              <div
                @click="setActiveImage(f)"
                data-bs-toggle="modal"
                data-bs-target="#activeImage"
                class="card border-0 elevation-6 bg-transparent my-3 rounded-4"
                v-for="f in retreat.featuredImgs"
              >
                <img :src="f" alt="" class="img-fluid hover-image rounded-4 selectable" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row my-5">
        <div class="col-md-6">
          <div class="">
            <p class="display-3 font-2">{{ retreat?.location?.address }}</p>
          </div>
          <div class="">
            <p class="fs-5 text-start">{{ retreat?.location?.description }}</p>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <img
            :src="retreat?.location?.img"
            alt=""
            class="img-fluid rounded-4 elevation-5 w-50"
          />
        </div>
        <div class="row my-5">
          <div class="col-md-6 d-flex justify-content-center">
            <img
              :src="retreat?.schedule?.img"
              alt=""
              class="img-fluid elevation-5 rounded-4 w-75"
            />
          </div>
          <div class="col-md-6">
            <div class="">
              <p class="display-3 font-2">Typical Daily Schedule</p>
            </div>
            <div class="">
              <p class="fs-5 text-start">
                {{ retreat?.schedule?.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-6">
            <div class="">
              <p class="display-3 font-2">Food {{ retreat?.food?.chef }}</p>
            </div>
            <div class="">
              <p class="fs-5 text-start">{{ retreat?.food?.description }}</p>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              class="img-fluid elevation-5 rounded-4 w-75"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-12 mb-4">
           <h1 class="display-2 font-1 ">
            Check Out Our Past Retreats
          </h1>
        </div>
        <div class="col-md-4" v-for="a in archived">
<ArchivedRetreatCard  :retreat="a" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import ArchivedRetreatCard from "../components/ArchivedRetreatCard.vue";
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
    const retreatDate = AppState.currentRetreat.date;
    onMounted(() => {
      getAllRetreats();
    });
    watchEffect(() => {});

    async function getAllRetreats() {
      try {
        await retreatsService.getAllRetreats();
        // console.log(AppState.currentRetreat);
      } catch (error) {
        Pop.error(error, "[getCurrentRetreat]");
      }
    }
    return {
      editable,
      retreatDate,
      retreat: computed(() => AppState.currentRetreat),
      archived:computed(() => AppState.archivedRetreats),
      setActiveImage(image) {
        AppState.activeImage = image;
      },
    };
  },
  components: { RetreatForm, ArchivedRetreatCard },
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
  transition: all 0.25s ease;
}

.img-fluid:hover {
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transform: scale(1.02);
  filter: brightness(80%);
  transition: all 0.25s ease;
}

.masonry {
  columns: 4;
}
</style>
