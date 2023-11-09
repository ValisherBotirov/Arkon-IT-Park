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
  {
    path: "/brand",
    name: "brand",
    component: () => import("@/pages/brand/BrandPage.vue"),
  },
  {
    path: "/brand/:id",
    name: "brand-single",
    component: () => import("@/pages/brand/BrandSingle.vue"),
  },
  {
    path: "/union",
    name: "union",
    component: () => import("@/pages/union/UnionPage.vue"),
  },
  {
    path: "/primer",
    name: "primer",
    component: () => import("@/pages/primer/PrimerPage.vue"),
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
