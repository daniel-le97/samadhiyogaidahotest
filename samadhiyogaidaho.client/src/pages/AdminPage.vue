<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-3">
        <AdminSidePanel />
      </div>
      <div class="col-md-9">
        
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { RouterView } from "vue-router";
import { AppState } from "../AppState.js";
import AdminSidePanel from "../components/AdminComponents/AdminSidePanel.vue";
import RetreatForm from "../components/RetreatForm.vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {
  props: {},
  setup(props) {
    const editable = ref({});
    onMounted(() => {});
    watchEffect(() => {});
    return {
      editable,
      activeTab: "",
    };
  },
  components: { RetreatForm, AdminSidePanel, RouterView },
};
</script>

<style lang="scss" scoped></style>
