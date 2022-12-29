<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <iframe plausible-embed src="https://stats.samadhiyogaidaho.com/share/samadhiyogaidaho.com?auth=RFSfFimnknbuf4xq2-JJD&embed=true&theme=dark" scrolling="no" frameborder="0" loading="lazy" style="width: 1px; min-width: 100%; height: 1600px;"><script async src="https://stats.samadhiyogaidaho.com/js/embed.host.js%22%3E"></script></iframe>
<div style="font-size: 14px; padding-bottom: 14px;">Stats powered by <a target="_blank" style="color:#342e37; text-decoration: underline;" href="https://plausible.io">Plausible Analytics</a></div>

      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import Pop from "../../utils/Pop";

export default {
  setup() {
    return {
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
};
</script>

<style lang="scss" scoped></style>
