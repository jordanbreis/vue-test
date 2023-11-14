import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import testeview from "../views/testeview.vue";
import testeviewSec from "../views/testeviewSec.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/testfirt",
      name: "testeview",
      component: testeview,
    },
    {
      path: "/testSec",
      name: "testeviewSec",
      component: testeviewSec,
    },
  ],
});

export default router;
