<template>
  <div class="container-fluid my-5 py-5">
    <div class="row">
      <div class="col-md-12"></div>
    </div>
    <div class="row justify-content-center">
      <!-- <CommentBox>
  <p class="fs-4 text-start">
    Bend so you don’t break.
Breathe so you don’t die.
Meditate so you learn to feel.
Learn to just be.
<br>
To release the anticipation and anxiety and expectations.
To be compassionate with yourself.
<br>
Know that you are enough, just as you are.
Don’t break. Just be. Just breathe. Just love. Just live.
 <br>

<b>It’s that simple.</b>
  </p>
</CommentBox> -->

      <div class="row justify-content-center">
        <div class="col-md-8 my-5">
          <p class="font-2 fs-4">
            Starting in 2022 I began recording a mix of Online class series, and
            recorded content that can be accessed on your own time. Our online
            offerings are to meant to help you experience the beauty and art of
            transformation that takes place within yoga from the comfort of your
            own home and integrate it into your daily life
          </p>
          <p class="font-2 fs-4 fw-bold">
            There Will be a new video every two weeks!
          </p>
        </div>
      </div>

      <div id="curator-feed-default-feed-layout">
        <a href="https://curator.io" target="_blank" class="crt-logo crt-tag mt-3 "
          >Powered by Curator.io</a
        >
      </div>
  
    </div>
  </div>
</template>

<script>
import CommentBox from "../MiscComponents/CommentBox.vue";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(()=>{
      (function(){
var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
i.src="https://cdn.curator.io/published/47ef8422-eb07-4f6b-93e6-3b83561a5cf1.js";
e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();
    })
    return {};
  },
  components: { CommentBox },
};
</script>

<style lang="scss" scoped>
.script {
  border-radius: 50%;
}
.card {
  margin: 4px;
}
iframe {
  height: 20rem;
  margin: 4px;
}

</style>
