<template>
  <div class="">
    <div class="tsparticles">
      <ParticleTest />
    </div>
    <div class="heroImage d-flex flex-column align-items-center justify-content-center">
      <div class="text-center">
        <h1 v-motion-slide-top id="shadow1" class="text-shadow display-1 courgette fw-bolder text-light">
          OUR STORY
        </h1>
        <h3 class="text-shadow">Origin</h3>
      </div>
      <div class="w-75">
        <p v-motion-slide-bottom class="text-light px-md-5 story-text my-3 text-center  text-shadow ">
          Back in 2013, our founder took her first yoga class in the hopes of finding some healing. Almost 10 years
          later, she
          took the initiative to receive her 200-hour training and found her passion in teaching. She realized that
          people want
          (and need) the time and space to push pause on their daily routine. They need a safe space for healing,
          breathing, and
          feeling. That is why Samadhi Yoga Idaho was created, so our community of participants can self-reflect and
          reconnect
          with themselves in a beautiful and serene atmosphere.
        </p>
        <p class="text-light px-md-5 story-text my-3 text-center  text-shadow ">Physical and mental wellbeing are of utmost importance to living a healthy life and require practice and
        dedication. Our
        Small Business provides the setting and guidance you need to strengthen your body, mind and soul. All you have
        to do is
        show up and breathe.</p>
      </div>

    </div>
    <div class="container-fluid mt-5">

      <div class="row mt-5 px-md-3">
        <div class="col-md-6 elevation-6">
          <img
            src="https://scontent.fboi1-1.fna.fbcdn.net/v/t39.30808-6/306519061_129159436532870_6494007048333346057_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZyXKoZ6J5CIAX-iRhfY&_nc_ht=scontent.fboi1-1.fna&oh=00_AfCPQrcs1-iLVW0CLPjhl0-intGdQOE1_KoCweThnqKaAg&oe=639D65A6"
            alt="" class="img-fluid framed my-5 ms-md-5 " >
        </div>
        <div class="col-md-6">
          <p class="display-3"> Katy Alverson</p>
          <p class="display-5">Founder, owner and teacher</p>
          <p class="text-start p-2 fs-4 mt-md-5">Katie believes that to question, to inquire, to seek understanding is a
            core part of what it means to be human. Whether
            its at home or away on a retreat, they are always inspired by the experiences of life. She believes the core
            of a
            healthy person is in the wellbeing of their body, mind, and soul.</p>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import ParticleTest from "../components/PluginComponents/ParticleComponent.vue";
import PersonComponent from "../components/PersonComponent.vue";

export default {
  setup() {
    return {};
  },
  components: { PersonComponent, ParticleTest },
};
</script>
<style scoped>
.heroImage {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1643915889122-4376c8deb317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

.story-text{
  font-size: 20pt;
}

.framed {
  height: 40em;
  object-fit: cover;

  box-shadow:
    -50px -50px 0 -40px var(--darkPink),
    50px 50px 0 -40px var(--darkPink);
}

@media only screen and (max-width: 768px) {
  .story-text{
    font-size: 13pt;
  }
}
</style>
