<template>
  <div
    class="hero-image position-relative d-flex flex-column justify-content-center align-items-center"
  >
    <div
      class="text-center text-shadow container d-flex flex-column justify-content-center align-items-center"
    >
      <h1
        v-motion
        :initial="{ opacity: 0, y: -100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :delay="600"
        class="display-1 text-light courgette"
      >
        Get In Touch With Us
      </h1>
    </div>

 
  </div>

   <div class="container ">
      <div class="row justify-content-center">
        <div class="col-md-12 my-3">
          <div class="card border-0 square elevation-orange p-3 my-5">
            <div class="row">
              <div class="col-md-6 text-center">
                <div class="card">
                  <img
                    src="https://images.unsplash.com/photo-1549631864-e260b427d492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
                    alt=""
                    class="rounded img-fluid image-1"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="my-3">
                  <p class="fw-bold display-6 mb-0">Leave Us A Message</p>
                  <p class="fs-4">
                    Question? about attending a
                    class, workshop, retreat or private lesson? 
                    <br>
                    Use
                    our contact form below to get in touch:
                  </p>
                </div>
                <form @submit.prevent="handleSubmit()">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control border-0 elevation-orange "
                          name="name"
                          id="name"
                          placeholder=""
                        />
                        <label for="name">Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control border-0 elevation-orange"
                          name="email"
                          id="email"
                          placeholder=""
                        />
                        <label for="email">Email</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control border-0 elevation-orange"
                      name="subject"
                      id="subject"
                      placeholder=""
                    />
                    <label for="subject">Subject</label>
                  </div>
                  <div class="form-floating ">
                    <div class="mb-3">
                      <textarea
                        class="form-control border-0 elevation-orange"
                        name=""
                        id=""
                        rows="6"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
<div class="d-flex justify-content-center align-items-center mt-4">

  <button class="btn btn-dark w-75 py-2 fs-4">Send</button>
</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div class="container-fluid" >
    <div class="row">
      <div class="col-md-6 bg-pink p-5">
        <p class="display-4">Contact Us Directly or Visit Our Studio</p>
        <p>
          <i class="mdi mdi-map-marker fs-3"></i> Address: 2414 Sydney Street
          Chattanooga, TN 37408
        </p>
        <p><i class="mdi mdi-phone fs-3"></i> Phone Number: (423) 531.6977</p>
        <p><i class="mdi mdi-email fs-3"></i> E-mail: info@yogalanding.net</p>
      </div>
      <div class="col-md-6 p-0">
        <img
          src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>
  </div>



</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

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
};
</script>

<style lang="scss" scoped>
.image-1 {
  width: auto;
  height: 600px;
  object-fit: cover;
}

.contact-form {
  position: absolute;
  top: 60%;
}

.hero-image {
  height: 100vh;
  /* always scale the image to the appropriate size of your screen */
  background-size: cover;
  
  background-image: url(https://images.unsplash.com/photo-1619781458519-5c6115c0ee98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
  background-position: bottom;
  /* keeps the image fixed while scrolling , neat effect. */
  background-attachment: fixed;
}
</style>
