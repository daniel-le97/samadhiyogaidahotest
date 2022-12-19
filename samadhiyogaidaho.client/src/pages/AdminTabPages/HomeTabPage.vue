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
import { AppState } from "../../AppState";

export default {
  setup() {
    return {
      stats: computed(() => AppState.fakeStats),
    };
  },
  components: { },
};
</script>

<style lang="scss" scoped></style>
