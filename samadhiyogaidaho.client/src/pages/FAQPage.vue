<template>
  <div>
    <div class="tsparticles">
      <ParticleComponent />
    </div>
    <div
      class="hero-image d-flex flex-column align-items-center justify-content-center"
    >
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

    <!-- <section id="YinYoga-Section" class="">
      <div class="container p-5 mt-5">
        <div class="row">
          <div class="col-md-12">
            <h1
              v-motion-slide-visible-once-left
              class="display-1 font-1 underline text-start"
            >
              What Is Yin Yoga?
            </h1>
          </div>

          <div class="row mt-3">
            <div class="col-md-4">
              <div class="card bg-dark border-0 elevation-6 p-2">
                <p class="text-warning">
                  Yin yoga is a quiet contemplative practice that involves
                  working with deeper, passive, and longer held poses. It
                  targets the deepest tissues of the body, our connective
                  tissues,ligaments,joints,bones, the deep fascia networks of
                  the body and the meridians.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-dark border-0 elevation-6 p-2">
                <p class="text-warning">
                  A Yin yoga class usually consists of a series of long-held,
                  passive floor poses that mainly work the lower part of the
                  body - the hips, pelvis, inner thighs, and the lower spine
                  which are especially rich in connective tissues. The poses are
                  held for up to five minutes or longer.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-dark border-0 elevation-6 p-2">
                <ul>
                  <li class="text-warning">
                    <p class="text-warning">
                      Increases circulation & improves flexibility
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="text-warning">
                      Calms and balances the mind & body
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="text-warning">Reduces stress & anxiety</p>
                  </li>
                  <li class="text-warning">
                    <p class="text-warning">Releases fascia</p>
                  </li>
                  <li class="text-warning">
                    <p class="text-warning">Encourages deeper relaxation</p>
                  </li>
                  <li class="text-warning">
                    <p class="text-warning">Improves Joint mobility</p>
                  </li>
                  <li class="text-warning">
                    <p class="text-warning">
                      Balance to the organs through meridian stimulation
                    </p>
                  </li>
                  <li class="text-warning">
                    <p class="text-warning">
                      improved pranayama(breath work & life energy)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <section class="container my-5">
      <div class="row my-5 justify-content-center">
        <div
          class="col-md-10 d-flex justify-content-center flex-column align-content-center align-items-center"
        >
          <blockquote class="font-1 quote">
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
         <p class="fs-5"> Got a question? W're here to answer! if you don't see your question here, drop us a line on our <a href="/contact">Connect Page.</a></p> 
        </div>
        <div class="col-md-12 text-center">
       
          <img src="   https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148923411.jpg?w=740&t=st=1671858328~exp=1671858928~hmac=e00bddf1b609986bf818fe7305845d0301b1255429a2a13d65171468dde5d318" alt="" class="w-50">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="accordion " id="accordionExample">
            <div class="accordion-item border-0">
              <h2 class="accordion-header border-0" id="headingOne">
                <button
                  class="accordion-button text-dark font-2 fs-3 border-0 bg-transparent "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i class="mdi mdi-help-circle me-3"></i> What are the benefits
                  of yoga?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    With regular practice, you will notice your body getting
                    stronger and more flexible; you will feel more grounded and
                    have better posture. On a mental level you will notice
                    improved focus, the ability to stay calm and maintain
                    relaxed breathing.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button  text-dark font-2 fs-3   border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  <i class="mdi mdi-help-circle me-3"></i> Can I Eat Before Yoga
                  Practice?
                </button>
              </h2>
              <div
                id="collapse2"
                class="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    It is best to wait an hour after eating before practicing
                    yoga, but a small snack before your class is perfectly
                    alright. Observe your body to learn how much time you need
                    to digest your food before practice.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-dark font-2 fs-3   border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  <i class="mdi mdi-help-circle me-3"></i> What do I need to
                  bring?
                </button>
              </h2>
              <div
                id="collapse3"
                class="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Just bring yourself, in appropriate clothing, a yoga mat if
                    you have one, and a bottle of water.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-dark font-2 fs-3   border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  <i class="mdi mdi-help-circle me-3"></i> Can I Eat Before Yoga
                  Practice?
                </button>
              </h2>
              <div
                id="collapse4"
                class="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Some people wear baggy, loose fitting bottoms or shorts and
                    a t shirt. Other people wear tight, stretchy leggings +
                    tops. The only thing that matters is that you wear
                    comfortable clothes that you can easily move and stretch in.
                    It's good to have clothes that keep you cool when you are
                    active in yoga.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-dark font-2 fs-3   border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  <i class="mdi mdi-help-circle me-3"></i> Do I Need To Be
                  Flexible To Do Yoga?
                </button>
              </h2>
              <div
                id="collapse5"
                class="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    No you don’t have to be flexible to do yoga… It’s an urban
                    myth that people who are tight can't do yoga. Yoga isn’t
                    just stretching its extremely toning, calming, meditative,
                    spiritual, healing and opening. Flexibility is only one
                    aspect of it. Once you practice yoga for a period of time
                    naturally you will gain flexibility with a myriad of other
                    benefits
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-dark font-2 fs-3   border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  <i class="mdi mdi-help-circle me-3"></i> What is Vinyasa Yoga?
                </button>
              </h2>
              <div
                id="collapse6"
                class="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Vinyasa yoga focuses on connecting the breath to your
                    movements, which tend to be set at a faster pace. In a
                    vinyasa practice, you can expect to stay in a constant flow
                    of movements.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-dark font-2 fs-3   border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  <i class="mdi mdi-help-circle me-3"></i> What is Baptiste
                  style yoga?
                </button>
              </h2>
              <div
                id="collapse7"
                class="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Baptiste power yoga is a type of Vinyasa yoga with the poses
                    flowing from one to another in a sequence rather than being
                    held for seconds or even minutes, as is the case in some
                    other forms of yoga.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item border-0">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-dark font-2 fs-3   border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  <i class="mdi mdi-help-circle me-3"></i> What is Yin Yoga?
                </button>
              </h2>
              <div
                id="collapse8"
                class="accordion-collapse collapse"
                aria-labelledby="heading2"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Yin Yoga is a slower-paced, more meditative version of the
                    popular physical and spiritual discipline of yoga. In Yin
                    yoga, the poses are held for a long period of time
                    (typically three to five minutes or longer) to target the
                    connective tissues (such as the ligaments) rather than
                    focusing on the muscles.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    return {
      editable,
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
}
</style>
