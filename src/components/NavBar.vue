<script setup lang="ts">

import { useRoute, useRouter } from "vue-router";
import SearchSVG from "@/assets/svg/SearchSVG.vue";
import CategorySVG from "@/assets/svg/CategorySVG.vue";
import LocationSVG from "@/assets/svg/LocationSVG.vue";
const router = useRouter();
const route = useRoute();
function routerPush(arg: string) {
  router.push(`/#${arg}`);
}
</script>

<template>
  <div class="bottom-0 w-[100%] left-1/2 -translate-x-1/2">
    <div class="flex items-center justify-around gap-5 bg-[#fff] py-4">
      <CategorySVG
        :mood="route.path == '/' ? '#448AF7' : '#000'"
        @click="router.push('/')"
      />
      <SearchSVG
        :mood="route.path == '/search' ? '#448AF7' : '#000'"
        @click="router.push('/search')"
      />
      <LocationSVG
        :mood="route.path == '/map' ? '#448AF7' : '#000'"
        @click="router.push('/map')"
      />
    </div>
  </div>
</template>

<style scoped></style>
