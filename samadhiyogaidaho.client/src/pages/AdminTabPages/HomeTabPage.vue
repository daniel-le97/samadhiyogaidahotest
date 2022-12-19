<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
    
      </div>
    
    </div>
  </div>
</template>

<script>
import AdminCards from "../AdminCards.vue";
import { AppState } from "../../../AppState";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    return {
      stats: computed(() => AppState.fakeStats),
    };
  },
  components: { AdminCards },
};
</script>

<style lang="scss" scoped></style>
