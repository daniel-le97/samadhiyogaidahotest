<template>
  <div class="component">
    <button @click="form = !form" class="btn btn-primary">add an event</button>
    <RetreatForm v-if="form" />
  </div>
</template>

<script>
import { ref } from "vue";
import RetreatForm from "../RetreatForm.vue";

export default {
  setup() {
    const form = ref(false);
    return {
      form,
    };
  },
  components: { RetreatForm },
};
</script>

<style lang="scss" scoped></style>
