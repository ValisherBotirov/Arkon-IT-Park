<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
function routerPush(arg: string) {
  router.push(`/#${arg}`);
}
const openSidebar = ref(false);
</script>

<template>
  <div class="bottom-0 w-[100%] left-1/2 -translate-x-1/2">
    <div
      class="flex items-center justify-between gap-5 bg-[#F5F5F5] dark:bg-[#1A1A1A] px-[30px] py-7"
    >
      <div
        @click="routerPush('Гранитные')"
        class="flex-shrink-0 cursor-pointer"
      >
        <img
          src="@/assets/icon/navbar/category.svg"
          alt="navbar icon"
          class="flex-shrink-0 cursor-pointer hidden dark:flex"
        />
        <img
          src="@/assets/icon/navbar/Vector.svg"
          alt="navbar icon"
          class="flex-shrink-0 w-[25px] cursor-pointer dark:hidden"
        />
      </div>
      <div @click="routerPush('Мебели')" class="flex-shrink-0 cursor-pointer">
        <img
          src="@/assets/icon/navbar/sofa.svg"
          alt="navbar icon"
          class="flex-shrink-0 hidden dark:flex cursor-pointer"
        />
        <img
          src="@/assets/icon/navbar/ic_sofa.svg"
          alt="navbar icon"
          class="flex-shrink-0 cursor-pointer dark:hidden"
        />
      </div>
      <div @click="routerPush('Жилые')" class="flex-shrink-0 cursor-pointer">
        <img
          src="@/assets/icon/navbar/architects.svg"
          alt="navbar icon"
          class="flex-shrink-0 cursor-pointer hidden dark:flex"
        />
        <img
          src="@/assets/icon/navbar/ic_architects.svg"
          alt="navbar icon"
          class="flex-shrink-0 cursor-pointer dark:hidden"
        />
      </div>
      <img
        src="@/assets/icon/navbar/search.svg"
        alt="navbar icon"
        class="flex-shrink-0 cursor-pointer hidden dark:flex"
        @click="openSidebar = true"
      />
      <img
        src="@/assets/icon/navbar/Magnifer.svg"
        alt="navbar icon"
        class="flex-shrink-0 cursor-pointer dark:hidden"
        @click="openSidebar = true"
      />
    </div>
    <SideBar :is-open="openSidebar" @closeSidebar="(e) => (openSidebar = e)" />
  </div>
</template>

<style scoped></style>
