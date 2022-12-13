import { createRouter, createWebHistory } from "vue-router";
import Main from "./pages/Main.vue";
import About from "./pages/About.vue";
import PageNotFound from "./pages/PageNotFound.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 });
    } else {
      document.querySelector("html").style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      document.querySelector("html").style.scrollBehavior = "";
    }
  },
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Main,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutRight",
      },
    },
    // {
    //   path: "/about",
    //   component: About,
    //   meta: {
    //     enterClass: "animate__animated animate__fadeInRight",
    //     leaveClass: "animate__animated animate__fadeOutLeft",
    //   },
    // },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
  ],
});

export default router;
