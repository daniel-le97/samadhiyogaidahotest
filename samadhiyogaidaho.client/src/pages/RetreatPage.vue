<template>
  <section>
    <div class="hero-image d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-md-12">
          <h1 class=" font-1 text-shadow text-light page-title">
            Embrace Nature
          </h1>
        </div>
      </div>
    </div>
  </section>
  <!-- <RetreatForm /> -->
  <section>
    <div class="container">
      <div class="row my-4">
        <div class="col-md-12">
          <h1 class="font-1 text-dark display-4">{{ retreat.title }}</h1>
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

        <div class="mt-3 sticky-top">
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
                  class="img-fluid hover-image rounded-4 selectable"
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
        <div class="card elevation-6 border-0 rounded-4 p-3">
            <div class="d-flex justify-content-start">
              <p class="fs-5 text-muted">4 days / 3nights</p>
            </div>
            <div class="d-flex text-muted">
              <p class="fs-4 me-3 mb-0">EARLY BIRD</p>
              <p class="fw-bold fs-4 mb-0">USD ${{ retreat?.cost?.price }}</p>
              <p class="mb-0">
                <b class="text-danger">-$200 </b>(if paid in full by Dec 1st)
              </p>
            </div>
            <div
              class="rounded-4 bg-grey lighten-10 p-2 d-flex justify-content-around"
            >
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
            <div class="fs-5"><p class="mb-0">  Accepted Payment Methods</p></div>
<div class="d-flex justify-content-between">

  <img src="https://cdn-icons-png.flaticon.com/512/4305/4305518.png" alt="" class="img-fluid " width="80" height="40">
  <img src="https://logodix.com/logo/385467.png" alt="" class="img-fluid rounded-5" width="80" height="40">
  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968630.png" alt="" class="img-fluid rounded-5" width="80" height="40">

  <img src="https://cdn-icons-png.flaticon.com/512/423/423468.png" alt="" class="img-fluid " width="80" height="40">

</div>
            <div class="text-center">
              <button
                class="btn btn-primary font-2 lighten-10 my-3 fs-3 fw-bold"
              >
                CONTACT HOST
              </button>
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
      <div class=""> <h1>Summary</h1></div>
      <div class="">
        <p class="fs-4"> {{retreat?.description}} </p>
      </div>
    </div>

  </div>
</div>

</section>





  <section>
    <div class="container my-5">
 
           <div class="row ">
        <div class="col-md-6">
          <div class="">
            <h1 class="display-3 font-2">{{ retreat?.location?.address }}</h1>
          </div>
          <div class="">
            <p class="fs-4 text-start">{{ retreat?.location?.description }}</p>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <img
            :src="retreat?.location?.img"
            alt=""
            class="img-fluid rounded-4 elevation-5 "
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
              <p class="fs-4 text-start">
                {{ retreat?.schedule?.description }}
              </p>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="card border-0 elevation-6">
                  <div class="card-body">
                    <p>Partner activities</p>
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
       <div class="row ">
          <div class="col-md-6">
            <div class="">
              <p class="display-3 mb-0">Food</p>
              <p class="display-6 text-muted font-2">
                Featuring {{ retreat?.food?.chef }}
              </p>
            </div>
            <div class="">
              <p class="fs-4 text-start">{{ retreat?.food?.description }}</p>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-end">
            <FoodImageSwiper v-if="retreat?.food?.imgs" />
          </div>
        </div>
  </div>
</section>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <AccommodationSwiper />
        </div>
        <div class="col-md-6">
          <h1 class="display-3 font-2">Accommodations</h1>
          <p class="fs-4 text-start">
            {{ retreat?.accommodations?.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-3 font-2">Cost and Pricing</h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container my-3">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-3 font-2">FAQ'S</h1>
        </div>
      </div>
      <div class="accordion elevation-6 border-0" id="accordionExample">
        <div
          class="accordion-item border-0 elevation-3"
          v-for="(f, index) in retreat?.FAQS"
        >
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6"
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
              <p class=" fs-3">{{ f.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container my-5">
      <div class="row">
        <div class="col-md-12 mb-4">
          <h1 class="display-2 font-1">Check Out Our Past Retreats</h1>
        </div>
        <div class="col-md-4" v-for="a in archived">
          <ArchivedRetreatCard :retreat="a" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import AccommodationSwiper from "../components/AccommodationSwiper.vue";
import ArchivedRetreatCard from "../components/ArchivedRetreatCard.vue";
import FoodImageSwiper from "../components/FoodImageSwiper.vue";
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
      retreat: computed(() => AppState.currentRetreat),
      archived: computed(() => AppState.archivedRetreats),
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
  },
};
</script>

<style lang="scss" scoped>
.hero-image {
  .page-title{
    font-size: 10rem;
  }
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
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    columns: 1;
  }
}
.scrollable-y {
  height: 650px;
}
</style>
