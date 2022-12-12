<template>
  <div class="hero-image"></div>
<div class="container-fluid" style="margin-top:100px;">
  <div class="row">
    <div class="col-md-example">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi id ducimus rerum ipsam delectus nulla nam dolorum optio repudiandae exercitationem debitis enim, autem quidem natus officiis nesciunt eius minima at consectetur? Ducimus dignissimos quibusdam mollitia molestiae doloremque necessitatibus optio vero maxime alias ipsam, quae reiciendis porro nisi laborum eaque ratione tempora, accusantium est repudiandae corporis consectetur aliquam amet! Quo obcaecati adipisci, in numquam libero fugiat distinctio esse minima omnis, consectetur quos laboriosam necessitatibus delectus qui sequi odio asperiores error quibusdam, totam iure possimus dolore rerum quaerat nisi? Quaerat nesciunt dicta similique sit. Facere accusantium eius consequuntur pariatur nostrum ducimus ad eum, quibusdam delectus officiis est expedita molestiae possimus!</h1>
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
  height: 50vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed; 
}

</style>
