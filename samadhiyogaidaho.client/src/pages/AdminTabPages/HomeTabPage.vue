<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <input type="file" multiple v-on:change="uploadFile" />
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
// import { pocketBaseService } from "../../services/pocketBaseService";
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
      async getPocket() {
        try {
          console.log("hi");
          // const pocketBaseService = async() => await import(
          //   "../../services/pocketBaseService.js"
          // );
          // console.log(pocketBaseService);
        } catch (error) {
          Pop.error(error);
        }
      },
      async uploadFile(e) {
        try {
        const {pocketBaseService} = await import("../../services/PocketBaseService.js")
          await pocketBaseService.uploadFile(e);
        } catch (error) {
          Pop.error(error)
        }
      },
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
