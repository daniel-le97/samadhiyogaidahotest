<template>
 <div class="col-md-12">
 <div class="comment-box">
  
<div class="comment-box-inner elevation-3"> 
<slot>

</slot>
 </div>
  <div class="triangle-comment elevatin"></div>
  <div class="d-flex justify-content-end">
<p class=" comment-date me-3">
   SamadhiYogaIdaho
  </p>
    <!-- <p class="comment-date">
      
      Dec 13, 2022
    </p> -->
  </div>
</div>
<img src="../../assets/img/logo.png" alt="" class="forcedImg  elevation-6 rounded-pill" >
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


.comment-box-inner{
  background: none repeat scroll 0 0 #FEF1EB ;
  border: 0px solid #f9ad8a ;
 border-radius: 5px;
  -webkit-border-radius: 5px;
-moz-border-radius: 5px; 
  padding: 10px;  
 }
.comment-box-inner p{
background: none repeat scroll 0 0 #FEF1EB;
padding: 20px;
 border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px; 
}
.comment-box p.comment-header{
margin: 10px 0;
}
.comment-box p.comment-header span{
  font-weight: bold;
  font-size: 18px;
}
.comment-box p.comment-date{
  text-align: right;
  margin: 10px 0;
  font-weight: bold;
  font-size: 16px;
}

.triangle-comment{
  position: absolute;
	width: 0px;
height: 0px;
border-style: solid;
border-width: 40px 30px 0 0;
border-color: #FEF1EB  transparent transparent transparent;
-moz-transform:rotate(20deg);
-webkit-transform:rotate(20deg);
-o-transform:rotate(20deg);
-ms-transform:rotate(20deg);
 margin: -5px 0 0 50px;  
 z-index: -1;
}
.forcedImg{
  height: 120px;
  width: 80px;
  object-fit: cover;
}

</style>