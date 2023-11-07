<template>
  <div>
    <div class="container relative z-[20]">
      <SideBar
        :is-open="openSidebar"
        @closeSidebar="(e) => (openSidebar = e)"
      />

      <div class="flex justify-between items-center py-3 pt-8">
        <div
          class="block lg:hidden flex-shrink-0 text-white cursor-pointer"
          @click="openSidebar = true"
        >
          <i class="fa-solid fa-bars text-[20px] ms:text-[25px]"></i>
        </div>
        <router-link to="/" class="flex flex-shrink-0">
          <div class="flex items-center gap-2">
            <div class="max-w-[50px] max-h-[50px] rounded-[50%]">
              <img
                src="../assets/svg/logo-white.svg"
                alt="logo"
                class="py-1 px-1 w-full object-contain"
              />
            </div>
            <p class="text-white text-2xl">algaritm</p>
          </div>
        </router-link>
        <div
          class="items-center gap-[60px] text-white cursor-pointer hidden lg:flex"
        >
          <a
            href="#main-section"
            class="font-medium text-sm leading-[16.94px] transition duration-300 hover:text-[#0469FF] relative navItem"
          >
            Header child
          </a>

        </div>

        <div class="flex flex-shrink-0 items-center gap-3">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {  ref } from "vue";
import SideBar from "@/components/SideBar.vue";


const openSidebar = ref(false);






function getImageUrl(name: string) {
  return new URL(`../assets/icon/${name}.svg`, import.meta.url).href;
}

</script>
<style scoped>
.navItem::after {
  position: absolute;
  content: "";
  bottom: -5px;
  height: 3px;
  width: 100%;
  left: 0;
  top: 22px;
  background: #fdf001;
  border-radius: 2px;
  transition: 0.2s;
  transition-timing-function: ease-in-out;
  transform: scale(0);
}
.navItem:hover::after {
  transform: scale(110%);
}
</style>
