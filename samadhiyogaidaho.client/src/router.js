import { createRouter, createWebHashHistory } from "vue-router";
import { authGuard } from "@bcwdev/auth0provider-client";

function loadPage(page) {
  return () => import(`./pages/${page}.vue`);
}
 function  loadComponent(component) {
  return () => import(`./pages/AdminTabPages/${component}Page.vue`);
}

const routes = [
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
  },

  {
    path: "/contact",
    name: "Contact",
    component: loadPage("ContactPage"),
  },

  {
    path: "/newsletter",
    name: "NewsLetter",
    component: loadPage("NewsLetterPage"),
  },

  {
    path: "/faq",
    name: "FAQ",
    component: loadPage("FAQPage"),
  },
  {
    path: "/account",
    name: "Account",
    component: loadPage("AccountPage"),
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
        name: 'AdminRetreats',
        component: loadComponent("RetreatTab"),
      },
      {
        path: "settings",
        name: 'AdminSettings',
        component: loadComponent("SettingsTab"),
      },
      {
        path: "schedule",
        name: 'AdminSchedule',
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


