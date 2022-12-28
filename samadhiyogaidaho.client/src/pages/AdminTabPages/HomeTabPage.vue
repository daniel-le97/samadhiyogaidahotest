<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <input type="file" multiple v-on:change="uploadFile" />
        <div v-if="loading">{{ loading }} files left</div>
        <!-- <button @click="transferToMongo()">transfer</button> -->
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <iframe plausible-embed src="https://stats.samadhiyogaidaho.com/share/samadhiyogaidaho.com?auth=RFSfFimnknbuf4xq2-JJD&embed=true&theme=dark" scrolling="no" frameborder="0" loading="lazy" style="width: 1px; min-width: 100%; height: 1600px;"></iframe>
<div style="font-size: 14px; padding-bottom: 14px;">Stats powered by <a target="_blank" style="color:#342e37; text-decoration: underline;" href="https://plausible.io">Plausible Analytics</a></div>

      </div>
    </div>
    <div class="row flex-wrap">
      <div class="col-6" v-for="upload in uploaded">
        <img :src="upload" alt="" width="500" height="500">
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
      loading: computed(() => AppState.loading),
      uploaded: computed(() => AppState.uploadedImgs),
      async uploadFile(e) {
        try {
          AppState.loading = true
        const {pocketBaseService} = await import("../../services/PocketBaseService.js")
          await pocketBaseService.uploadFile(e);
          AppState.loading = false
        } catch (error) {
          Pop.error(error)
        }
      },
      async transferToMongo(){
        try {
             const {pocketBaseService} = await import("../../services/PocketBaseService.js")
          await pocketBaseService.transferToMongo()
          } catch (error) {
            Pop.error(error)
          }
      }
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
