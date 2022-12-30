<template>
<div class="modal-body bg-transparent text-center d-flex align-items-center justify-content-center border-0">
  <img :src="image" alt="" class=" rounded-1 elevation-6 img-fluid image">
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { logger } from "../../utils/Logger.js"
import Pop from "../../utils/Pop.js";

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
transform: scale(1.2);
max-height: 70vh !important;
//when screen is 768px OR LESS
@media only screen and (max-width: 768px){
transform: scale(0.8);
}
}
</style>
