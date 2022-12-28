<template>
  <div>
    <section>
      <div class="tsparticles">
        <ParticleComponent />
      </div>
      <div
        class="hero-image text-center d-flex flex-column justify-content-center align-content-center"
      >
        <h1
          v-motion-slide-top
          :delay="200"
          class="font-1 text-shadow text-light page-title"
        >
          RETREATS
        </h1>
        <p
          v-motion-slide-top
          :delay="400"
          class="display-6 font-2 text-shadow text-center"
        >
          Escape the hustle and bustle of everyday life and enrich it with a new
          experience
        </p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row my-5 justify-content-center">
          <div
            class="col-md-6 d-md-flex d-none justify-content-center flex-column align-content-center align-items-center"
          >
            <blockquote
              class="font-1 quote text-center"
              v-motion-pop-visible-once
            >
              On an inhale, think of the things that are no longer serving you,
              whatever that may be. Maybe it’s a thought Maybe it’s a feeling
              Maybe it’s a person Or an experience But taking it, And on an
              exhale, choosing consciously to let it go.
            </blockquote>
            <cite v-motion-pop-visible-once>- SamadhiYogaIdaho</cite>
          </div>
        </div>

        <div class="row my-4">
          <div class="col-md-12 text-center">
            <h1 class="font-1 text-dark display-4">{{ retreat.title }}</h1>
          </div>
        </div>

        <div class="row gy-3">
          <div class="col-md-6 text-center ">
            <div class="card elevation-6 border-0 h-100">
              <div class="image-box h-100 ">
                <img
                  v-if="retreat"
                  :src="featuredImg1"
                  alt=""
                  class=" rounded-4 elevation-6  feature-image-1 h-100 "
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row gy-3">
              <div class="col-md-12 mb-3">
                <div class="card elevation-6 border-0">
                  <div class="image-box">
                    <img
                      v-if="retreat"
                      :src="retreat.coverImg"
                      alt=""
                      class=" rounded-4 elevation-6  feature-image"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card elevation-6 border-0">
                  <div class="image-box">
                    <img
                      v-if="retreat"
                      :src="featuredImg2"
                      alt=""
                      class=" rounded-4 elevation-6 feature-image"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card elevation-6 border-0 ">
                  <div class="image-box ">
                    <img
                      :src="featuredImg3"
                      alt=""
                      class=" rounded-4 elevation-6   feature-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-3 sticky-top d-flex justify-content-end">
            <button
              class="btn btn-dark font-2 fs-3 sticky-top"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#retreatImages"
              aria-expanded="false"
              aria-controls="retreatImages"
            >
              More Images <i class="mdi mdi-arrow-collapse-down"></i>
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
                  <img
                    :src="f"
                    alt=""
                    class="img-fluid hover-image rounded-4 selectable h-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-6">
            <div class="card elevation-7 border-0 rounded-4 p-3">
              <div class="d-flex">
                <p class="fs-5 text-muted">4 days / 3nights</p>
              </div>

              <div>
                <p class="fs-5 text-start">{{ retreat?.cost?.text }}</p>
              </div>
              <div class="">
                <p class="fs-5 text-start">Payment Options :</p>
              </div>
              <div class="d-flex text-dark p-2 bg-primary rounded">
                <p class="fs-4 me-3 mb-0">Early Bird</p>
                <p class="fw-bold fs-4 mb-0">USD ${{ retreat?.cost?.price }}</p>
                <p class="mb-0 ms-2">
                  <b class="text-danger">-$200 </b>(if paid in full by Dec 1st)
                </p>
              </div>
              <div class="d-flex text-dark p-2 bg-success rounded my-2">
                <p class="fs-4 me-3 mb-0">Payment Plan</p>
                <p class="fw-bold fs-4 mb-0">USD $247.27</p>
                <p class="mb-0 ms-2">
                  800$ deposit required for couple, $1637.50/$247.27
                </p>
              </div>
              <div class="rounded-4 bg-pink p-2 d-flex justify-content-around">
                <div class="">
                  <p class="mb-0 fs-5">
                    <i class="mdi mdi-calendar bg-muted fs-3"></i> Start Date
                  </p>
                  <p class="fw-semi-bold fs-4">
                    {{ new Date(retreat?.startDate).toLocaleDateString() }}
                  </p>
                </div>
                <div class="">
                  <p class="mb-0 fs-5">
                    <i class="mdi mdi-calendar bg-muted fs-3"></i> End Date
                  </p>
                  <p class="fw-semi-bold fs-4">
                    {{ new Date(retreat?.endDate).toLocaleDateString() }}
                  </p>
                </div>
              </div>
              <div class="fs-5"><p class="">Accepted Payment Methods</p></div>
              <div class="d-flex justify-content-evenly">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4305/4305518.png"
                  alt=""
                  class="img-fluid"
                  width="40"
                  height="20"
                  title="Cash"
                />
                <img
                  src="https://logodix.com/logo/385467.png"
                  alt=""
                  class="img-fluid rounded-5"
                  width="40"
                  height="20"
                  title="Zelle"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968630.png"
                  alt=""
                  class="img-fluid rounded-5"
                  width="40"
                  height="20"
                  title="Apple Pay"
                />

                <img
                  src="https://cdn-icons-png.flaticon.com/512/423/423468.png"
                  alt=""
                  class="img-fluid"
                  width="40"
                  height="20"
                  title="Card payment option does incur a 3% charge each transaction"
                />
              </div>
              <div class="mt-2 fs-5">
                <p class="">
                  Card payment option does incur a 3% charge each transaction
                </p>
              </div>
              <div class="text-center">
                <router-link :to="{ name: 'Contact' }">
                  <button
                    class="btn btn-primary font-2 lighten-10 my-3 fs-3 fw-bold"
                  >
                    CONTACT HOST
                  </button>
                </router-link>
                <p>OR</p>
                <button
                  class="btn btn-outline-primary font-2 lighten-10 my-3 fs-3 fw-bold"
                >
                  BOOK INSTANTLY
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="text-center">
              <h1 class="underline font-2 fs-1">Summary</h1>
            </div>
            <div class="">
              <p class="fs-4 text-start7">{{ retreat?.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container my-5">
        <div class="row justify-content-center gy-3">
          <div class="col-md-6">
            <div class="">
              <h1 class="display-3 font-2 underline">
                {{ retreat?.location?.address }}
              </h1>
            </div>
            <div class="">
              <p class="fs-4 text-start">
                {{ retreat?.location?.description }}
              </p>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <div class="card h-100 border-0 elevation-6">
              <div class="image-box h-100">
                <img
                  :src="retreat?.location?.img"
                  alt=""
                  class="img-fluid rounded-4 elevation-5 location-img h-100"
                />
              </div>
            </div>
          </div>
          <div class="row my-5 gy-5">
            <div class="col-md-6 d-flex justify-content-center">
              <img
                :src="retreat?.schedule?.img"
                alt=""
                class="img-fluid elevation-5 rounded-4 schedule-img"
              />
            </div>
            <div class="col-md-6">
              <div class="text-center">
                <p class="fs-1 font-2 underline">Daily Schedule</p>
              </div>
              <div class="">
                <p class="fs-4 text-start">
                  {{ retreat?.schedule?.description }}
                </p>
              </div>
              <div
                class="row justify-content-center mt-5"
                v-if="retreat?.activities"
              >
                <div class="col-md-6">
                  <div class="card border-0 elevation-orange p-2">
                    <div class="card-body">
                      <p class="fs-4 text-decoration-underline">
                        Optional Activities
                      </p>
                      <ul>
                        <li v-for="a in retreat?.activities">
                          <p class="fs-5 text-start">
                            {{ a }}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="container my-5">
          <div class="row gy-3">
            <div class="col-md-5">
              <div class="text-center" v-motion-slide-visible-once-left>
                <p class="fs-1 mb-0 underline">Food</p>
                <p class="fs-2  text-lightPink darken-20 font-2">
                  Featuring {{ retreat?.food?.chef }}
                </p>
              </div>
              <div class="">
                <p class="fs-4 text-start">{{ retreat?.food?.description }}</p>
              </div>
            </div>
            <div class="col-md-7">
              <div v-motion-slide-visible-once-right>
                <FoodImageSwiper v-if="retreat?.food?.imgs" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <h1
              v-motion-slide-visible-once-top
              class="fs-1 font-2 underline"
            >
              Accommodations
            </h1>
            <p v-motion-slide-visible-once-top class="fs-4 text-start">
              {{ retreat?.accommodations?.description }}
            </p>
          </div>
          <div
            class="col-md-10 d-flex align-items-center justify-content-center elevation-orange"
          >
            <AccommodationSwiper v-motion-slide-visible-once-bottom />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container my-5">
        <div class="row gy-3">
          <div class="col-md-12 text-center">
            <h1
              v-motion-slide-visible-once-left
              class="fs-1 font-2 underline"
            >
              FAQS
            </h1>
          </div>
        </div>
        <div
          v-motion-slide-visible-once-bottom
          class="accordion border-0"
          id="accordionExample"
        >
          <div
            class="accordion-item border-0"
            v-for="(f, index) in retreat?.FAQS"
          >
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button text-dark font-2 fs-3 bg-transparent border-0"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#collapse${index.toString()}`"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <i class="mdi mdi-help-circle me-3"></i> {{ f.question }}
              </button>
            </h2>
            <div
              :id="`collapse${index.toString()}`"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p class="fs-3">{{ f.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container my-5" v-for="a in archived">
        <div class="row">
          <div class="col-md-12 mb-4 text-center">
            <p class="display-4 font-1 ">  </p>
        
            <h1 class="fs-1 font-1 underline mb-0">{{ a.title }} -  {{ new Date(a.startDate).toLocaleString('default',{month:'short'}) }},  {{new Date(a.startDate).getFullYear()}}</h1>
            <p class="fs-3 text-peach  "> {{ a.location.address }}  </p> 
          </div>
          <div class="col-md-12 mb-4 text-center "></div>

          <div class="container my-4">
            <div class="masonry2">
              <div
                @click="setActiveImage(image)"
                data-bs-toggle="modal"
                data-bs-target="#activeImage"
                class="card border-0 elevation-6 bg-transparent my-3 rounded-4"
                v-for="image in a.featuredImgs"
              >
                <img
                  v-if="image"
                  :src="image"
                  alt=""
                  class="img-fluid hover-image rounded selectable"
                />

                <img
                  v-else
                  src=""
                  alt=""
                  class="img-fluid hover-image rounded-4 selectable skeleton-loader"
                />
              </div>
            </div>
          </div>
        </div>
           <hr>
      </div>
   
    </section>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import AccommodationSwiper from "../components/RetreatPage/AccommodationSwiper.vue";
import ArchivedRetreatCard from "../components/RetreatPage/ArchivedRetreatCard.vue";
import FoodImageSwiper from "../components/RetreatPage/FoodImageSwiper.vue";
import RetreatForm from "../components/AdminComponents/RetreatForm.vue";
import { retreatsService } from "../services/RetreatsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
// import { onBeforeMount } from "vue";
import ParticleComponent from "../components/PluginComponents/ParticleComponent.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {
      // getAllRetreats();
    });
    async function getAllRetreats() {
      try {
        if (!AppState.currentRetreat) {
          console.log(AppState.currentRetreat);
          await retreatsService.getAllRetreats();
        }
      } catch (error) {
        Pop.error(error, "[getCurrentRetreat]");
      }
    }
    return {
      editable,

      featuredImg1: computed(() =>
        AppState.currentRetreat?.featuredImgs?.slice(0)
      ),
      featuredImg2: computed(() =>
        AppState.currentRetreat?.featuredImgs?.slice(1)
      ),
      featuredImg3: computed(() =>
        AppState.currentRetreat?.featuredImgs?.slice(2)
      ),
      retreat: computed(() => AppState.currentRetreat),
      archived: computed(() => AppState.archivedRetreats),
      allRetreats: computed(() => AppState.retreats),
      setActiveImage(image) {
        AppState.activeImage = image;
      },
    };
  },
  components: {
    RetreatForm,
    ArchivedRetreatCard,
    FoodImageSwiper,
    AccommodationSwiper,
    ParticleComponent,
  },
};
</script>

<style lang="scss" scoped>
.location-img {
  object-fit: cover;
}
.schedule-img {
  width: 75%;

  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
}
.feature-image {
  object-fit: cover;
object-position: center;
  height: 300px;
}
.feature-image-1 {
  object-fit: cover;
  object-position: center;
 

}
.parallax {
  background-size: cover;
  height: 40vh;
  background-position: center;
  background-image: url(https://images.unsplash.com/photo-1576191919769-40424bb34367?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80);
  background-attachment: fixed;
}

.hero-image {
  height: 100vh;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1589790272257-8c0f79c221da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80);
  background-position: center;
  background-attachment: fixed;
}

.masonry {
  columns: 4;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    columns: 1;
  }
}

.masonry2 {
  columns: 6;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    columns: 1;
  }
}
.scrollable-y {
  height: 650px;
}
</style>
