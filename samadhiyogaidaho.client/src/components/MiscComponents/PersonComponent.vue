<template>
  <div class="person">
    <img
      v-if="route.name == 'Home'"
      ref="head"
      src="https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?w=1380&t=st=1670086283~exp=1670086883~hmac=c1616d9968e977c320041463a603cc3653adbe028e09a4b1f4bf54b39ade1142"
      alt=""
      class="img-fluid elevation-6 rounded-pill p-1"
      width="300"
      height="300"
    />
    <img
      v-else
      ref="head"
      src="../../assets/img/yogaperson2.png"
      class="img-fluid rounded-pill"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMotion } from "@vueuse/motion";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const head = ref();

    const route = useRoute();
    const refs = [head];

    refs.forEach((ref, index) => {
      const { variant } = useMotion(ref, {
        initial: {
          y: 100,
          opacity: 0,
        },
        enter: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 350,
            damping: 20,
            delay: index * 50,
            onComplete: () => {
              variant.value = "levitate";
            },
          },
        },
        levitate: {
          y: 15,
          transition: {
            duration: 2000,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          },
        },
      });
    });

    return {
      head,

      route,
    };
  },
});
</script>

<style>
.person {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

p {
  text-align: center;
}
</style>
