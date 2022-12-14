<template>
<div class="modal-body bg-transparent text-center">
  <img :src="image" alt="" class="image rounded-1 elevation-6">
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
      image:computed(()=> AppState.activeImage)
      }
    }
  }
</script>

<style lang="scss" scoped>
.image{
position: absolute;
right: -60%;
bottom: -500px;
  height: 70vh;
  width: 70vw;
}
</style>
