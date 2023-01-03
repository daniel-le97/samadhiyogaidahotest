import { createRouter, createWebHashHistory } from "vue-router";
import { authGuard } from "@bcwdev/auth0provider-client";

function loadPage(page) {
  return () => import(`./pages/${page}.vue`);
}
function loadComponent(component) {
  return () => import(`./pages/AdminTabPages/${component}Page.vue`);
}

const routes = [
  {
    path: "/:pathMatch(.*)*",

    name: "not-found",
    component: loadPage("404"),
  },
  {
    path: "/",
    name: "Home",
    component: loadPage("HomePage"),
  },
  {
    path: "/about",
    name: "About",
    component: loadPage("AboutPage"),
  },

  {
    path: "/services",
    name: "Services",
    component: loadPage("ServicesPage"),
  },
  {
    path: "/events",
    name: "Events",
    component: loadPage("EventsPage"),
  },

  {
    path: "/retreats",
    name: "Retreats",
    component: loadPage("RetreatPage"),
    meta:{
      title: 'yoga retreats in boise'
    }
  },

  {
    path: "/contact",
    name: "Contact",
    component: loadPage("ContactPage"),
  },

  {
    path: "/faq",
    name: "FAQ",
    component: loadPage("FAQPage"),
  },

  {
    path: "/admin",
    name: "Admin",
    component: loadPage("AdminPage"),
    beforeEnter: authGuard,
    children: [
      {
        path: "",
        name: "AdminHome",
        component: loadComponent("HomeTab"),
      },
      {
        path: "events",
        name: "AdminEvents",
        component: loadComponent("EventTab"),
      },
      {
        path: "retreats",
        name: "AdminRetreats",
        component: loadComponent("RetreatTab"),
      },
      {
        path: "settings",
        name: "AdminSettings",
        component: loadComponent("SettingsTab"),
      },
      {
        path: "schedule",
        name: "AdminSchedule",
        component: loadComponent("ScheduleTab"),
      },
    ],
  },
];

export const router = createRouter({
  linkActiveClass: "router-link-active",
  linkExactActiveClass: "router-link-exact-active",
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.resolve({
  name: "not-found",
  params: { pathMatch: ["not", "found"] },
}).href; // '/not/found'
