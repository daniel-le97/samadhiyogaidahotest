<template>
  <section id="Hero-Section">
    <div class="position-relative px-0">
      <div class="tsparticles">
        <ParticleComponent />
      </div>
      <div
        class="hero-image d-flex flex-column justify-content-center align-items-center"
      >
        <div
          style="margin-top: 80px"
          class=" text-shadow container "
        >
          <h1
           v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="600"
            class="display-2 text-light text-start font-1"
          >
            LEARN HOW TO SEE YOURSELF
          </h1>
          <h5
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="600"
            class="fs-2 font-2 text-light text-uppercase "
          >
            Become aware of your capacity to create, <br> to be authentic in every
            day life, <br> to transform & to love
          </h5>

          <h3
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }"
            :delay="600"
            class="display-3 text-light  font-1"
          >
            ESCAPE WITH SAMADHI YOGA IDAHO
          </h3>
        </div>

        <div v-motion-fade :delay="1000" class="text-center ">
          <img
            src="../assets/img/Screenshot_4.png"
            alt=""
            class="rounded-pill elevation-6 logo-image w-50"
          />
          <!-- <img
            src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            class="rounded-pill elevation-6 logo-image w-25"
          /> -->
        </div>

        <div class="join-newsletter-button flex-column d-flex" style="z-index: 9999;">
          <a href="#newsletter" class="btn bg-dark selectable text-light  fs-3  px-4 mb-3" > Join Our NewsLetter</a>
          <a href="#newsletter" class="btn bg-warning selectable  fs-3  px-4" > Book a session</a>
        </div>
  
      </div>
    </div>
    <RowSeporator2/>
  </section>

  <section id="Mission-Section">
    <div class="container p-5 bg-white">
      <div class="row">
        <div class="col-md-12">
          <h1
            v-motion-slide-visible-left
            class="display-1 font-1 underline text-start text-dark  mt-5 mt-md-0"
          >
            Welcome!
          </h1>
          <br />

          <h2
            v-motion-slide-visible-left
            class="display-6 font-1 underline text-lightPink darken-20 mb-4"
          >
            Our Mission
          </h2>

          <!-- <p v-motion-fade-visible class="text-start fs-4 px-md-5">
            We started <b>Samadhi Yoga Idaho</b> based on the idea that people
            want to be at peace with who they truly are, and that they can be
            authentic with themselves at every point of their lives. We believe
            in using pranayama, asana, journaling, and meditation practices to
            increase our knowledge of self, life, and mobility. Our retreats are
            located in the most stunning and peaceful settings, so that our
            guests can enjoy an enriching and memorable experience that will
            change the concept of daily life into moments of deep connection and
            appreciation. Every retreat we host is fully inclusive, designed
            with love and intent, and is built to help every person recognize
            their worthiness, beauty, and uniqueness.
          </p> -->

          <p v-motion-fade-visible class="text-start fs-4 px-md-5">
       We started <b>Samadhi Yoga Idaho</b> based on the idea that people want to be at peace with who they truly are, and that they can be authentic with themselves at every point of their lives. We believe in using pranayama, asana, journaling, and meditation practices to increase our knowledge of self, life, and mobility. Our retreats are located in the most stunning and peaceful settings, so that our guests can enjoy an enriching and memorable experience that will change the concept of daily life into moments of deep connection and appreciation. Every retreat we host is fully inclusive, designed with love and intent, and is built to help every person recognize their worthiness, beauty, and uniqueness. 
          </p>
        </div>
      </div>
    </div>

    <div class="container  mb-3" >
      <div class="row g-2">
        <div class="col-md-4" v-motion-pop-visible>
          <div class="card elevation-6 border-0">
            <div class="image-box">
              <img
                src="https://images.unsplash.com/photo-1593811167565-4672e6c8ce4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                alt=""
                class="img-fluid rounded"
              />
              <div class="text-box">
                <p class="title">Awaken True WellBeing </p>
                <p class="content">
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4" v-motion-pop-visible>
          <div class="card elevation-6 border-0">
             <div class="image-box">
              <img
                src="https://images.unsplash.com/photo-1587216826891-d957f3395dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                alt=""
                class="img-fluid rounded"
              />
              <div class="text-box">
                <p class="title">Find What Matters</p>
                <p class="content">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo animi ab similique blanditiis quos sequi.
                </p>
              </div>
            </div>
        
         
          </div>
        </div>
        <div class="col-md-4" v-motion-pop-visible>
          <div class="card elevation-6 border-0">
            <div class="image-box">
              <img
                src="https://images.unsplash.com/photo-1543858828-7cf1a9beb95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                class="img-fluid rounded"
              />
              <div class="text-box">
                <p class="title">Lorem ipsum dolor sit.</p>
                <p class="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea obcaecati voluptas quam?
                </p>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="Booking-Section" class="bg-pink ">
    <div class="container p-5  mt-5">
      <div class="row">
        <div class="col-md-12">
          <h1
            v-motion-slide-visible-left
            class="display-1 font-1 underline text-start "
          >
            Services
          </h1>
          <br />

          <h2
            v-motion-slide-visible-left
            class="display-6 font-1 underline text-lightPink darken-20 "
          >
          Book a session
          </h2>

        </div>
      </div>
    </div>

    <div class="container " >
      <div class="row ">
          <div class="col-md-3 ">
      <div class="card border-0 ">
        <img src="https://images.unsplash.com/photo-1512291313931-d4291048e7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" class="img-fluid opacity-50 rounded elevation-6">
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <p class="mb-0 display-3 font-1">Private <br>
             Classes</p>
        </div> 
      </div>
    </div>
 
          <div class="col-md-3 ">
      <div class="card border-0 ">
        <img src="https://images.unsplash.com/photo-1512291313931-d4291048e7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" class="img-fluid opacity-50 rounded elevation-6">
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <p class="mb-0 display-3 font-1">Private <br>
             Classes</p>
        </div> 
      </div>
    </div>
 
          <div class="col-md-3 ">
      <div class="card border-0 ">
        <img src="https://images.unsplash.com/photo-1512291313931-d4291048e7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" class="img-fluid opacity-50 rounded elevation-6">
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <p class="mb-0 display-3 font-1">Private <br>
             Classes</p>
        </div> 
      </div>
    </div>
 
          <div class="col-md-3 ">
      <div class="card border-0 ">
        <img src="https://images.unsplash.com/photo-1512291313931-d4291048e7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" class="img-fluid opacity-50 rounded elevation-6">
        <div class="card-img-overlay d-flex justify-content-center align-items-center">
          <p class="mb-0 display-3 font-1">Private <br>
             Classes</p>
        </div> 
      </div>
    </div>
 
      </div>
  
   
    </div>
  </section>

  <section id="Team-Section" class="bg-pink">
    <div class="container p-5 position-relative">
      <div class="floating-image-1">
        <!-- <img src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?w=1380&t=st=1670086283~exp=1670086883~hmac=c1616d9968e977c320041463a603cc3653adbe028e09a4b1f4bf54b39ade1142" alt="" class="img-fluid rounded-pill"> -->

        <PersonComponent />
      </div>
      <div class="row">
        <div class="col-md-8 team-section-title">
          <h1
            v-motion-slide-visible-left
            class="display-1 font-1 underline text-start mb-2 mb-md-4"
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

    <div class="container ">
      <div class="row g-5 justify-content-center">
        <div
          v-motion-pop-visible
          class="col-md-4 d-flex justify-content-center flex-column align-items-center team-member-card"
        >
          <img
            src="https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1438&q=80"
            alt=""
            class="profile-image elevation-6"
          />

          <div class="text-center mt-3">
            <h6 class="mb-0 fs-4 fw-bold">Katie Alverson</h6>
            <p class="fs-5">Founder, Owner & Teacher</p>
          </div>
        </div>
        <!-- <div
          v-motion-pop-visible
          class="col-md-4 d-flex justify-content-center flex-column align-items-center team-member-card"
        >
          <img
            src="https://images.unsplash.com/photo-1611072652955-5705ec8f91eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            alt=""
            class="profile-image elevation-6"
          />
          <div class="text-center mt-3">
            <h6 class="mb-0 fs-4 fw-bold">Jane Doe</h6>
            <p class="fs-5">Founder, Owner, & Teacher</p>
          </div>
        </div>
        <div
          v-motion-pop-visible
          class="col-md-4 mb-md-0 mb-5 d-flex justify-content-center flex-column align-items-center team-member-card"
        >
          <img
            src="https://images.unsplash.com/photo-1620862657760-72a639a2daef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            class="profile-image elevation-6"
          />
          <div class="text-center mt-3">
            <h6 class="mb-0 fs-4 fw-bold">Jane Doe</h6>
            <p class="fs-5">Founder, Owner, & Teacher</p>
          </div>
        </div> -->
      </div>
      <div class="learn-more d-flex justify-content-end mt-2 ">
        <router-link @click="scrollToTop()" :to="{name: 'About'}" class="fs-3 btn btn-dark"> 
        Learn More
        </router-link>
       
      </div>
    </div>
  </section>

  <section id="Testimonials-Section " class="mb-5">
    <div class="container p-5">
      <div class="row">
        <div class="col-md-8 mb-4 mt-2">
          <h1 v-motion-fade-visible class="display-1 font-1 text-start mb-4 underline">
            Testimonials
          </h1>
        </div>
      </div>
    </div>

    <div class="container mt-5 mt-md-0">
      <div class="row justify-content-center">
        <div class="col-md-12">

          <SwiperComponent2/>
        </div>
        <!-- <div v-motion-pop-visible class="col-md-4 d-flex align-items-center">
          <div
            class="testimonial-card card text-start elevation-6 rounded-4 p-5 border-0 position-relative"
          >
            <div class="text-center">
              <img
                src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                class="testimonial-profile-image elevation-6"
              />
              <div class="text-center mt-3">
                <h1 class="mb-0 fs-4 fw-bold">Jane Doe</h1>
              </div>
            </div>
            <p class="text-start">
              <i class="mdi mdi-format-quote-open text-dark fs-4"></i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur autem debitis dolorum maiores. Veniam nisi facere
              obcaecati commodi similique nemo hic culpa, rem repellendus.
              Minus, quas? Dolorem, nihil cupiditate praesentium quas labore,
              <i class="mdi mdi-format-quote-close text-dark fs-4"></i>
            </p>
          </div>
        </div>
        <div v-motion-pop-visible class="col-md-4 d-flex align-items-center">
          <div
            class="testimonial-card card text-start elevation-6 rounded-4 p-5 border-0 position-relative"
          >
            <div class="text-center">
              <img
                src="https://images.unsplash.com/photo-1577253313708-cab167d2c474?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1438&q=80"
                alt=""
                class="testimonial-profile-image elevation-6"
              />
              <div class="text-center mt-3">
                <h1 class="mb-0 fs-4 fw-bold">Jane Doe</h1>
              </div>
            </div>
            <p class="text-start">
              <i class="mdi mdi-format-quote-open text-dark fs-4"></i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur autem debitis dolorum maiores. Veniam nisi facere
              obcaecati commodi similique hic culpa, rem repellendus. Minus,
              quas? Dolorem, nihil cupiditate praesentium quas lahic culpa, rem
              repellendus. Minus, quas? Dolorem, nihil cupiditate praesentium
              quas lanemo bore,
              <i class="mdi mdi-format-quote-close text-dark fs-4"></i>
            </p>
          </div>
        </div>
        <div v-motion-pop-visible class="col-md-4 d-flex align-items-center">
          <div
            class="testimonial-card card text-start elevation-6 rounded-4 p-5 border-0 position-relative"
          >
            <div class="text-center">
              <img
                src="https://images.unsplash.com/photo-1544507888-56d73eb6046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""
                class="testimonial-profile-image elevation-6"
              />
              <div class="text-center mt-3">
                <h1 class="mb-0 fs-4 fw-bold">Jane Doe</h1>
              </div>
            </div>
            <p class="text-start">
              <i class="mdi mdi-format-quote-open text-dark fs-4"></i>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur autem debitis dolorum maiores. Veniam nisi facere
              obcaecati commodi similique nemo hic culpa, rem repellendus.
              Minus, quas? Dolorem, nihil cupiditate praesentium quas labore,
              <i class="mdi mdi-format-quote-close text-dark fs-4"></i>
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </section>

  <section id="Retreat-Section" class="bg-pink">
    <div class="container p-5">
      <div class="row">
        <div class="col-md-12">
          <h1 v-motion-fade-visible class="display-1 font-1 text-start mb-4 underline">
            Join Our Retreat
          </h1>
          <h2
            v-motion-fade-visible
            class="display-6 courgette text-lightPink darken-20 mb-4 underline"
          >
        COUPLE'S REJUVINATION YOGA RETREAT
          </h2>
          <br>
          <h3
            v-motion-fade-visible
            class="fs-4 calligrphy text-lightPink darken-30 underline "
          >
            NOW BOOKING FOR 2023
          </h3>
        </div>
      </div>
    </div>

    <div id="test" class="container p-md-5 mb-md-0">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="image-box mb-5 mb-md-0">
            <img
              src="https://images.unsplash.com/photo-1524901548305-08eeddc35080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              class="hover-image img-fluid rounded-1 elevation-6"
            />
            <div class="text-box">
              <button class="btn btn-dark display-1 fs-1">
                More Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
import RowSeperator from "../components/RowSeperator.vue";
import SwiperComponent from "../components/SwiperComponent.vue";

export default {
    setup() {
        return {
            scrollToTop() {
                window.scrollTo(0, 0);
            }
        };
    },
    components: { RowSeperator, SwiperComponent }
};
</script>

<style scoped lang="scss">

.join-newsletter-button{
  position: absolute;
 right: 5%;
  bottom: 15%;
}
.join-newsletter-button-2{
  position: absolute;
 right: 5%;
  bottom: 20%;
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
.testimonial-profile-image {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: -20%;
  right: 35%;
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
.image-box {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}

.image-box img {
  width: 100%;
  transition: 0.5s;
  border-radius: 6px;
}

.text-box {
  position: absolute;
  top: 0;
  left: -200%;
  height: 100%;
  width: 100%;
  background: rgba(255, 181, 150, 0.5);
  transition: 0.5s;
  backdrop-filter: blur(2px);
  border-radius: 6px;
}

.text-box .title {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  width: 100%;
  font-size: 3.5em;
  font-weight: 700;
  line-height: 1em;
    color: white;
  -webkit-text-stroke: 0px #f1a3a3;
  text-shadow: 0px 1px 4px #000000;
  transform: translateX(-50%) translateY(-50%);
}
.text-box button {
  margin: 0;
  padding: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.text-box .content {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 75%;
  left: 50%;
  width: 100%;
  font-size: 1.25em;
  padding-left: 1.5em;
  padding-right: 1.5em;

  transform: translateX(-50%) translateY(-50%);
}

.image-box:hover .text-box {
  left: 0%;
}

.image-box:hover img {
  transform: scale(1.2);
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
  background-position: right 400% bottom 40%;
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
