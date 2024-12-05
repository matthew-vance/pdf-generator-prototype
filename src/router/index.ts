import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "create",
      component: () => import("../views/CreateView.vue"),
    },
    {
      path: "/view",
      name: "view",
      component: () => import("../views/ViewView.vue"),
    },
  ],
});

export default router;
