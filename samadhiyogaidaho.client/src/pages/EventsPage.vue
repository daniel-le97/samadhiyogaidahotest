<template>

  <div class="hero-image d-flex justify-content-center align-items-center">
    <h1 class="display-1 text-light text-shadow font-1 text-wrap">Join In On Our Events  </h1>
  </div>

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1717.5793570263088!2d-116.20691322859092!3d43.61460617641476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aef8e52beed181%3A0xc28bec666be4f938!2sGrove%20Fitness%20Club%20and%20Spa!5e0!3m2!1sen!2sus!4v1671163124641!5m2!1sen!2sus" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>

<div class="container my-5">
  <div class="row my-5">
   <div class="col-md-6">
<img src="../assets/img/Event1.png" alt="" class="img-fluid rounded elevation-6 hover-image">
   </div>
   <div class="col-md-6 text-start">
<p class="fs-1 font-1  border-2 border-bottom text-start text-pink darken-20">New Years Day Yoga Flow</p>
<p class="text-start">Sunday, January 1, 2023 </p>
<p class="text-start">12:00 PM - 1:15PM </p>
<p class="fs-4 text-start">Start out 2023 right by taking an hour for yourself the first day of the year and remind yourself that you are your priority for 2023. 
</p>
<p class="fs-4 text-start">We will be meeting at Grove Fitness Club and Spa where we will do a vinyasa flow, meditation and a few journaling questions to get you set up for success for your year</p>
<p class="fs-1">$25 per person</p>
   </div>
  </div>
  <div class="row my-5">
   <div class="col-md-6">
<img src="../assets/img/Event2.png" alt="" class="img-fluid rounded elevation-6 hover-image">
   </div>
   <div class="col-md-6 text-start">
<p class="fs-1 font-1  border-2 border-bottom text-start text-pink darken-20">Beginners Yoga Workshop</p>
<p class="text-start">Sunday, February 5, 2023 </p>
<p class="text-start">12:00 PM - 2:00PM </p>
<p class="fs-4 text-start">A beginners class about the fundamentals of yoga. Learn basic postures and basic flow to take and practice at home. 
</p>
<p class="fs-4 text-start">For those who are brand new or newer to yoga. this workshop will be two hours full of education,posture,adjustments,and learning names and postures. We will send you home with a little vinyasa flow for you to be able to practive at home</p>
<p class="fs-1">$35 per person</p>
   </div>
  </div>
  <div class="row my-5">
   <div class="col-md-6">
<img src="../assets/img/Event3.png" alt="" class="img-fluid rounded elevation-6 hover-image">
   </div>
   <div class="col-md-6 text-start">
<p class="fs-1 font-1  border-2 border-bottom text-start text-pink darken-20">Alignment & Posture Workshop</p>
<p class="text-start">Sunday, February 5, 2023 </p>
<p class="text-start">12:00 PM - 2:00PM </p>
<p class="fs-4 text-start"> A posture and alignment workshop for those who are wanting to deepen their practice or and get hands on assistance and adjustments to make the most is true work the best for you. 
</p>
<p class="fs-4 text-start">For those who already know the basics of yoga but are wanting to know the perfect alignment for your body and different postures fit for you</p>
<p class="fs-1">$35 per person</p>
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
