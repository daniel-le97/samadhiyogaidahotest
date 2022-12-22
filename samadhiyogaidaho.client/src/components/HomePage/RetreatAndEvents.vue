<template>
  <div class="container-md container-fluid p-5">
    <div class="mb-5 text-center">
      <h1
        v-motion-slide-visible-once-left
        class="display-1 font-1 text-start underline"
      >
        Our Retreats
      </h1>
    </div>
    <div class="row justify-content-center gy-5">
      <div class="col-md-12">
        <div
          class="card elevation-6 text-white text-shadow font-2 border-0 text-uppercase"
        >
          <div class="image-box">
            <img
              class="card-img"
              src="https://images.unsplash.com/photo-1513194634145-886650cb997a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Women's Desert Soul Awakening"
            />
          </div>
          <div
            class="card-img-overlay text-center d-flex flex-column justify-content-center align-content-center"
          >
            <hr />
            <h4 class="card-title display-3">Couple's Rejuvenation</h4>
            <p class="display-6">IN</p>

            <p class="display-6">Garden Valley, Idaho</p>
            <p class="display-6">March 2023</p>
            <p>WITH / KATIE ALVERSON</p>
            <hr />
            <p>
              <button class="btn bg-danger text-light text-uppercase fs-5">
                Find Out More
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div
          class="card elevation-6 bg-dark text-white text-shadow font-2 border-0 text-uppercase"
        >
          <div class="image-box">
            <img
              class="card-img"
              src="https://images.unsplash.com/photo-1616795795564-fc2f3b2e9723?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt="Women's Desert Soul Awakening"
            />
          </div>
          <div
            class="card-img-overlay text-center d-flex flex-column justify-content-center align-content-center"
          >
            <hr />

            <h4 class="card-title display-3">Women's Desert Soul Awakening</h4>
            <p class="display-6">IN</p>
            <p class="display-6">Joshua Tree National Park</p>
            <p class="display-6">August 2023</p>
            <p>WITH / KATIE ALVERSON</p>
            <hr />
            <p>
              <button class="btn bg-danger text-light text-uppercase fs-5">
                Find Out More
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.card{
  max-height: 40vh;
}
</style>
