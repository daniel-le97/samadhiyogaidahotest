<template>
  <!-- <div class="container-fluid bg-lightPink">
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center my-4"
    >
      <div class="col-md-4 d-flex align-items-center">
        subscrib to our NEWSLETTER
      </div>
      <div class="col-md-8">
        <div
          class="d-flex rounded-pill p-1 bg-light align-items-center elevation-5"
        >
          <input
            type="text"
            name=""
            id=""
            class="form-control rounded-pill p-3 border-0 bg-transparent"
            placeholder="Enter email address"
          />
          <div class="">
            <button
              class="btn btn-dark fw-bold elevation-6 rounded-pill py-4 px-5"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, veritatis?
      </div>
    </div>
  </div>
    </footer>
  </div> -->
  <!-- Remove the container if you want to extend the Footer to full width. -->



  
  <!-- Footer -->
  <footer class="text-center text-dark footer-image bg-pink position-relative" >
    <!-- Grid container -->
    <RowSeperator/>
    <div class="container">
      <div class="row">
        <div class="col-md-6">

          <NewsLetter/>
        </div>
      </div>
      

      <!-- Section: Links -->
      <section class="mt-5">
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center pt-5">
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark">About us</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark">Products</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark">Awards</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark">Help</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-dark">Contact</a>
            </h6>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      </section>
      <!-- Section: Links -->

      <!-- <hr class="my-5" /> -->
<div class="divider div-transparent div-dot my-5"></div>
      <!-- Section: Text -->
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->

      <!-- Section: Social -->
      <section class="text-center mb-5">
        <a href="https://www.facebook.com/people/Samadhi-Yoga-Idaho/100083164429288/?fref=nf&paipv=0&eav=AfZsU1GyYC-3TCWawqpkhNjTENoxFcR48yXyJKsoQDuqyKNUkhTIyy2dAGa7wTrD6QQ&_rdr" class="text-dark me-4">
          <i class="mdi mdi-facebook fs-1"></i>
        </a>
        <a href="https://www.instagram.com/samadhiyogaidaho/" class="text-dark me-4">
          <i class="mdi mdi-instagram fs-1"></i>
        </a>
       
      </section>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->

    <p>Vector Images by <a href="https://www.freepik.com/free-vector/organic-flat-people-meditating-illustration_13297280.htm#query=yoga&position=3&from_view=search&track=sph">Freepik</a></p>
    <!-- Copyright -->
    <div
         class="text-center p-3 bg-lightPink darken-10"
  
         >
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/"
         >Samahdi Yoga Idaho, created by <b> Le* Squared</b></a
        >
    </div>
    <div class="">
      <!-- <a href="https://www.freepik.com">designed by Freepik - Freepik.com</a> -->
    </div>
    <!-- Copyright -->
  </footer>

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import NewsLetter from "./NewsLetter.vue";
import RowSeperator from "./RowSeperator.vue";

export default {
    props: {},
    setup(props) {
        const editable = ref({});
        onMounted(() => { });
        watchEffect(() => { });
        return {
            editable,
        };
    },
    components: { NewsLetter, RowSeperator }
};
</script>

<style lang="scss" scoped>




.wrapper
{
	padding-bottom: 90px;
}

.divider
{
	position: relative;
	margin-top: 90px;
	height: 1px;
}

.div-transparent:before
{
	content: "";
	position: absolute;
	top: 0;
	left: 5%;
	right: 5%;
	width: 90%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, rgb(48,49,51), transparent);
}

.div-arrow-down:after
{
	content: "";
	position: absolute;
	z-index: 1;
	top: -7px;
	left: calc(50% - 7px);
	width: 14px;
	height: 14px;
	transform: rotate(45deg);
	background-color: white;
	border-bottom: 1px solid rgb(48,49,51);
	border-right: 1px solid rgb(48,49,51);
}

.div-tab-down:after
{
	content: "";
	position: absolute;
	z-index: 1;
	top: 0;
	left: calc(50% - 10px);
	width: 20px;
	height: 14px;
	background-color: white;
	border-bottom: 1px solid rgb(48,49,51);
	border-left: 1px solid rgb(48,49,51);
	border-right: 1px solid rgb(48,49,51);
	border-radius: 0 0 8px 8px;
}

.div-stopper:after
{
	content: "";
	position: absolute;
	z-index: 1;
	top: -6px;
	left: calc(50% - 7px);
	width: 14px;
	height: 12px;
	background-color: white;
	border-left: 1px solid rgb(48,49,51);
	border-right: 1px solid rgb(48,49,51);
}

.div-dot:after
{
	content: "";
	position: absolute;
	z-index: 1;
	top: -18px;
	left: calc(50% - 9px);
	width: 36px;
	height: 36px;
	background-color: rgb(255, 225, 205);
	border: 1px solid rgb(48,49,51);
	border-radius: 50%;
	box-shadow: inset 0 0 0 2px white,
					0 0 0 4px white;
}
footer{
  margin-top: 50px;
}
.mailing-list{
  
}
</style>
