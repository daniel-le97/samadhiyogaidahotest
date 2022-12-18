<template>
  <div
    class="modal fade"
    id=""
    tabindex="-1"
    aria-labelledby="Label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content bg-transparent  ">
       <slot>

       </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';


export default {
  setup() {
    const editable = ref({});

    return {
     
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
