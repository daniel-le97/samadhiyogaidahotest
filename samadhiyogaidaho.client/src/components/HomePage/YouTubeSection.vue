<template>
  <div class="container my-5">
    <div class="row">
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
          height="544"
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
          height="544"
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
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
