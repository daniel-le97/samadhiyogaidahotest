<template>
  <swiper
    :grabCursor="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      v-for="a in retreat?.accommodations?.rooms"
      class="bg-white p-3 d-flex flex-column"
    >
      <div class="d-md-flex text-dark">
        <img :src="a.img" alt="" class="img-fluid hover-image rounded" />
      </div>
      <div class="d-md-flex flex-column bg-white ms-4 mt-3 mt-md-0">
        <p class="font-2 fs-3 text-dark">{{ a.description }}</p>
        <p class="font-2 fs-3 text-pink darken-20">
          Available:
          <b :class="a.available ? 'text-success darken-30' : 'text-danger'"
            >{{ a.available }}
          </b>
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Retreat } from "../../models/Retreat.js";
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState.js";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      retreat: computed(() => AppState.currentRetreat),
      modules: [Navigation],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  width: auto;
  height: auto;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
</style>
