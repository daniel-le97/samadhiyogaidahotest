<template>
  <div class="instagram-feed container-fluid">
<div class="row">
  <div class="col-md-12 d-flex justify-content-center p-5">
<div class="d-flex">
   <img src="../../assets/img/logo.png" alt="" class="rounded-pill img-fluid elevation-6" width="100" height="100">
   <div class="ms-5 d-flex align-items-center">
    <p class="fs-4 ">
      @Samadhiyogaidaho
    </p>
   </div>
</div>
  </div>

  <div class="row justify-content-center">
    <div class="col-md-2 p-0 m-0 g-0 d-flex justify-content-center" v-for="i in 6">

      <img :src="`https://source.unsplash.com/random/${i}`" alt=""  width="200" height="200">
    </div>

  </div>
</div>

  </div>
</template>


<script>
export default {
  setup(){
    const instagramFeed =['https://www.instagram.com/p/CmWqrGPOKbt/','https://www.instagram.com/p/CmFddtwJtuy/','https://www.instagram.com/p/CmVX-BcN4Te/','https://www.instagram.com/p/CmSMEW_JMDN/','https://www.instagram.com/p/CmJwUcJuyRb/','https://www.instagram.com/p/CmEgJPSuQZR/','https://www.instagram.com/p/ClwpBEepxZS/']
    return {
      instagramFeed
    }
  }
}
</script>


<style lang="scss" scoped>
.forcedImg{
  height: 100px;
  width: 100px;
  object-fit: cover;
}
</style>