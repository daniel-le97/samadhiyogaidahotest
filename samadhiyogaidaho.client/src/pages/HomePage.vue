<template>
  <div>
    <section id="Hero-Section">
      <div class="position-relative px-0">
        <div class="tsparticles">
          <ParticleComponent />
        </div>
        <div
          class="hero-image d-flex flex-column justify-content-center align-items-center"
        >
          <div style="margin-top: 80px" class="text-shadow container">
            <h5
              v-motion
              :initial="{
                y: 100,
                opacity: 0,
              }"
              :enter="{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  stiffness: 250,
                  damping: 25,
                  mass: 0.5,
                },
              }"
              class="display-4 font-1 text-light text-start mb-0"
            >
              LEARN HOW TO SEE YOURSELF
            </h5>
            <h5
              v-motion-slide-top
              :delay="1000"
              class="fs-2 font-2 text-light text-uppercase"
            >
              <br />
              Become aware of your capacity to create, <br />
              to be authentic in every day life, <br />
              to transform & to love
            </h5>

            <h1
              v-motion-slide-left
              :delay="1600"
              class="display-2 text-light font-1"
            >
              ESCAPE WITH SAMADHI YOGA IDAHO
            </h1>
          </div>

          <!-- <div v-motion-fade :delay="1000" class="text-center">
          <img
            src="../assets/img/Screenshot_4.png"
            alt=""
            class="rounded-pill elevation-6 logo-image w-50"
          />
        </div> -->

          <div
            v-motion-slide-top
            class="join-newsletter-button flex-column d-flex"
          >
            <a
              href="#newsletter"
              class="btn bg-dark selectable text-light fs-3 px-4 mb-3"
            >
              Join Our NewsLetter</a
            >
            <a href="#newsletter" class="btn bg-warning selectable fs-3 px-4">
              Book a session</a
            >
          </div>
        </div>
      </div>
      <GentleWave />
    </section>

    <section id="Call-To-Action-Section">
      <CallToAction />
    </section>

    <section id="YinYoga-Section" class="bg-pink my-5">
      <div class="container p-5 mt-5">
        <div class="row">
          <div class="col-md-12">
            <h1
              v-motion-slide-visible-left
              class="display-1 font-1 underline text-start"
            >
              What Is Yin Yoga?
            </h1>
          </div>

          <div class="row mt-3">
            <div class="col-md-4">
              <div class="card bg-dark border-0 elevation-6 p-2">
                <p class="fs-4 text-warning">
                  Yin yoga is a quiet contemplative practice that involves
                  working with deeper, passive, and longer held poses. It
                  targets the deepest tissues of the body, our connective
                  tissues,ligaments,joints,bones, the deep fascia networks of
                  the body and the meridians. This is contract to a Yang Yoga
                  practice such as Vinyasa Yoga which targets the muscles
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-dark border-0 elevation-6 p-2">
                <p class="fs-4 text-warning">
                  A Yin yoga class usually consists of a series of long-held,
                  passive floor poses that mainly work the lower part of the
                  body - the hips, pelvis, inner thighs, and the lower spine
                  which are especially rich in connective tissues. The poses are
                  held for up to five minutes sometimes longer. Although almost
                  entirely passive some Yin asanas contain Yang elements, During
                  the asanas the muscles are relaxed to avoid muscle spasm which
                  could result from engaging muscles for long periods.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-dark border-0 elevation-6 p-2">
                <ul>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      Increases circulation & improves flexibility
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      Calms and balances the mind & body
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">Reduces stress & anxiety</p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">Releases fascia</p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      Encourages deeper relaxation
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">Improves Joint mobility</p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      Balance to the organs through meridian stimulation
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="fs-4 text-warning">
                      improved pranayama(breath work & life energy)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <ScheduleSection />
    </section>
    <!-- <section id="Booking-Section" class="my-5">
      <ServicesSection />
    </section> -->

    <section id="Team-Section" class="bg-pink">
      <div class="container p-5 position-relative">
        <div class="floating-image-1">
          <PersonComponent />
        </div>
        <div class="row">
          <div class="col-md-8 team-section-title">
            <h1
              v-motion-slide-visible-left
              class="display-1 font-1 underline text-start"
            >
              Katie Alverson
            </h1>
            <h2
              v-motion-slide-visible-left
              class="display-6 font-1 underline text-lightPink darken-20 mb-md-2"
            >
              Experienced,
            </h2>

            <h2
              v-motion-slide-visible-left
              class="display-6 font-1 underline text-lightPink darken-20 mb-md-2 me-md-2"
            >
              Qualified,
            </h2>

            <h2
              v-motion-slide-visible-left
              class="display-6 font-1 underline text-lightPink darken-20 mb-md-2"
            >
              Passionate
            </h2>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row g-5 justify-content-center">
          <div
            v-motion-pop-visible
            class="col-md-4 d-flex justify-content-center flex-column align-items-center team-member-card"
          >
            <img
              src="https://scontent.fboi1-1.fna.fbcdn.net/v/t39.30808-6/306519061_129159436532870_6494007048333346057_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZyXKoZ6J5CIAX-iRhfY&_nc_ht=scontent.fboi1-1.fna&oh=00_AfCPQrcs1-iLVW0CLPjhl0-intGdQOE1_KoCweThnqKaAg&oe=639D65A6"
              alt="Katie Alverson"
              class="profile-image elevation-6"
            />

            <div v-motion-fade-visible :delay="200" class="text-center mt-3">
              <h6 class="mb-0 fs-4 fw-bold">Katie Alverson</h6>
              <p class="fs-5">Founder, Owner & Teacher</p>
            </div>
          </div>
        </div>
        <div class="learn-more d-flex justify-content-end mt-2">
          <router-link
            @click="scrollToTop()"
            :to="{ name: 'About' }"
            class="fs-3 btn bg-success font-2"
          >
            Learn More
          </router-link>
        </div>
      </div>
    </section>

    <section id="Testimonials-Section " class="mb-5">
      <TestimonialSection />
    </section>

    <section id="Retreat-Section" class="bg-pink">
      <RetreatAndEvents />
    </section>

    <section id="Video-Section">
      <YouTubeSection />
    </section>
  </div>
</template>

<script>
import ParticleComponent from "../components/PluginComponents/ParticleComponent.vue";
import GentleWave from "../components/PluginComponents/GentleWave.vue";
import SwiperComponent2 from "../components/HomePage/TestimonialSwiper.vue";
import CallToAction from "../components/HomePage/CallToAction.vue";
import TestimonialSection from "../components/HomePage/TestimonialSection.vue";
import YouTubeSection from "../components/HomePage/YouTubeSection.vue";
import RetreatAndEvents from "../components/HomePage/RetreatAndEvents.vue";
import { defineAsyncComponent } from "vue";
import CommentBox from "../components/MiscComponents/CommentBox.vue";
import ScheduleSection from "../components/HomePage/ScheduleSection.vue";
import ServicesSection from "../components/HomePage/ServicesSection.vue";

export default {
  setup() {
    return {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
    };
  },
  components: {
    SwiperComponent2,
    ParticleComponent,
    GentleWave,
    CallToAction,
    TestimonialSection,
    YouTubeSection,
    RetreatAndEvents,
    CommentBox,
    ScheduleSection,
    ServicesSection,
  },
};
</script>

<style scoped lang="scss">
.service-card {
  img {
    filter: brightness(80%);
  }
}
.join-newsletter-button {
  position: absolute;
  right: 5%;
  bottom: 15%;
}

.testimonial-card {
  transition: all 0.25s ease;
}
.testimonial-card:hover {
  transition: all 0.25s ease;
  filter: brightness(80%);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.team-member-card img {
  transition: all 0.75s ease;
}
.team-member-card:hover img {
  transform: scale(1.04);
  filter: brightness(80%);
  transition: all 0.75s ease;
}
.team-member-card h6 {
  transition: all 0.5s ease;
}
.team-member-card:hover h6 {
  color: var(--darkPink);
  transition: all 0.5s ease;
}

.floating-image-1 {
  position: absolute;
  left: 65%;
  top: -45%;
  width: 400px;
  height: 400px;
  z-index: 2;
  /* always scale the image to the appropriate size of your screen */
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    left: 14%;
    top: -40%;
    width: 300px;
    height: 300px;
  }
}

.profile-image {
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  border-radius: 4px;
}

.hero-image {
  width: 100%;
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-position: end;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

//when screen is 768px OR LESS
@media only screen and (max-width: 768px) {
  .logo-image {
    width: 75%;
  }

  .team-section-title {
    margin-top: 140px;
  }
}
</style>
