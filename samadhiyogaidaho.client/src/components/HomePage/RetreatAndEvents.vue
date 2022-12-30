<template>
  <div class="container-md container-fluid py-5">
    <div class="mb-5 text-center ">
      <h1
       v-motion-slide-visible-once-bottom
          :delay="300"
        class="display-1 font-1 text-start text-dark underline"
      >
        Our Retreats
      </h1>
    </div>
    <div class="row justify-content-center gy-5" v-if="retreats">
      <div class="col-md-10" v-for="r in retreats" :key="r.id">
        <RetreatCard  :retreat="r" />
      </div>
  
    </div>
  </div>
</template>

<script>
import { AppState } from "../../AppState.js";
import { computed } from "@vue/reactivity";
import RetreatCard from "./RetreatCard.vue";
import { retreatsService } from "../../services/RetreatsService";
import Pop from "../../utils/Pop";
import { onMounted } from "vue";
export default {
    setup() {
      onMounted(() => {
        getRetreats()
      })
          async function getRetreats() {
      try {
        await retreatsService.getAllRetreats()
      } catch (error) {
        Pop.error(error, "[getRetreats]");
      }
    }

        return {
            retreats: computed(() => AppState.retreats.filter(r=> !r.archived)),
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
