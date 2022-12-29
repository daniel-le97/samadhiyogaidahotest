<template>
  <div class="about-page">
    <section>
      <div
        class="heroImage d-flex flex-column align-items-center justify-content-center"
      >
        <div class="tsparticles">
          <ParticleTest />
        </div>
        <div class="text-center">
          <h1
            v-motion-slide-top
            :delay="200"
            id="shadow1"
            class="font-1 text-shadow page-title courgette fw-bolder text-light"
          >
            OUR STORY
          </h1>
          <p
            v-motion-slide-top
            :delay="400"
            class="display-6 font-2 text-shadow"
          >
            Why we came to build SamadhiYogaIdaho
          </p>
        </div>
      </div>
    </section>

    <section class="container-fluid mt-5">
      <div class="row px-md-3 gy-5 justify-content-center">
        <div class="col-md-10 text-center">
          <div class="justify-content-center p-2">
            <p 
            
             v-motion-fade-visible :delay="200" class="my-3 fs-5">
              Back in 2013, our founder took her first yoga class in the hopes
              of finding some healing. Almost 10 years later, she took the
              initiative to receive her 200-hour training and found her passion
              in teaching. She realized that people want and need the time and
              space to push pause on their daily routine. They need a safe space
              for healing, breathing, and feeling. That is why Samadhi Yoga
              Idaho was created, so our community of participants can
              self-reflect and reconnect with themselves in a beautiful and
              serene atmosphere.
            </p>
            <p class="fs-5">
           Samadhi is the Sanskrit word for the state in which individual and universal consciousness unite. It is a blissful form of total meditative absorption, reached once the practitioner has moved through the preliminary steps on Patanjal’s eightfold path.

The spiritual significance of Samadhi is profound, since it encompasses self-realization and symbolizes the ultimate connection with the Divine.
            </p>
           
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <img
           v-motion-fade-visible :delay="200"
            src="../assets/img/KatiePortrait.png"
            alt=""
            class="img-fluid framed elevation-5 ms-md-5 rounded katie-portrait"
          />
        </div>

        <div class="col-md-6">
          <div class="" v-motion-fade-visible :delay="200">
            <p class="fs-1 font-1 text-center">Katie Alverson</p>
            <p class="fs-4 text-center text-pink darken-20">Founder, owner and teacher</p>
            <p class="fs-5 text-start">
              Hi there! I'm Katie, and I absolutely love to get to share the
              beauty and peace of yoga with others. After practicing yoga for
              ten years, I decided I wanted to bring yoga to others to enrich
              their lives the same way mine has been enriched and took the
              plunge to get my RYT 200. I teach Baptiste power yoga, Vinyasa
              style, Yin, and Restorative yoga. I love music with my whole soul
              and love to incorporate music into my classes. I love to sing and
              if you're lucky, you might catch me singing in savasana at the end
              of your practice.
            </p>
            <p class="fs-5 text-start">
              My favorite thing to do in the world is to put together fully
              inclusive and restorative yoga retreats for people to get to know
              themselves and their bodies better. I have always been a planner.
              I love putting together great events and being able to bring
              humans closer together and closer to their truest, most authentic
              selves. I want to travel the world and have plans to host retreats
              globally all around the world someday. I believe that you can find
              peace within yourself, and accept the deepest, darkest parts of
              yourself once you accept and practice the eight limbs of yoga in
              your life.
            </p>
            <p class="fs-5 text-start">
              When I’m not teaching yoga, planning retreats, or working at my
              day job in finance, you can catch me spending time with my partner
              and our fur babies either traveling, exploring breweries and
              wineries, painting oil landscapes and animals, or spending time
              with family. My favorite place to visit and the place I feel most
              at peace is the ocean and like to incorporate a water theme in
              practice often. On top of everything else, I’m going to school
              right now to get my bachelor's in business management and plan to
              get my doctorates someday.
            </p>
            <p class="fs-5 text-start">
              That’s a little about me, thanks for taking the time to get to
              know me and for supporting me and my business!
            </p>
          </div>
        </div>

        <div class="col-md-12 my-5">
<p class="fs-1"> WORK WITH ME</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ParticleTest from "../components/MiscComponents/ParticleComponent.vue";
import PersonComponent from "../components/MiscComponents/PersonComponent.vue";

export default {
  setup() {
    return {};
  },
  components: { PersonComponent, ParticleTest },
};
</script>
<style scoped lang="scss">
.katie-portrait {
  @media only screen and (min-width: 1700px) {
    width: 75%;
  }
}

.about-page {
  margin-bottom: 100px;
}

.heroImage {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1643915889122-4376c8deb317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
