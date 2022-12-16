<template>

  <div class="hero-image  d-flex flex-column justify-content-center align-items-center">
    <h1 class="display-1 text-light text-shadow font-1 text-wrap">Join our Events </h1>
        <p class="font-1 text-light text-shadow display-6">Enjoy an enriching and memorable experience</p>
  </div>



<div class="container my-5">
  <div class="row">
    <div class="col-md-12">
 <div class="comment-box">
  
<div class="comment-box-inner elevation-3"> 
    <p class="fs-4 text-start">I have been working hard behind the scenes getting several classes and events set up for 2023! <br>
        Space will be extremely limited at each event. DM us today or call the Grove Fitness Club and Spa to sign up!

Our pop up schedule for 2023 will be posted soon so you can have an idea and plan for events you’d like to attend next year.
</p>  

 </div>
  <div class="triangle-comment elevatin"></div>
  <div class="d-flex justify-content-end">
<p class=" comment-date me-3">
   SamadhiYogaIdaho
  </p>
    <p class="comment-date">
      
      Dec 13, 2022
    </p>
  </div>
</div>
<img src="../assets/img/Screenshot_4.png" alt="" class="forcedImg  elevation-6 rounded-pill" >
    </div>
  </div>

<hr class="mt-4">

  <div class="row my-5"  v-motion-slide-visible-bottom :delay="200">
   <div class="col-md-6 text-center" >
<img src="../assets/img/Event1.png" alt="" class="img-fluid rounded elevation-6 hover-image w-75">
   </div>
   <div class="col-md-6 text-start">
<p class="underline  fs-1 font-1  border-2 border-bottom text-start text-pink darken-20">New Years Day Yoga Flow</p>
<p class="text-start">Sunday, January 1, 2023 </p>
<p class="text-start">12:00 PM - 1:15PM </p>
<p class="fs-4 text-start">Start out 2023 right by taking an hour for yourself the first day of the year and remind yourself that you are your priority for 2023. 
</p>
<p class="fs-4 text-start">We will be meeting at Grove Fitness Club and Spa where we will do a vinyasa flow, meditation and a few journaling questions to get you set up for success for your year</p>
<p class="fs-1">$25 per person</p>
   </div>
  </div>
  <div class="row my-5"  v-motion-slide-visible-bottom :delay="200">
   <div class="col-md-6 text-center">
<img src="../assets/img/Event2.png" alt="" class="img-fluid rounded elevation-6 hover-image w-75">
   </div>
   <div class="col-md-6 text-start">
<p class=" underline fs-1 font-1  border-2 border-bottom text-start text-pink darken-20">Beginners Yoga Workshop</p>
<p class="text-start">Sunday, February 5, 2023 </p>
<p class="text-start">12:00 PM - 2:00PM </p>
<p class="fs-4 text-start">A beginners class about the fundamentals of yoga. Learn basic postures and basic flow to take and practice at home. 
</p>
<p class="fs-4 text-start">For those who are brand new or newer to yoga. this workshop will be two hours full of education,posture,adjustments,and learning names and postures. We will send you home with a little vinyasa flow for you to be able to practive at home</p>
<p class="fs-1">$35 per person</p>
   </div>
  </div>
  <div class="row my-5"  v-motion-slide-visible-bottom :delay="200">
   <div class="col-md-6 text-center">
<img src="../assets/img/Event3.png" alt="" class="img-fluid rounded elevation-6 hover-image w-75">
   </div>
   <div class="col-md-6 text-start">
<p class=" underline  fs-1 font-1  border-2 border-bottom text-start text-pink darken-20">Alignment & Posture Workshop</p>
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
.forcedImg{
  height: 120px;
  width: 80px;
  object-fit: cover;
}
.hero-image{
  h1{
font-size: 8rem;

  }
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1590049740844-b670996635ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed; 
}


body{
font-family:Helvetica,Arial,sans-serif; 
}


.comment-box-inner{
  background: none repeat scroll 0 0 #FEF1EB ;
  border: 0px solid #f9ad8a ;
 border-radius: 5px;
  -webkit-border-radius: 5px;
-moz-border-radius: 5px; 
  padding: 10px;  
 }
.comment-box-inner p{
background: none repeat scroll 0 0 #FEF1EB;
padding: 20px;
 border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px; 
}
.comment-box p.comment-header{
margin: 10px 0;
}
.comment-box p.comment-header span{
  font-weight: bold;
  font-size: 18px;
}
.comment-box p.comment-date{
  text-align: right;
  margin: 10px 0;
  font-weight: bold;
  font-size: 16px;
}

.triangle-comment{
  position: absolute;
	width: 0px;
height: 0px;
border-style: solid;
border-width: 40px 30px 0 0;
border-color: #FEF1EB  transparent transparent transparent;
-moz-transform:rotate(20deg);
-webkit-transform:rotate(20deg);
-o-transform:rotate(20deg);
-ms-transform:rotate(20deg);
 margin: -5px 0 0 50px;  
 z-index: -1;
}


</style>
