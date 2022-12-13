<template>
  <div class="hero-image"></div>
  <div class="container-fluid" style="margin-top: 100px">
    <div class="row justify-content-center">
      <div class="col-md-6 p-5 d-flex justify-content-center">
        <div class="card rounded-circle text-dark border-0 elevation-5 rounded-1 ">
          <img
            class="card-img  rounded-circle"
            src="http://thiscatdoesnotexist.com"
            alt="Title"
          />
          <div class="card-img-overlay ">
            <h1 class=""> TESTING</h1>
          </div>
        </div>
      </div>
 
   
      <div class="col-md-6 p-5 d-flex justify-content-center">
        <div class="card rounded-circle text-dark border-0 elevation-5 rounded-1 ">
          <img
            class="card-img  rounded-circle"
            src="http://thiscatdoesnotexist.com"
            alt="Title"
          />
          <div class="card-img-overlay ">
            <h1 class=""> TESTING</h1>
          </div>
        </div>
      </div>
 
   
      <div class="col-md-6 p-5 d-flex justify-content-center">
        <div class="card rounded-circle text-dark border-0 elevation-5 rounded-1 ">
          <img
            class="card-img  rounded-circle"
            src="http://thiscatdoesnotexist.com"
            alt="Title"
          />
          <div class="card-img-overlay ">
            <h1 class=""> TESTING</h1>
          </div>
        </div>
      </div>
 
   
      <div class="col-md-6 p-5 d-flex justify-content-center">
        <div class="card rounded-circle text-dark border-0 elevation-5 rounded-1 ">
          <img
            class="card-img  rounded-circle"
            src="http://thiscatdoesnotexist.com"
            alt="Title"
          />
          <div class="card-img-overlay ">
            <h1 class=""> TESTING</h1>
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
.hero-image {
  height: 50vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1540206063137-4a88ca974d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
.card{
height: 400px;
width: 400px;
object-fit:cover ;
}

.card-img-overlay{
  opacity: 0;
    transition: all 0.25s ease;

}
.card img {
    transition: all 0.25s ease;  
}
.card:hover{
     transition: all 0.25s ease;
     box-shadow: none;
background: transparent;
img{
  opacity: 0;
      transition: all 0.25s ease;
}
  .card-img-overlay{
    opacity: 1;
    transition: all 0.25s ease;
  }
}
</style>
