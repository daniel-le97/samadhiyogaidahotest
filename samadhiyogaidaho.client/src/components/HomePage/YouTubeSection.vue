<template>
  <div class="container my-5">
    <div class="row">
<CommentBox>
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
</CommentBox>

      <div class="col-md-12 d-flex justify-content-center mb-5">
        <iframe
          v-motion-slide-visible-bottom
          :delay="100"
          width="950"
          height="544"
          src="https://www.youtube.com/embed/BYTDS1hw9kg"
          title="Gentle morning stretch and flow"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="rounded elevation-6"
        ></iframe>
      </div>
      <div class="col-md-6">
        <iframe
          v-motion-slide-visible-left
          width="550"
          height="344"
          src="https://www.youtube.com/embed/a8pro3zdh44"
          title="Gentle Thanksgiving Flow"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="rounded elevation-6"
        ></iframe>
      </div>
      <div class="col-md-6">
        <iframe
          v-motion-slide-visible-right
          width="550"
          height="344"
          src="https://www.youtube.com/embed/wSV2Vtf9318"
          title="Heart opening Beginners Flow"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="rounded elevation-6"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import CommentBox from "../MiscComponents/CommentBox.vue";

export default {
    setup() {
        return {};
    },
    components: { CommentBox }
};
</script>

<style lang="scss" scoped></style>
