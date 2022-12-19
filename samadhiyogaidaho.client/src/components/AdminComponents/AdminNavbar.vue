<template>
  <div class="container-fluid bg-dark sticky-top border-light border-start">
    <div class="row">
      <div class="col-12">
        <span v-if="admin">Hi, {{ admin.name }}!</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState";

export default {
  setup() {
    return {
      admin: computed(() => AppState.account),
    };
  },
};
</script>

<style lang="scss" scoped></style>
