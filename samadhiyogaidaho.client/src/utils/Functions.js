import { defineAsyncComponent } from "vue";

export function addOrSkip(arr, item) {
  let found = arr.find((i) => i.id == item.id);
  if (!found) {
    arr.push(item);
  }
}
export function addOne(array, item) {
  array = [item, ...array];
  return array;
}
export function addMany(array, adding, type) {
  array = adding.map((element) => new type(element));
}
export function getDate(date) {
  return new Date(date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
export function getDateTime(date) {
  return new Date(date).toLocaleTimeString("en-Us", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getComponent(component) {
  return defineAsyncComponent(() => import(`../components/${component}.vue`));
}


  // components: {
  //   SwiperComponent2 : defineAsyncComponent(() => import(`../components/HomePage/TestimonialSwiper.vue`)) ,
  //   ParticleComponent : defineAsyncComponent(() => import(`../components/PluginComponents/ParticleComponent.vue`)),
  //   GentleWave : defineAsyncComponent(() => import("../components/PluginComponents/GentleWave.vue")),
  //   CallToAction : defineAsyncComponent(() => import("../components/HomePage/CallToAction.vue")),
  //   TestimonialSection :  defineAsyncComponent(() => import("../components/HomePage/TestimonialSection.vue")),
  //   YouTubeSection :  defineAsyncComponent(() => import("../components/ServicesPage/YouTubeSection.vue")),
  //   RetreatAndEvents:  defineAsyncComponent(() => import("../components/HomePage/RetreatAndEvents.vue")),
  //   CommentBox:  defineAsyncComponent(() => import("../components/MiscComponents/CommentBox.vue")),
  //   ScheduleSection:  defineAsyncComponent(() => import("../components/HomePage/ScheduleSection.vue")),
  //   ServicesSection:  defineAsyncComponent(() => import("../components/HomePage/ServicesSection.vue")),
  //   InstagramFeed:  defineAsyncComponent(() => import("../components/HomePage/InstagramFeed.vue")),
  // },