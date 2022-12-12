<template>
  <div
  
  v-motion-pop-visible
  class="container mt-5 image d-flex align-items-center  rounded flex-column justify-content-center">
    
    <!-- <div class="w-100 my-4">
      <form @submit.prevent="handleSubmit()">

        <div class="form-floating p-0 w-100">
          <input
            type="text"
            class="form-control" name="email" id="email" placeholder="">
          <label for="email">Email</label>
        </div>
        <button class="btn btn-dark w-25 my-2 fs-5 py-2" type="submit">Send</button>
      </form>
    </div> -->


     <div class="container mailing-list my-2">
    <div class="row">
  
    
      <div class="col-md-6">
          <div
          class="d-flex rounded-pill  bg-white align-items-center elevation-5"
        >
          <input
            type="text"
            name=""
            id=""
            class="form-control rounded-pill p-3 border-0 bg-transparent"
            placeholder="Name"
          />
      
        </div>
      </div>
      <div class="col-md-6">
          <div
          class="d-flex rounded-pill  bg-white align-items-center elevation-5"
        >
          <input
            type="text"
            name=""
            id=""
            class="form-control rounded-pill p-3  border-0 bg-transparent"
            placeholder="(optional) Phone Number"
          />
         
        </div>
      </div>
        <div class="col-md-12 my-4">
        <div
          class="d-flex rounded-pill p-1 bg-white align-items-center elevation-5"
        >
          <input
            type="text"
            name=""
            id=""
            class="form-control rounded-pill p-3 mx-2 border-0 bg-white"
            placeholder="Enter email address"
          />
          <div class="">
            <button
              class="btn btn-dark fw-bold elevation-6 rounded-pill py-4 px-5"
            >
              SUBMIT
            </button>
          </div>
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
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,
    };
  },
};
</script>

<style lang="scss" scoped>


</style>
