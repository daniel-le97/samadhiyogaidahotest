<template>
  <div class="row my-5"  v-motion-slide-visible-bottom :delay="200">
   <div class="col-md-6 d-flex align-items-center justify-content-center" >
<img :src="event.img" alt="" class="img-fluid rounded elevation-6 hover-image w-75">
   </div>
   <div class="col-md-6 text-start">
<p class="underline  fs-1 font-1  border-2 border-bottom text-start text-pink darken-20">{{event.title}}</p>
<div class="d-flex">
  <div  class="me-3"><p class="text-start">{{event.startDate}} - {{event.endDate}}</p>

<p class="text-start">{{event.location.place}} </p>
<p class="text-start">{{event.location.address}} </p></div>
<div class="fs-2 font-2">
${{event.cost }}  per   <img src="https://cdn-icons-png.flaticon.com/512/8927/8927683.png" alt="" class="img-fluid" width="80" height="80">

</div>
</div>
<p class="fs-4 text-start">{{event.description}} 
</p>


   </div>
  </div>
  <hr class="mt-4">
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { Event } from "../../models/Event.js";

export default {
props:{
event:{type:Event, required:true}
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
</style>
