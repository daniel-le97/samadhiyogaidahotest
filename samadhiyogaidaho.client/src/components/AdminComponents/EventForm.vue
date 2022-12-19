<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="handleSubmit()" class="">
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  id="title"
                  placeholder="Event Title"
                  required
                  v-model="editable.title"
                />
                <label for="title">Title</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="location"
                  id="location"
                  placeholder="Location"
                  required
                  v-model="editable.location.place"
                />
                <label for="location">location</label>
              </div>
            </div>
          </div>
          <div class="d-flex">
     <div class="col-md-6 d-flex justify-content-evenly">
             <div class="form-floating mb-3 me-3">
              <input
                type="datetime-local"
                class="form-control"
                name="date"
                id="date"
                placeholder="Date"
                required
                v-model="editable.startDate"
              />
              <label for="date">date</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="datetime-local"
                class="form-control"
                name="time"
                id="time"
                placeholder="Time"
                required
                v-model="editable.endDate"
              />
              <label for="time">time</label>
            </div>
     </div>
                <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="location"
                  id="location"
                  placeholder="Location"
                  required
                  v-model="editable.location.address"
                />
                <label for="location">Address</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="url"
                  class="form-control"
                  name="coverImage"
                  id="coverImage"
                  placeholder="Event Cover Image"
                  v-model="editable.img"
                />
                <label for="coverImage">Cover Image (Will use a Default Image if none provided)</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  name="cost"
                  id="cost"
                  placeholder=""
                  required
                  v-model="editable.cost"
                />
                <label for="cost">Cost</label>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea
              class="form-control"
              name="description"
              id="description"
              rows="3"
              required
              v-model="editable.description"
            ></textarea>
          </div>
          <button class="btn bg-success fs-2 font-2">Submit Event</button>
        </form>
      </div>
    </div>

      <div class="row my-5 "  v-if="editable.title" v-motion-pop>
   <div class="col-md-6 d-flex align-items-center justify-content-center" >
<img :src="editable.img" alt="" class="img-fluid rounded elevation-6 hover-image w-75">
   </div>
   <div class="col-md-6 text-start">
<p class="underline  fs-1 font-1  border-2 border-bottom text-start text-pink darken-20">{{editable.title}}</p>
<div class="d-flex">
  <div  class="me-3"><p class="text-start">{{editable.startDate}} - {{editable.endDate}}  (This Will Convert To Proper Format) </p>

<p class="text-start">{{editable.location.place}} </p>
<p class="text-start">{{editable.location.address}} </p></div>
<div class="fs-2 font-2">
${{editable.cost }}  per   <img src="https://cdn-icons-png.flaticon.com/512/8927/8927683.png" alt="" class="img-fluid" width="80" height="80">

</div>
</div>
<p class="fs-4 text-start">{{editable.description}} 
</p>


   </div>
  </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { AppState } from "../../AppState.js";
import { eventsService } from "../../services/EventsService";
import Pop from "../../utils/Pop";

export default {
  setup() {
    const editable = ref({location:{}});

    return {
      editable,

      account: computed(() => AppState.account),

      async handleSubmit() {
        try {
          
          await eventsService.createEvent(editable.value);
          Pop.success("Event Approved");
          editable.value = {};
        } catch (error) {
          Pop.error("[creatorEvent]");
        }
      },
    };
  },
};
</script>

<style scoped>

.form-control, .form-control:required{
  border: 0;
    background-color:rgba(253, 163, 107, 0.2);
  box-shadow: rgba(255, 113, 25, 0.2) 0px 13px 27px -5px, rgba(249, 130, 18, 0.3) 0px 8px 16px -8px;
}

.form-control:valid{
    border: 0;
    background-color:rgba(71, 255, 25, 0.2) ;
    transition: all 0.5s ease;
  box-shadow: rgba(71, 255, 25, 0.2) 0px 13px 27px -5px, rgba(249, 130, 18, 0.3) 0px 8px 16px -8px;
}
</style>

