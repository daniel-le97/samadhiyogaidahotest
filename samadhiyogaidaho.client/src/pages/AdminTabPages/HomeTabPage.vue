<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
    hello
      </div>
    
    </div>
  </div>
</template>

<script>
// import AdminCards from "../AdminCards.vue";
// import { AppState } from "../../../AppState";
import { computed } from "@vue/reactivity";
import { onBeforeMount, onMounted } from "vue";
import { AppState } from "../../AppState";
import { eventsService } from "../../services/EventsService";
import Pop from "../../utils/Pop";

export default {
  setup() {
    // onMounted(() => {
    //   getEvents()
    // })
    // async function getEvents(){
    //   try {
    //       await eventsService.getEvents()
    //     } catch (error) {
    //       Pop.error(error)
    //     }
    // }
    return {
      stats: computed(() => AppState.fakeStats),
    };
  },
  components: { },
};
</script>

<style lang="scss" scoped></style>
