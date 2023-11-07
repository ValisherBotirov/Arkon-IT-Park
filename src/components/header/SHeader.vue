<template>
  <div>
    <div class="container relative z-[20]">
      <SideBar
        :is-open="openSidebar"
        @closeSidebar="(e) => (openSidebar = e)"
      />

      <div class="flex justify-between items-center py-3 pt-8">
        <router-link to="/" class="flex flex-shrink-0">
          <img v-if="isBlack"
              src="../../assets/icon/logo_black.svg"
              alt="Logo svg"
              class="w-[127px] h-[43px]"
          />
          <img v-else
            src="../../assets/icon/logo.svg"
            alt="Logo svg"
            class="w-[127px] h-[43px]"
          />
        </router-link>

        <div class="flex items-center gap-4">
          <DarkSwitcher />
<!--          <div-->
<!--            class="block lg:hidden flex-shrink-0 text-white cursor-pointer"-->
<!--            @click="openSidebar = true"-->
<!--          >-->
<!--            <i class="fa-solid fa-bars text-[20px] ms:text-[25px]"></i>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SideBar from "@/components/SideBar.vue";
import DarkSwitcher from "@/components/header/DarkSwitcher.vue";

interface Props{
  isBlack:boolean
}

withDefaults(defineProps<Props>(),{
  isBlack:false
})

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
