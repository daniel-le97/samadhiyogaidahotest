<template>

<div >
  
  <div class="hero-image">
    <div class="row">
      <div class="col-md-12">
        
      </div>
    </div>
  </div>
  <!-- <div class="img">
  <PersonComponent/>
  </div> -->
<div class="container p-5">
  <div class="row">
    <div class="col-md-12">
    <div class="card border-0 elevation-6 p-5">
      <form @submit.prevent="handleSubmit()">
<div class="form-floating mb-3">
  <input
    type="text"
    class="form-control" name="name" id="name" placeholder="">
  <label for="name">Name</label>
</div>
<div class="form-floating mb-3">
  <input
    type="text"
    class="form-control" name="email" id="email" placeholder="">
  <label for="email">Email</label>
</div>

<div class="form-floating mb-3">
<div class="mb-3">
  <label for="" class=""></label>
  <textarea class="form-control" name="" id="" rows="3"></textarea>
</div>
  <label for="formId1">Name</label>
</div>
      </form>
    </div>
    </div>
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
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed; 
}

</style>
