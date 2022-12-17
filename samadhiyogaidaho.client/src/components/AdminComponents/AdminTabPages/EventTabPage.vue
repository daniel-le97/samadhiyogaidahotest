<template>
  <div class="component">
    <button @click="form = true" class="btn btn-primary">add an event</button>
    



    <EventForm v-if="form"/>
  </div>
</template>


<script>
import { ref } from 'vue';
import EventForm from '../EventForm.vue';

export default {
    setup() {
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