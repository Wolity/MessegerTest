import Detail from "../views/Detail.vue";
import Main from "../views/Main.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Main },
    { path: "/detail", component: Detail },
  ],
});

export default router;
