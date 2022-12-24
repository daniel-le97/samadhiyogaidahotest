<template>

    <div class="container  bg-white mt-4">
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
<hr class="my-5">
      <div class="row gx-3  ">
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
        <div class="col-md-4">
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
