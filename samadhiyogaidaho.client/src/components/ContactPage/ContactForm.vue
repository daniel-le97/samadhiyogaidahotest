<template>
  <div class="card border-0 square elevation-orange p-3  my-3 my-md-5">
    <div class="row">
      <div class="col-md-6 text-center">
        <div class="card elevation-6">
          <div class="image-box">
            <img
              src="https://images.unsplash.com/photo-1549631864-e260b427d492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
              alt=""
              class="rounded img-fluid image-1"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="my-5 my-md-3 text-center">
          <p class="fw-bold display-6 mb-0">Leave Us A Message</p>
          <p class="fs-4">
            Question? about attending a class, workshop, retreat, private lesson
            or just want to get in touch?
            <br />
            Feel free to use our contact form below
          </p>
        </div>
        <form @submit.prevent="handleSubmit()">
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control border-0 elevation-orange"
                  name="name"
                  id="name"
                  placeholder="name*"
                  required
                />
                <label for="name">Name*</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control border-0 elevation-orange"
                  name="email"
                  id="email"
                  placeholder="email*"
                  required
                />
                <label for="email">Email*</label>
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
          <div class="form-floating">
            <div class="mb-3">
              <textarea
                class="form-control border-0 elevation-orange"
                name=""
                id=""
                rows="6"
                placeholder="Message*"
                required
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
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";

export default {
  props: {},
  setup(props) {
    const editable = ref({});

    onMounted(() => {});
    watchEffect(() => {});

    return {
      editable,

      async handleSubmit() {},
    };
  },
};
</script>

<style lang="scss" scoped>
.image-1 {
  max-width: 100%;
  height: 650px;
  object-fit: cover;
  //when screen is 768px OR LESS
  @media only screen and (max-width: 768px) {
    height: 25%;
  
 
  }
}
</style>
