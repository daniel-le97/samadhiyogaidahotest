<template>
  <div class="card elevation-3">
    <div class="d-flex justify-content-center">
      <img
        src="https://d2ph5fj80uercy.cloudfront.net/04/cat3676.jpg"
        alt=""
        class="img-fluid rounded mt-2 elevation-4"
      />
    </div>
    <div class="card-body">
      <div class="border-bottom border-dark border-3">
        <h5>{{ stats.title }}</h5>
      </div>
      <div class="d-flex justify-content-end text-shadow mt-2">
        <h6>{{ stats.sub }}</h6>
      </div>
      <div>
        <small>{{ stats.description }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: { type: Object },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
