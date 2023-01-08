<template>
  <div class="container-fluid schedule-section my-5">
    <div class="row position-relative" >
      <div class="col-md-12 text-center">
        <h1
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="display-2 font-1 underline"
        >
          Schedule
        </h1>
        <br />
      </div>

      <div class="col-md-8 d-flex align-items-center justify-content-center">
        <div
          v-motion-slide-visible-once-bottom
          :delay="300"
          class="card border-0 elevation-6"
        >
          <div class="image-box">
            <img
              src="../../assets/img/studio1.jpg"
              alt=""
              class="img-fluid rounded-4 elevation-6 schedule-img"
            />
          </div>
        </div>
      </div>
      <div
        class="col-md-6 schedule-card rounded elevation-6 bg-white d-flex flex-column align-content-center justify-content-center"
      >
        <ScheduleCard :schedule="s" v-for="s in schedules" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from "../../AppState.js";
import ScheduleCard from "./ScheduleCard.vue";
import { computed } from "@vue/reactivity";
export default {
  setup() {
    return {
      schedules: computed(() => AppState.schedules),

      async changeText() {
        try {
          await scheduleService.createSchedule(this.schedule);
        } catch (error) {
          Pop.error(error);
        }
      },
    };
  },
  components: { ScheduleCard },
};
</script>

<style lang="scss" scoped>

.schedule-img{
width: 100%;
object-fit: cover;
}
.schedule-card{
  position: absolute;
  left: 600px;
  top: 300px;
  //when screen is 768px OR LESS
  //when screen is 768px OR LESS
  //when screen is 768px OR LESS
  @media only screen and (max-width: 1550px){
    width: 600px;
      left: 650px;
     top: 300px;
  }
  @media only screen and (max-width: 1200px){
      position: absolute;
    left: 400px;
  top: 300px;
  }
  @media only screen and (max-width: 768px){
  position: static;
  }
}



</style>
