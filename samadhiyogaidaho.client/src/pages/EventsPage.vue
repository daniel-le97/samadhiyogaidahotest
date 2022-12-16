<template>

  <div class="hero-image d-flex justify-content-center align-items-center">
    <h1 class="display-1 text-light text-shadow font-1 text-wrap">Join In On Our Events  </h1>
  </div>
<div class="container my-5">
  <div class="row my-5">
   <div class="col-md-6">
<img src="../assets/img/Event1.png" alt="" class="img-fluid rounded elevation-6 hover-image">
   </div>
   <div class="col-md-6 text-start">
<p class="fs-2 font-1  border-2 border-bottom text-start text-pink darken-20">New Years Day Yoga Flow</p>
<p class="text-start">Sunday, January 1, 2023 </p>
<p class="text-start">12:00 PM - 1:15PM </p>
<p class="fs-4 text-start">Start out 2023 right by taking an hour for yourself the first day of the year and remind yourself that you are your priority for 2023. 
</p>
<p class="fs-4 text-start">We will be meeting at Grove Fitness Club and Spa where we will do a vinyasa flow, meditation and a few journaling questions to get you set up for success for your year</p>
<p class="fs-1">$25</p>
   </div>
  </div>
  <div class="row my-5">
   <div class="col-md-6">
<img src="../assets/img/Event1.png" alt="" class="img-fluid rounded elevation-6 hover-image">
   </div>
   <div class="col-md-6 text-start">
<p class="fs-2 font-1  border-2 border-bottom text-start text-pink darken-20">Beginners Yoga Workshop</p>
<p class="text-start">Sunday, February 5, 2023 </p>
<p class="text-start">12:00 PM - 2:00PM </p>
<p class="fs-4 text-start">A beginners class about the fundamentals of yoga. Learn basic postures and basic flow to take and practice at home. 
</p>
<p class="fs-4 text-start">We will be meeting at Grove Fitness Club and Spa where we will do a vinyasa flow, meditation and a few journaling questions to get you set up for success for your year</p>
<p class="fs-1">$25</p>
   </div>
  </div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
props:{

       },
  setup(props) {
    const editable = ref({});
    
    onMounted(() => {

    });
    watchEffect(() => {});

    return {
      editable,
      }
    }
  }
</script>

<style lang="scss" scoped>
.hero-image{
  h1{
font-size: 8rem;

  }
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1529573813483-53bd9ede667e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed; 
}
</style>
