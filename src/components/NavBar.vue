<script setup lang="ts">
import SideBar from "@/components/SideBar.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchSVG from "@/assets/svg/SearchSVG.vue";
import CategorySVG from "@/assets/svg/CategorySVG.vue";
import LocationSVG from "@/assets/svg/LocationSVG.vue";
const router = useRouter();
const route = useRoute();
function routerPush(arg: string) {
  router.push(`/#${arg}`);
}
const openSidebar = ref(false);
</script>

<template>
  <div class="bottom-0 w-[100%] left-1/2 -translate-x-1/2">
    <div class="flex items-center justify-around gap-5 bg-[#fff] py-4">
      <CategorySVG
        :mood="route.path == '/' ? '#448AF7' : '#000'"
        @click="router.push('/')"
      />
      <SearchSVG
        :mood="openSidebar ? '#448AF7' : '#000'"
        @click="openSidebar = true"
      />
      <LocationSVG
        :mood="route.path == '/map' ? '#448AF7' : '#000'"
        @click="router.push('/map')"
      />
    </div>
    <SideBar :is-open="openSidebar" @closeSidebar="(e) => (openSidebar = e)" />
  </div>
</template>

<style scoped></style>
