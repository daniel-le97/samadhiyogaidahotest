<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div>
          <form @submit.prevent="addCollection">
            <input
              type="text"
              id="newCollection"
              v-model="activeCollection.newName"
            />
            <button type="submit">create new collection</button>
          </form>
        </div>
        <span>choose a collection to upload to</span>
        <div class="d-flex flex-wrap gap-3">
          <div v-for="c in collections">
            <div @click="makeActiveCollection(c)" :class="activeCollection.collection?.name == c.name? 'bg-primary' : ''">{{ c.name }}</div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <input type="file" multiple v-on:change="uploadFile" />
        <div v-if="loading">{{ loading }} files left</div>
        <!-- <button @click="transferToMongo()">transfer</button> -->
      </div>
    </div>
    <div class="row flex-wrap">
      <div class="col-6" v-for="upload in uploaded">
        <img :src="upload" alt="" width="500" height="500" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button @click="sendToDb()">send</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { AppState } from "../../AppState";
import Pop from "../../utils/Pop";
export default {
  setup() {
    onMounted(() => {
      getCollections();
    });
    async function getCollections() {
      try {
        const { pocketBaseService } = await import(
          "../../services/PocketBaseService.js"
        );
        await pocketBaseService.getCollections();
      } catch (error) {
        Pop.error(error);
      }
    }
    const activeCollection = ref({collection:{name: "default"}});
    return {
      uploaded: computed(() => AppState.uploadedImgs),
      loading: computed(() => AppState.loading),
      collections: computed(() => AppState.collections),
      activeCollection,
      async uploadFile(e) {
        try {
          AppState.loading = true;
          const { pocketBaseService } = await import(
            "../../services/PocketBaseService.js"
          );
          await pocketBaseService.uploadFile(e, activeCollection.value.collection);
          AppState.loading = false;
        } catch (error) {
          Pop.error(error);
        }
      },
      async makeActiveCollection(collection) {
        try {
          activeCollection.value.collection = collection;
          console.log(activeCollection.value.collection);
        } catch (error) {
          console.error("[]", error);
          Pop.error(error);
        }
      },
      async addCollection() {
        try {
          let name = activeCollection.value.newName;
          // console.log(activeCollection.value.newName);
          const { pocketBaseService } = await import(
            "../../services/PocketBaseService.js"
          );
          await pocketBaseService.createCollection(name);
        } catch (error) {
          console.error("[]", error);
          Pop.error(error);
        }
      },
      async sendToDb(){
        try {
           const { pocketBaseService } = await import(
            "../../services/PocketBaseService.js"
          );
            await pocketBaseService.transfer()
          } catch (error) {
            Pop.error(error)
          }
      }
    };
  },
};
</script>

<style lang="scss" scoped></style>
