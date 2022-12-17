<template>
  <div class="component">
    <button @click="form = !form" class="btn btn-primary">add an event</button>
    <button @click="form = !form" class="btn btn-primary">edit an event</button>
    



    <EventForm v-if="form"/>
  </div>
</template>


<script>
import { onMounted, ref } from 'vue';
import EventForm from '../EventForm.vue';

export default {
    setup() {
      // onBe(() => {

      // })
      
      const form = ref(false)
        return {
          form
        };
    },
    components: { EventForm }
}
</script>


<style lang="scss" scoped>

</style>