<template>
  <div class="container-fluid" v-if="!activeRetreat">
    <div class="row">
      <div class="col-12 mt-2">
        <button @click="form = !form" class="btn btn-outline-success font-2 fs-3">
         Create Retreat
        </button>
        <RetreatForm v-if="form" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 my-5" v-for="r in retreats">
        <div class="mb-3">
          <button class="btn btn-outline-warning font-2 fs-3 me-2" @click="editRetreat(r)">edit retreat</button>
          <button class="btn btn-outline-danger font-2 fs-3">delete retreat</button>
        </div>
        <RetreatCard :retreat="r"  />
      </div>
    </div>
  </div>
  <div v-else>
  </div>
</template>

<script>
import { ref } from "vue";
import RetreatForm from "../../components/AdminComponents/RetreatForm.vue";
import { retreatsService } from "../../services/RetreatsService";
import Pop from "../../utils/Pop";
import RetreatPage from "../RetreatPage.vue";
import { onMounted, computed } from "vue";
import RetreatCard from "../../components/HomePage/RetreatCard.vue";
import { AppState } from "../../AppState";

export default {
  setup() {
    onMounted(() => {
      getRetreats();
    });
    const form = ref(false);
    async function getRetreats() {
      try {
        await retreatsService.getAllRetreats();
      } catch (error) {
        Pop.error(error);
      }
    }
    return {
      form,
      activeRetreat: computed(() => AppState.activeRetreat),
      retreats: computed(() => AppState.retreats),
      async editRetreat(retreat){
        try {
            AppState.activeRetreat = retreat
            console.log(AppState.activeRetreat);
          } catch (error) {
            Pop.error(error)
          }
      },
    };
  },
  components: { RetreatForm, RetreatPage, RetreatCard },
};
</script>

<style lang="scss" scoped></style>
