<template>
  <div class="container-fluid" style="margin-bottom: 300px">
    <div class="container p-5 mt-5">
      <div class="row">
        <div class="col-md-12">
          <h1
            v-motion-slide-visible-once-left
            class="display-1 font-1 underline text-start"
          >
            My Offerings
          </h1>
          <br />

          <!-- <h2
            v-motion-slide-visible-once-left
            class="display-6 font-1 underline text-lightPink darken-20"
          >
        
          My Offerings
          </h2> -->
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="card border-0 service-card hover-image">
            <img
              src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=WQDZLsPbT7cAX8Li9RC&tn=elLHl9auDysCO0fM&_nc_ht=scontent-fml2-1.xx&oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&oe=639FDFFA"
              alt=""
              class="img-fluid rounded elevation-6"
            />
            <div
              class="card-img-overlay d-flex justify-content-center align-items-center"
            >
              <p class="mb-0 display-4 font-1 text-light text-shadow">
                Pop-Up <br />
                Events
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card border-0 service-card hover-image">
            <img
              src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=WQDZLsPbT7cAX8Li9RC&tn=elLHl9auDysCO0fM&_nc_ht=scontent-fml2-1.xx&oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&oe=639FDFFA"
              alt=""
              class="img-fluid rounded elevation-6"
            />
            <div
              class="card-img-overlay d-flex justify-content-center align-items-center"
            >
              <p class="mb-0 display-4 font-1 text-light text-shadow">
                Workshops
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card border-0 service-card hover-image">
            <img
              src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=WQDZLsPbT7cAX8Li9RC&tn=elLHl9auDysCO0fM&_nc_ht=scontent-fml2-1.xx&oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&oe=639FDFFA"
              alt=""
              class="img-fluid rounded elevation-6"
            />
            <div
              class="card-img-overlay d-flex justify-content-center align-items-center"
            >
              <p class="mb-0 display-4 font-1 text-light text-shadow">
                Private <br />
                Lessons
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card border-0 service-card hover-image">
            <img
              src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/287422540_121522807237476_598088348287290457_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=WQDZLsPbT7cAX8Li9RC&tn=elLHl9auDysCO0fM&_nc_ht=scontent-fml2-1.xx&oh=00_AfA4OiNAOA9uyJm0q19BSSf3QrU0I5h27ZErm1REPEm86w&oe=639FDFFA"
              alt=""
              class="img-fluid rounded elevation-6"
            />
            <div
              class="card-img-overlay d-flex justify-content-center align-items-center"
            >
              <p class="mb-0 display-4 font-1 text-light text-shadow">
                Inclusive <br />
                Retreats
              </p>
            </div>
          </div>
        </div>
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

<style lang="scss" scoped>
.card img {
  filter: brightness(60%);
}
</style>
