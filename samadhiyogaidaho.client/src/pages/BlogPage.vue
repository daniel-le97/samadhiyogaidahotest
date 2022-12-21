<template>
<section class="container" style="margin-top:300px">
  <div class="row">
    <div class="col-md-6">
  
    </div>
  </div>
</section>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";

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
    components: { }
}
</script>

<style lang="scss" scoped>
</style>
