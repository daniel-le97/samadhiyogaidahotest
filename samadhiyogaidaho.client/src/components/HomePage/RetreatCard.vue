<template>
  <div
          class="card elevation-6 text-white text-shadow font-2 border-0 text-uppercase"
        >
          <div class="image-box">
            <img
              class="card-img"
              :src="retreat.coverImg"
              alt="Women's Desert Soul Awakening"
            />
          </div>
          <div
            class="card-img-overlay text-center d-flex flex-column justify-content-center align-content-center"
          >
            <hr />
            <p class="card-title fs-1">{{retreat?.title}}</p>
            <p class="fs-4">IN</p>

            <p class="fs-2">{{retreat?.location?.address}}</p>
              <div class="d-flex justify-content-center">
              <div class=" me-4">
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
            <p>WITH / KATIE ALVERSON</p>
            <hr />
            <p>
           
              <router-link :to="{name: 'Retreats' }"  > 
              
                <button 
               
                class="btn bg-danger text-light text-uppercase fs-5 selectable">
                  Find Out More
                </button>
              </router-link>
            </p>
          </div>
        </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { Retreat } from "../../models/Retreat.js";

export default {
props:{
retreat:{type:Retreat, required:true}
       },
  setup(props) {
    const editable = ref({});
    

    return {
      editable,
      async makeActiveRetreat(){
        AppState.currentRetreat = props.retreat
      }
      }
    }
  }
</script>

<style lang="scss" scoped>

.card .card-img{
  height: 50vh;
  object-fit: cover;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
   
  height: 60vh;
  }


}
</style>
