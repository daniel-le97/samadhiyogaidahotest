<template>

    <div class="container p-5 bg-white">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <h1
            v-motion-slide-visible-once-left
            class="display-1 font-1 underline text-center text-dark mt-md-5 "
          >
            Welcome Beautiful Soul
          </h1>
          <br />

          <h2
            v-motion-slide-visible-once-left
            class="display-6 font-2 underline text-lightPink darken-20 mb-4"
          >
            Our Core Belief
          </h2>
        </div>
        <div class="col-md-8 text-center">
          <p v-motion-fade-visible class="fs-4 px-md-5">
            Is based on the idea that people want to be at peace with who they
            truly are, and that at every moment is an opportunity where they can
            be authentic with themselves in everyday life.
          </p>

          <p v-motion-fade-visible class="fs-4 px-md-5">
            <b> SamadhiYogaIdaho </b> is a holistic approach in using pranayama,
            asana, journaling, and meditation practices to increase our
            knowledge of <em>self</em>, <em>life</em>, <em>mobility</em> and to
            help every person recognize their <em>worthiness</em> ,
            <em>beauty</em>, and <em>uniqueness</em>.
          </p>
          <p class="fs-4">
            Escape with us and learn how to see yourself without judgment
          </p>
          <p>
            <a href="#newsletter" class="btn bg-warning selectable fs-3 px-4">
              Begin Your Journey</a
            >
          </p>
        </div>
      </div>

      <div class="row my-md-5">
        <div class="col-md-4">
<div class="card  border-0 elevation-7 bg-pink p-2" v-motion-fade-visible-once :delay="300">
<div class="card-title font-2 fs-3 text-center">
  Vinyasa 

</div>
<div class="card-body text-center font-2 fs-5">
  Vinyasa (Flow) is a  flowing  of postures executed in succession, often timed with the breath to attain balance in the mind and body. Classes build heat, endurance, flexibility, strength and  conscious breathing.
</div>
</div>
        </div>
        <div class="col-md-4 my-3 my-md-0">
<div class="card  border-0 elevation-7 bg-pink p-2" v-motion-fade-visible-once :delay="300">
<div class="card-title font-2 fs-3 text-center">
 Pranayama & Meditation

</div>
<div class="card-body text-center font-2 fs-5">
Pranayama (Breath control) an ancient tradition, is the conscious awareness of breath using specific rhythms & techniques to bring us to the present moment increasing our self-awareness.
</div>
</div>
        </div>
        <div class="col-md-4">
<div class="card  border-0 elevation-7 bg-pink p-2" v-motion-fade-visible-once :delay="300">
<div class="card-title font-2 fs-3 text-center">
 Journaling

</div>
<div class="card-body text-center font-2 fs-5">
Keeping a yoga journal leads to more mindful yoga practice. You notice the sensations of each of your movements, drawing your mind into the present moment, so you can really appreciate the process of your yoga practice.
</div>
</div>
        </div>
    
      </div>
    </div>

    <!-- <div class="container mb-3">
      <div class="row g-2">
        <div class="col-md-4" v-motion-pop-visible-once>
          <div class="card elevation-6 border-0">
            <div class="image-box">
              <img
                src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/298219507_139281102128313_1469716182377953759_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=To8CopedlNEAX-AiRAt&_nc_ht=scontent-fml2-1.xx&oh=00_AfBkKQpI-3LdHaQxQf9C3A89NYIMt4ZN2Uf9O4B4qT4d4g&oe=63A04441"
                alt=""
                class="img-fluid rounded"
              />
              <div class="text-box">
                <p class="title">
                  Learn to delve into the slowness of breath work with Yin Yoga
                </p>
                <p class="content"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4" v-motion-pop-visible-once>
          <div class="card elevation-6 border-0">
            <div class="image-box">
              <img
                src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/291518073_128132356576521_7530546115358918920_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=bHJ0OcW_2gAAX-7oHpz&_nc_ht=scontent-fml2-1.xx&oh=00_AfAdzk-xLbVt1NsLbKqNuJJt5uo2-tJWeJrYyzXmfxQR9Q&oe=63A11BE8"
                alt=""
                class="img-fluid rounded"
              />
              <div class="text-box">
                <p class="title">Awaken True WellBeing</p>
                <p class="content"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4" v-motion-pop-visible-once>
          <div class="card elevation-6 border-0">
            <div class="image-box">
              <img
                src="https://scontent-fml2-1.xx.fbcdn.net/v/t39.30808-6/299321126_140398988683191_5641334468471087586_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=Uvb2uQ-INDUAX8lC2qW&tn=elLHl9auDysCO0fM&_nc_ht=scontent-fml2-1.xx&oh=00_AfBODjVEBO-DnbDH_WWDhSYDxRgHaMhu1L1yN_3Hp6REQw&oe=639FF51A"
                alt=""
                class="img-fluid rounded"
              />
              <div class="text-box">
                <p class="title">Find Your Flow</p>
                <p class="content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>




</style>
