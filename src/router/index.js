import VueRouter from "vue-router";
const routes = [
  { path: "/", component: Foo },
  { path: "/detail", component: Bar },
];
const router = new VueRouter({
  routes,
});
