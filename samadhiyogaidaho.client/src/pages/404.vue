<template>
 <div class="container not-found">
   <div class="row">
     <div class="col-md-12 text-center">
       <h1 class="display-1 font-1">(404) Page NotFound</h1>
       <img src="../assets/img/not-found.svg" alt="">
      </div>
     <div class=" d-flex justify-content-center mt-4">
    <router-link :to="{name: 'Home'}"> 
       <button class="btn btn-dark fs-1">Home</button>
    </router-link>
     </div>
   </div>
 </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
.not-found{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px){
  transform: scale(0.4);
  }
  //when screen is 768px OR LESS
  @media only screen and (max-width: 1080px){
   transform: scale(0.4);
  }
}
</style>