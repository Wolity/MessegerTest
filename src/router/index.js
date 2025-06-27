import Detail from "../views/Detail.vue";
import Main from "../views/Main.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/",name:"main", component: Main },
    { path: '/detail/:id',name:"detail", component: Detail },
  ],
});

export default router;
