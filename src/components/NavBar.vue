<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import {ref} from "vue";

const openSidebar = ref(false);
</script>

<template>
  <div class="bottom-6 left-1/2 -translate-x-1/2">
    <div class="flex items-center justify-center gap-5 bg-[#1A1A1A] rounded-[25px] px-[30px] py-7">
      <router-link to="/" class="flex-shrink-0 ">
        <img src="@/assets/icon/navbar/category.svg" alt="navbar icon" class="flex-shrink-0 cursor-pointer">
      </router-link>
      <router-link to="/brand" class="flex-shrink-0 ">
        <img src="@/assets/icon/navbar/sofa.svg" alt="navbar icon" class="flex-shrink-0 cursor-pointer">
      </router-link>
      <router-link to="/union" class="flex-shrink-0 ">
        <img src="@/assets/icon/navbar/architects.svg" alt="navbar icon" class="flex-shrink-0 cursor-pointer">
      </router-link>
      <router-link to="/primer" class="flex-shrink-0 ">
        <img src="@/assets/icon/navbar/architects.svg" alt="navbar icon" class="flex-shrink-0 cursor-pointer">
      </router-link>
      <img src="@/assets/icon/navbar/search.svg" alt="navbar icon" class="flex-shrink-0 cursor-pointer"
           @click="openSidebar = true">
    </div>
    <SideBar
        :is-open="openSidebar"
        @closeSidebar="(e) => (openSidebar = e)"
    />
  </div>

</template>

<style scoped>

</style>