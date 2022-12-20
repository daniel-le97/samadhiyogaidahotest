<template>

  <div>
    <div class="hero-image d-flex flex-column align-items-center justify-content-center">
      <div class="text-center">
        <h1 v-motion-slide-top :delay="200" id="shadow1"
          class="story-text font-1 text-shadow page-title courgette fw-bolder text-light">
          One Yoga Class
        </h1>
        <p v-motion-slide-top :delay="400" class=" display-6 font-2 text-shadow">Away From A Good Mood</p>
      </div>
    </div>

    <section class="container my-3">
      <div class="row">
        <div class="col-md-12">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                  aria-controls="collapseOne">
                  <i class="mdi mdi-help-circle me-3"></i> What are the benefits of yoga?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    With regular practice, you will notice your body getting stronger and more flexible; you will feel
                    more
                    grounded and
                    have better posture. On a mental level you will notice improved focus, the ability to stay calm and
                    maintain relaxed
                    breathing.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                  <i class="mdi mdi-help-circle me-3"></i> Can I Eat Before Yoga Practice?
                </button>
              </h2>
              <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    It is best to wait an hour after eating before practicing yoga, but a small snack before your class
                    is
                    perfectly
                    alright. Observe your body to learn how much time you need to digest your food before practice.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse2">
                  <i class="mdi mdi-help-circle me-3"></i> What do I need to bring?
                </button>
              </h2>
              <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading2"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    Just bring yourself, in appropriate clothing, a yoga mat if you have one, and a bottle of water.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse2">
                  <i class="mdi mdi-help-circle me-3"></i> Can I Eat Before Yoga Practice?
                </button>
              </h2>
              <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading2"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    Some people wear baggy, loose fitting bottoms or shorts and a t shirt. Other people wear tight,
                    stretchy
                    leggings +
                    tops. The only thing that matters is that you wear comfortable clothes that you can easily move and
                    stretch in. It's
                    good to have clothes that keep you cool when you are active in yoga.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse2">
                  <i class="mdi mdi-help-circle me-3"></i> Do I Need To Be Flexible To Do Yoga?
                </button>
              </h2>
              <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading2"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    No you don’t have to be flexible to do yoga… It’s an urban myth that people who are tight can't do
                    yoga.
                    Yoga isn’t just
                    stretching its extremely toning, calming, meditative, spiritual, healing and opening. Flexibility is
                    only one aspect of
                    it. Once you practice yoga for a period of time naturally you will gain flexibility with a myriad of
                    other benefits
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse2">
                  <i class="mdi mdi-help-circle me-3"></i> What is Vinyasa Yoga?
                </button>
              </h2>
              <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading2"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    Vinyasa yoga focuses on connecting the breath to your movements, which tend to be set at a faster
                    pace.
                    In a vinyasa
                    practice, you can expect to stay in a constant flow of movements.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse2">
                  <i class="mdi mdi-help-circle me-3"></i> What is Baptiste style yoga?
                </button>
              </h2>
              <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading2"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    Baptiste power yoga is a type of Vinyasa yoga with the poses flowing from one to another in a
                    sequence
                    rather than being
                    held for seconds or even minutes, as is the case in some other forms of yoga.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-dark font-2 fs-3 bg-pink border-0 elevation-6" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="true" aria-controls="collapse2">
                  <i class="mdi mdi-help-circle me-3"></i> What is Yin Yoga?
                </button>
              </h2>
              <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    Yin Yoga is a slower-paced, more meditative version of the popular physical and spiritual discipline of yoga. In Yin
                    yoga, the poses are held for a long period of time (typically three to five minutes or longer) to target the connective
                    tissues (such as the ligaments) rather than focusing on the muscles.
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
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
  props: {

  },
  setup(props) {
    const editable = ref({});

    onMounted(() => {

    });
    watchEffect(() => { });

    return {
      editable,
    }
  }
}
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
  font-size: 10rem;
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

.story-text {
  font-size: 10rem;
}

@media only screen and (max-width: 768px) {
  .story-text {
    font-size: 60pt;
  }
}
</style>
