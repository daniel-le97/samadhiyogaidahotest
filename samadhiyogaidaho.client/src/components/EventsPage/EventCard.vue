<template>
  <div class="row my-5"  v-motion-slide-visible-bottom :delay="200">
   <div class="col-md-6 text-center" >
<img :src="event.img" alt="" class="img-fluid rounded elevation-6 hover-image w-75">
   </div>
   <div class="col-md-6 text-start">
<p class="underline  fs-1 font-1  border-2 border-bottom text-start text-pink darken-20">{{event.title}}</p>
<p class="text-start">{{event.startDate}} </p>
<p class="text-start">{{event.endDate}}</p>
<p class="text-start">{{event.location.place}} </p>
<p class="text-start">{{event.location.address}} </p>
<p class="fs-4 text-start">{{event.description}} 
</p>

<p class="fs-1">{{event.cost}}</p>
   </div>
  </div>
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
