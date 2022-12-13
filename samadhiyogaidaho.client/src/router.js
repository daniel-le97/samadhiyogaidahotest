import { createRouter, createWebHashHistory } from "vue-router";
import { authGuard } from "@bcwdev/auth0provider-client";

function loadPage(page) {
  return () => import(`./pages/${page}.vue`);
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
    path: "/blog",
    name: "Blog",
    component: loadPage("BlogPage"),
  },

  {
    path: "/retreat",
    name: "Retreat",
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
    path: "/testimonials",
    name: "Testimonials",
    component: loadPage("TestimonialPage"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: loadPage("AdminPage"),
  },


  {
    path: "/",
    name: "Home",
    component: loadPage("HomePage"),
  },

  {
    path: "/account",
    name: "Account",
    component: loadPage("AccountPage"),
  },
];

export const router = createRouter({
  linkActiveClass: "router-link-active",
  linkExactActiveClass: "router-link-exact-active",
  history: createWebHashHistory(),
  routes,
});
