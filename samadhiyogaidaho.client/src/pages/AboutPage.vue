<template>
  <div class="about-page">
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 p-0">
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
              How SamadhiYogaIdaho was born 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-5">
      <div class="row gy-5 justify-content-center">
        <div class="col-md-10">
          <div class=" ">
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="fs-5 text-start text-md-center"
            >
             Back in 2013, Katie took her first yoga class in the hopes of finding some healing. Almost 10 years later, she took the initiative to receive her 200-hour training and found her passion in teaching. She realized that we all need the time and space to push pause on their daily routine.  We need a safe space for healing, breathing, and feeling. That is why Samadhi Yoga Idaho was created, so our community of participants can self-reflect and reconnect with themselves in a beautiful and serene atmosphere.
            </p>
           
          </div>
        </div>
        <div
          class="col-md-6 d-flex flex-column justify-content-center align-items-center"
        >
          <div
            class="card framed border-0"
            v-motion-slide-visible-once-bottom
            :delay="300"
          >
            <div class="image-box">
              <img
                src="../assets/img/KatiePortrait2.jpg"
                alt="Katie Alverson"
                class="img-fluid elevation-6 rounded"
              />
            </div>
          </div>

          <div class="text-center mt-5">
            <img
              v-motion-slide-visible-once-bottom
              :delay="600"
              src="https://www.yogahouse.gr/wp-content/uploads/2016/12/RYT-200-AROUND-BLACK-600x600.jpg"
              alt=""
              width="150"
              height="150"
              class="rounded-circle elevation-6"
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="" v-motion-slide-visible-once-bottom :delay="300">
            <p class="fs-1 font-1 text-center">Katie Alverson</p>
            <p class="fs-4 text-center text-pink darken-20">
              Founder, owner and teacher
            </p>
            <p
              class="fs-5 text-start"
              v-motion-slide-visible-once-bottom
              :delay="300"
            >
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
            <p
              class="fs-5 text-start"
              v-motion-slide-visible-once-bottom
              :delay="300"
            >
           My favorite thing to do in the world is to put together fully inclusive and restorative yoga retreats for people to get to know themselves and their bodies better. I have always been a planner. I love putting together great events, fostering human connection, and bringing humans closer together and closer to their truest, most authentic selves. I want to travel the world and have plans to host retreats globally all around the world someday. I believe that the eight limbs of yoga can help us find peace within ourselves, and accept the deepest, darkest parts of ourselves.

            </p>
            <p
              class="fs-5 text-start"
              v-motion-slide-visible-once-bottom
              :delay="300"
            >
         When I’m not teaching yoga, planning retreats, or working at my day job in finance, you can catch me spending time with my partner and our fur babies either traveling, exploring breweries and wineries, painting oil landscapes and animals, or spending time with family. My favorite place to visit and the place I feel most at peace is the ocean and like to incorporate a water theme in practice often. I’m also a student at Boise State University, getting my bachelor's in business management and I plan to get my doctorate someday.
            </p>
            <!-- <p class="fs-5 text-start">
              In addition to my work as a small business entrepreneur and yoga
              teacher, I am also currently pursuing my bachelor's degree in
              business management. I am driven to constantly learn and grow,
              both personally and professionally.I am passionate about using my
              education and skills to make a positive impact in the world, and I
              believe that by combining my love for business and my passion for
              yoga, I can make a meaningful difference in the lives of others. I
              am excited to see where my journey takes me, and I am grateful for
              the opportunity to learn and grow every step of the way.
            </p> -->
          </div>
        </div>

        <div
          class="col-md-6 d-flex flex-column justify-content-center align-items-center"
          v-motion-slide-visible-once-bottom
          :delay="300"
        >
          <p class="fs-1 font-1">Work With Me</p>
          <p class="fs-5">
            That’s a little about me, thanks for taking the time to get to know
            me and for supporting me and my business! I would love nothing more
            to connect with like minded people to further our practice.
          </p>
          <div class="text-center mb-3">
            <router-link
              :to="{ name: 'Contact' }"
              class="btn btn-dark font-2 fs-3"
            >
              Connect
            </router-link>
          </div>
          <div
            class="card framed border-0 sticky-md-top"
            v-motion-slide-visible-once-bottom
            :delay="300"
          >
            <div class="image-box">
              <img
                src="../assets/img/servicePhoto5.jpg"
                alt="Katie Alverson"
                class="img-fluid elevation-6 rounded"
              />
            </div>
          </div>
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
  @media only screen and (max-width: 768px) {
    background-attachment: scroll;
  }
}
</style>
