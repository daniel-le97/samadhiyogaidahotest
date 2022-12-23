<template>
    <div class="container-fluid">
    <div class="row scrollable-y"  >
      <div class="col-6" >
      
         <div class="position-relative">
          <!-- <RetreatPage/> -->

           <!-- <EventCard :event="event" /> -->
               <div class="d-flex justify-content-center gap-2  position-absolute top-0 start-0">
            <button class="btn btn-outline-warning font-2 fs-3" >
              edit event
            </button>
            <button class="btn btn-outline-danger font-2 fs-3">delete event</button>
          </div>
         </div>
   
      </div>
    </div>
      <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- <EventForm /> -->
        <!-- <div class="elevation-1">
          <EventCard :event="activeEvent" />
        </div> -->
      </div>
    </div>
  </div>
  </div>
  <div class="component">
    <button @click="form = !form" class="btn btn-primary">add an event</button>
    <RetreatForm />
  </div>
</template>

<script>
import { ref } from "vue";
import RetreatForm from "../../components/AdminComponents/RetreatForm.vue";
import RetreatPage from "../RetreatPage.vue";


export default {
  setup() {
    const form = ref(false);

    return {
      form,
    };
  },
  components: { RetreatForm, RetreatPage },
};
</script>

<style lang="scss" scoped></style>
