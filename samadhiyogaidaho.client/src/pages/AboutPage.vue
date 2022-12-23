<template>
  <div class="">
    <div class="tsparticles">
      <ParticleTest />
    </div>
    <div class="heroImage d-flex flex-column align-items-center justify-content-center">
      <div class="text-center">
        <h1 v-motion-slide-top :delay="200" id="shadow1" class=" font-1 text-shadow page-title courgette fw-bolder text-light">
          OUR STORY
        </h1>
        <p 
        v-motion-slide-top :delay="400"
        class=" display-6 font-2 text-shadow">Why we came to build SamadhiYogaIdaho</p>
      </div>
    </div>
    <div class="container-fluid mt-5 plants">
      <div class="row  px-md-3 g-5">
        <div class="col-md-12 text-center">
          <div class="justify-content-center p-2">
            <p v-motion-slide-bottom class="px-md-5 story-text my-3 text-start  fs-4  ">
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
            <p class="px-md-5 story-text my-3 text-start fs-4  ">Physical and mental wellbeing are of
              utmost importance to living a healthy life and require practice and
              dedication. Our
              Small Business provides the setting and guidance you need to strengthen your body, mind and soul. All you
              have
              to do is
              show up and breathe.</p>
          </div>
        </div>
        <div class="col-md-6 ">
          <img
            src="../assets/img/KatiePortrait.png"
            alt="" class="img-fluid framed elevation-5 ms-md-5 rounded " style="z-index:-9;">
        </div>
        
        <div class="col-md-6 ">
          
          <div class="">
            <p class="display-3 font-1"> Katy Alverson</p>
            <p class="display-5">Founder, owner and teacher</p>
            <p class="text-start p-2 fs-4 mt-md-5">
Hi! I’m Katie, and I LOVE to get to share the beauty of yoga with others! I have been practicing yoga for about ten years now, and made the jump in 2021 to train for and receive my 200 hr yoga teacher certification. I specialized in the Baptiste methodology, but now also teach Vinyasa, yin, and power!



            </p>
                <p class="text-start p-2 fs-4 mt-md-5">
I love music with my whole soul and love to incorporate music into my classes. You’ll always catch me flowing to some classic gangster rap or Edm. Ice Cube, Dr. Dre, Eminem, Tupac, Troyboi, and Flume. I love to sing and if your lucky, you might catch me singing in shavasana at the end of your practice.</p>
                <p class="text-start p-2 fs-4 mt-md-5">I’m a lover of animals, I’m a fur mom to @icecubester @lunameowgood and a beta fish named Ray. I would have an entire farm if I could and rescue all the precious animals in the world.</p>
          </div>
        </div>
   
        <div class="col-md-6 ">
          
          <div class="">
           <p class="fs-4 font-2 text-start ">
            My favorite thing to do in the world is to put together fully-inclusive and restorative yoga retreats for people to get to know themselves and their bodies better. I have always been a planner. I love putting together great events.I used to want to plan peoples weddings, but I thought I’d be better suited to planning reLaxing retreats where I could help others learn more about themselves and re-find that magic that they have within themselves.

          </p>
             <p class="fs-4 font-2 text-start ">
When I’m not teaching yoga, planning retreats, or working at my day job in finance, you can catch me spending time with my partner and our fur babies either traveling, exploring breweries and wineries, or spending time with family.
             </p>
             <p class="fs-4 font-2 text-start ">
My favorite place to visit is the ocean, particularly the Oregon coast. I want to travel the world and have plans to host retreats globally all around the world someday.
             </p>
             <p class="fs-4 font-2 text-start ">
I also love to paint, particularly with oil paint, rock climb, hike, workout, and learn as much as possible. On top of everything else, I’m going to school right now to get my bachelors in business management and plan to get my doctorates someday.
             </p>
             <p class="fs-4 font-2 text-start ">
That’s a little about me, thanks for taking the time to get to know me and for supporting me and my business!
             </p>
          </div>
        </div>
     <div class="col-md-6 ">
          <img
            src="../assets/img/KatiePortrait.png"
            alt="" class="img-fluid framed elevation-5 ms-md-5 rounded " style="z-index:-9;">
        </div>
        
        <!-- <div class="col-md-12 my-5">
         
        </div> -->
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
.page-title{
  font-size: 8rem;
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

@media only screen and (max-width: 768px) {
  .page-title {
      font-size: 4rem;
    }
}
</style>
