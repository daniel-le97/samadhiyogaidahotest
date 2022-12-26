<template>
   <div class="mt-4 text-center text-md-start">
          <p
            class="underline fs-2 font-1 border-2 border-bottom  text-pink darken-20"
          >
           {{ schedule.title }}
          </p>

          <div class="d-flex justify-content-center justify-content-md-start">
            <div class="me-3  ">
              <p class="fs-3">{{schedule.time}}</p>

              <a
               :href="schedule.address"
                target="_blank"
                class="darken-20 text-dark font-2 fs-3"
              >
                <i class="mdi mdi-map-marker fs-1 text-pink darken-20"></i
                >{{schedule.location}}</a
              >
            </div>
          </div>
        </div>
</template>

<script>

import { onMounted, ref, watchEffect } from "vue";
import { Schedule } from "../../models/Schedule.js";

export default {
props:{
schedule:{type:Schedule,required:true}
       },
  setup(props) {

    
    onMounted(() => {

    });
    
    return {
 
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
