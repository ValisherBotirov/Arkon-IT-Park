import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("@/pages/product/ProductPage.vue"),
  },
  {
    path: "/product/:id",
    name: "product-single",
    component: () => import("@/pages/product/ProductSingle.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
