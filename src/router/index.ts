import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "intro",
    component: () => import("@/pages/Homi.vue"),
  },
  {
    path: "/home",
    name: "homePage",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/category",
    name: "CategoryPage",
    component: () => import("@/pages/CategoryPage.vue"),
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
    path: '/map',
    name:"map",
    component:()=> import("@/pages/MapPage.vue")
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
];

const router = createRouter({
  history: createWebHistory(),

  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
