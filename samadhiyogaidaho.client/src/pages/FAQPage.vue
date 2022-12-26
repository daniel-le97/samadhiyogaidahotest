<template>
  <div>
    <section id="hero-section">
      <div
        class="hero-image d-flex flex-column align-items-center justify-content-center"
      >
        <div class="tsparticles">
          <ParticleComponent />
        </div>
        <div class="text-center container">
          <h1
            v-motion-slide-top
            :delay="200"
            id="shadow1"
            class="font-1 text-shadow page-title courgette fw-bolder text-light"
          >
            How Can We Help You?
          </h1>
        </div>
      </div>
    </section>

    
    <section id="accordion-faq" class="container my-5">
      <div class="row my-5 justify-content-center">
        <div
          class="col-md-8 d-flex justify-content-center flex-column align-content-center align-items-center"
        >
          <blockquote class="font-1 quote text-center ">
            On an inhale, think of the things that are no longer serving you,
            whatever that may be. Maybe it’s a thought Maybe it’s a feeling
            Maybe it’s a person Or an experience But taking it, And on an
            exhale, choosing consciously to let it go.
          </blockquote>
          <cite>- SamadhiYogaIdaho</cite>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-6">
          <p class="fs-2 text-center">Frequently Asked Questions</p>
        </div>
        <div class="col-md-6">
          <p class="fs-5">
            Got a question? W're here to answer! if you don't see your question
            here, drop us a line on our <a href="/contact">Connect Page.</a>
          </p>
        </div>
        <div class="col-md-12 text-center">
          <img src="../assets/img/FAQ.svg" alt="" class="w-50" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item border-0" v-for="(faq, index) in QA">
              <h2
                class="accordion-header border-0"
                :id="`heading${index.toString()}`"
              >
                <button
                  class="accordion-button text-dark font-2 fs-3 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#Collapse${index.toString()}`"
                  :aria-expanded="index == 0 ? true : false"
                  :aria-controls="`Collapse${index.toString()}`"
                >
                  <i class="mdi mdi-help-circle me-3"></i> {{ faq.q }}
                </button>
              </h2>
              <div
                :class="index == 0 ? '' : ''"
                :id="`Collapse${index.toString()}`"
                class="accordion-collapse collapse"
                :aria-labelledby="`heading${index.toString()}`"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  <p class="fs-5">
                    {{ faq.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-10 text-center">
          <p class="fs-5">
            Learn more about me and the yoga I love and teach by visiting my
            blog!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from "vue";
import ParticleComponent from "../components/PluginComponents/ParticleComponent.vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {});
    watchEffect(() => {});
    const QA = [
      {
        q: "Why should I book a private event or workshop?",
        a: "Booking a private event for your team, a bridal party, birthday event, or any other special event is a great way to start the event off great and bring you and your companions closer together. We can design the private workshop or event to be anything you want or could possibly need. From beginners to the advanced, we will make it an event to remember.",
      },
      {
        q: "Why should I book a private lesson?",
        a: "Private lessons can be for any person from the beginner to the advanced. Whether you are looking to make sure your alignment is correct and get adjustments, want to learn more about the eight limbs of yoga or history of yoga, or want help with something specific in general, we will build your practice around you. We will build from the ground up and can provide a comfortable private space or come to your home if that makes you feel more comfortable. We can help you to build a personal home practice, build the foundations of a yoga practice, or help you to advance your practice. You'll feel so much more comfortable with your body, mind, and emotions by building this meditative practice in your life. ",
      },
      {
        q: "What are the benefits of yoga?",
        a: "  With regular practice, you will notice your body getting stronger and more flexible; you will feel more grounded and have better posture. On a mental level you will notice improved focus, the ability to stay calm and maintain relaxed breathing.",
      },
      {
        q: "Can I eat before a yoga session?",
        a: " It is best to wait an hour after eating before practicing yoga, but a small snack before your class is perfectly alright. Observe your body to learn how much time you need to digest your food before practice.",
      },
      {
        q: "What do I need to bring?",
        a: " Just bring yourself, in appropriate clothing, a yoga mat if you have one, and a bottle of water.",
      },
      {
        q: "What should I wear during a session?",
        a: " Some people wear baggy, loose fitting bottoms or shorts and a t shirt. Other people wear tight, stretchy leggings plus tops. The only thing that matters is that you wear comfortable clothes that you can easily move and stretch in. It's good to have clothes that keep you cool when you are active in yoga.",
      },
      {
        q: "Do I need to be flexible to do yoga?",
        a: "No you don't have to be flexible to do yoga It is an urban myth that people who tight can't do yoga. Yoga isn't just stretching it's extremely toning, calming, meditative, spiritual, healing and opening. Flexibility is only one aspect of it. Once you practice yoga for a period of time naturally you will gain flexibility with a myriad of other benefits",
      },
      {
        q: "What is Vinyasa Yoga?",
        a: "Vinyasa yoga focuses on connecting the breath to your movements, which tend to be set at a faster pace. In a vinyasa practice, you can expect to stay in a constant flow of movements.",
      },
      {
        q: "What is Baptiste style yoga?",
        a: "Baptiste power yoga is a type of Vinyasa yoga with the poses flowing from one to another in a sequence rather than being held for seconds or even minutes, as is the case in some other forms of yoga.",
      },
      {
        q: "What is Yin Yoga?",
        a: "Yin Yoga is a slower-paced, more meditative version of the popular physical and spiritual discipline of yoga. In Yin yoga, the poses are held for a long period of time (typically three to five minutes or longer) to target the connective tissues (such as the ligaments) rather than focusing on the muscles",
      },
    ];
    return {
      editable,
      QA,
    };
  },
  components: { ParticleComponent },
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80);
  background-position: center;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}

.page-title {
  font-size: 8rem;
}

@media only screen and (max-width: 768px) {
  .page-title {
    font-size: 4rem;
  }
  .quote{
    font-size: 16px;
  }
}
</style>
