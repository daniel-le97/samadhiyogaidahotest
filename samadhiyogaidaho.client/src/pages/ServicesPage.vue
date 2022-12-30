<template>
  <div>
    <section>
      <div class="tsparticles">
        <ParticleComponent />
      </div>
      <div
        class="hero-image d-flex justify-content-center align-items-center flex-column"
      >
        <div class="px-5">
          <h1
            v-motion-slide-top
            :delay="200"
            class="page-title font-1 text-light text-shadow text-center"
          >
            Take A Moment For Yourself
          </h1>
        </div>
        <h4
          v-motion-slide-top
          :delay="400"
          class="font-2 display-6 text-light text-shadow text-center"
        >
          Enrich your life and deepen your practice
        </h4>
      </div>
      <HeroImageDivider />
    </section>

    <!-- <section>
    <div class="container-fluid" style="margin-top: 100px">
      <div class="row justify-content-center">
        <div class="col-md-3 p-5 d-flex justify-content-center">
          <div
            class="card rounded-circle text-dark border-0 elevation-5 "
          >
            <img
              class="img-fluid rounded-circle"
              src="https://images.unsplash.com/photo-1610344264630-e77bc4bf5983?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHx5b2dhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Title"
            />
            <div class="card-img-overlay" v-motion-pop-visible-once>
              <h1 class="text-center">
                Book a Private Class for your Work Group
              </h1>
            </div>
          </div>
        </div>

        <div class="col-md-3 p-5 d-flex justify-content-center">
          <div
            class="card  rounded-circle text-dark border-0 elevation-5 "
          >
            <img
              class="img-fluid rounded-circle"
              src="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Title"
            />
            <div class="card-img-overlay" v-motion-pop-visible-once>
              <h1 class="text-center">Workshops</h1>
            </div>
          </div>
        </div>

        <div class="col-md-3 p-5 d-flex justify-content-center">
          <div
            class="card  rounded-circle text-dark border-0 elevation-5 "
          >
            <img
              class="img-fluid rounded-circle"
              src="https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Title"
            />
            <div class="card-img-overlay" v-motion-pop-visible-once>
              <h1 class="text-center">Inclusive Retreats</h1>
            </div>
          </div>
        </div>

        <div class="col-md-3 p-5 d-flex justify-content-center">
          <div
            class="card rounded-circle text-dark border-0 elevation-5 "
          >
            <img
              class="img-fluid rounded-circle"
              src="https://images.unsplash.com/photo-1636619297905-54f124aa90b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Title"
            />
            <div class="card-img-overlay" v-motion-pop-visible-once>
              <h1 class="text-center">Events</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
    <section class="container mt-5 ">
   
        <div class="row my-5">
          <div class="col-md-12 text-center">
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="display-3 text-dark font-1 underline"
            >
              YOGA SERVICES
            </p>
            <!-- <p class="fs-3 text-pink darken-20 font-2">
              Yoga teaches one how to live in harmony with the universe as well
              as unity with the mind, body, and spirit. It's not about how fast
              or well you can hold a pose it's about feeling each pose and each
              breath.
            </p> -->
            <p v-motion-slide-visible-once-bottom :delay="300" class="fs-4">
              Our yoga services are architected for those seeking balance and
              peace in their everyday life, without rush or worry about
              perfection of technique but taking you into the present moment.
              for individuals wanting to grow their own practice, whether their
              goal be flexibility, enlightenment, better mental health, enrich
              their yoga journey, or to begin their yoga journey.
            </p>
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="fs-4 text-pink darken-20"
            >
              All you have to do is show up and breath.
            </p>
          </div>
        </div>
        <div class="row  my-5">
          <div class="col-md-6">
            <div
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="card border-0 elevation-6"
            >
              <div class="image-box border-0">
                <img
                  src="../assets/img/servicePhoto1.png"
                  alt=""
                  class="img-fluid rounded elevation-6 hover-image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3 mb-md-0">
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="fs-2 fw-bold text-center mt-3 mt-md-0"
            >
              Private classes & Workshops for groups
            </p>
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="fs-5 text-start"
            >
              One of our favorite things to do at Samadhi Yoga Is to host
              private classes & Workshops for groups .We got to lead the amazing
              @onlyjewel personal training group through a 90 minute flow.<br />

              It was a beautiful class and we had refreshments afterwards. It
              gave @onlyjewel clients an opportunity to meet like minded people,
              create connections, and make life long friends all while getting a
              “spiritual workout” in and getting to meditate and breathe
              together.
              <br />
            </p>
            <div
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="card border-0 bg-pink elevation-7"
            >
              <div class="card-body">
                <p class="fs-4">
                  If you have a group of people you’re interested in getting
                  together for a fun class, contact us! Whether that be a work
                  group, a group of your clients, a bachelorette or bachelor
                  party, or just a group of friends, we will work with you to
                  create the class and experience you desire.
                </p>
              </div>
              <div class="d-flex justify-content-center">
                <button
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="btn btn-dark fs-4 font-2"
                >
                  Start booking your private event here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 order-1 order-md-0">
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="fs-2 fw-bold text-center mt-3"
            >
              Why would someone want a private yoga lesson?
            </p>
            <p
              v-motion-slide-visible-once-bottom
              :delay="300"
              class="fs-5 text-start"
            >
              It’s an opportunity for so many things. To improve your practice,
              to improve your postures and make sure they’re anatomically
              correct, to work more in-depth on a certain area, and so much
              more.
              <br />

              There are so many little adjustments that so many of us don’t
              recognize that we need. Proper alignment in Warrior II can prevent
              damage to joint structures, especially in your knees. This is
              vital because the knee is one of the most mechanically complex
              joints in the body.
            </p>
            <div class="card border-0 bg-pink elevation-7">
              <div class="card-body">
                <p v-motion-slide-visible-once-bottom :delay="300" class="fs-5">
                  Interested in your own private yoga lesson?
                </p>
                <p v-motion-slide-visible-once-bottom :delay="300">
                  Katie Alverson Hosts Sessions at the Grove for 90$/Hour or 45$
                  for 1/2 Hour
                </p>

                <p v-motion-slide-visible-once-bottom :delay="300">
                  She also provides At Home Visits for 100$ within an 20 mile
                  radius and an additional $0.50 for every mile extending that
                  radius
                </p>
              </div>
              <div class="d-flex justify-content-center">
                <button
                  v-motion-slide-visible-once-bottom
                  :delay="300"
                  class="btn btn-dark fs-4 font-2"
                >
                  Start your private lesson journey here
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6 order-0 order-md-1">
            <div v-motion-slide-visible-once-bottom :delay="300" class="card">
              <div class="image-box">
                <img
                  src="../assets/img/PrivateLesson.png"
                  alt=""
                  class="img-fluid rounded elevation-6 hover-image"
                />
              </div>
            </div>
          </div>
        </div>
     
    </section>

    <section id="Video-Section">
      <YouTubeSection />
    </section>
  </div>
</template>

<script>
import HeroImageDivider from "../components/MiscComponents/HeroImageDivider.vue";
import ParticleComponent from "../components/MiscComponents/ParticleComponent.vue";

import YouTubeSection from "../components/ServicesPage/YouTubeSection.vue";

export default {
  setup() {
    return {};
  },
  components: { YouTubeSection, ParticleComponent, HeroImageDivider },
};
</script>

<style lang="scss" scoped>

.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1499810631641-541e76d678a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

.card-img-overlay {
  opacity: 0;
  display: none;
  transition: all 0.25s ease;
}
</style>
