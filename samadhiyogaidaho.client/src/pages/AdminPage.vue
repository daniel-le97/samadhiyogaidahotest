<template>
<div class="container my-5">
  <div class="row">
    <div class="col-md-example">
      <RetreatForm/>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import RetreatForm from "../components/RetreatForm.vue";
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js";

export default {
    props: {},
    setup(props) {
        const editable = ref({});
        onMounted(() => {
        });
        watchEffect(() => { });
        return {
            editable,
        };
    },
    components: { RetreatForm }
}
</script>

<style lang="scss" scoped>
</style>
