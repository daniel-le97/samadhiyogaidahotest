<template>
  <div class="container-md container-fluid my-5">
    <div class="mb-5 text-center ">
      <h1
        v-motion-slide-visible-once-left
        class="display-1 font-1 text-start underline"
      >
        Our Retreats
      </h1>
    </div>
    <div class="row justify-content-center gy-5">
      <div class="col-md-12" v-for="r in retreats" :key="r.id">
        <RetreatCard  :retreat="r" />
      </div>
  
    </div>
  </div>
</template>

<script>
import { AppState } from "../../AppState.js";
import { computed } from "@vue/reactivity";
import RetreatCard from "./RetreatCard.vue";
export default {
    setup() {
        return {
            retreats: computed(() => AppState.retreats),
        };
    },
    components: { RetreatCard }
};
</script>

<style lang="scss" scoped>
.card-img{
  height: 60vh;
  object-fit: cover;
}

//when screen is 768px OR LESS
@media only screen and (max-width: 768px){

}
</style>
