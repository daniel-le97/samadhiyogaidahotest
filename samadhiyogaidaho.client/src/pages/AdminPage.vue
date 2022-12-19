<template>
  <div class="container-fluid" v-if="admin?.isAuthenticated">
    <div class="row">
      <div class="col-3 ms-0 p-0">
        <AdminSidePanel />
      </div>
      <div class="col-9 p-0">
        <div>
          <AdminNavbar />
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watchEffect } from "vue";
import { RouterView } from "vue-router";
import { AppState } from "../AppState.js";
import AdminNavbar from "../components/AdminComponents/AdminNavbar.vue";
import AdminSidePanel from "../components/AdminComponents/AdminSidePanel.vue";

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
      admin: computed(() => AppState.user),
    };
  },
  components: {
    RetreatForm,
    AdminSidePanel,
    RetreatForm,
    EventForm,
    AdminSidePanel,
    AdminNavbar,
  },
};
</script>

<style lang="scss" scoped></style>
