<template>
<div class="container">
  <div class="row">
   <div class="col-md-6">
<img src="" alt="">
   </div>
   <div class="col-md-6">
<p class="fs-2 font-1 border border-2 border-bottom">New Years Day Yoga Flow</p>
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
</style>
