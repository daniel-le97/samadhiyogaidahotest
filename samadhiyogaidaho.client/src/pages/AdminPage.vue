<template>
  <div class="container-fluid" v-if="admin?.isAuthenticated">
    <div class="row">
      <AdminSidePanel />
      <AdminTabs />
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { RouterView } from "vue-router";
import { AppState } from "../AppState.js";
import AdminSidePanel from "../components/AdminComponents/AdminSidePanel.vue";

import AdminTabs from "../components/AdminComponents/AdminTabs.vue";

import EventForm from "../components/AdminComponents/EventForm.vue";
import RetreatForm from "../components/AdminComponents/RetreatForm.vue";

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
      admin: computed(() => AppState.user)
    };
  },
  components: {
    RetreatForm,
    AdminSidePanel,
    AdminTabs,
    RetreatForm,
    EventForm,
    AdminSidePanel,
    AdminTabs,
  },
};
</script>

<style lang="scss" scoped></style>
