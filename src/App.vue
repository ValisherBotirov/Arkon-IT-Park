<template>
  <div>
    <div
      v-if="width < 500"
      class="dark:bg-[#010108] bg-white h-full overflow-hidden min-h-[100vh] flex flex-col justify-between"
    >
   <div>
<!--        <SHeader />-->
        <router-view />
   </div>
      <Footer />
      <SLoading v-if="isLoading" />
    </div>
    <div v-else class="w-screen h-screen flex justify-center items-center">
      <p class="text-3xl font-medium">QR kode uchun places</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/SFooter.vue";
import { onMounted, ref, onUnmounted } from "vue";
import SLoading from "@/components/SLoading.vue";
import SHeader from "@/components/header/SHeader.vue";

const isLoading = ref(true);

const width = ref(window.innerWidth);
const onWidthChange = () => (width.value = window.innerWidth);

onMounted(() => {
  window.addEventListener("resize", onWidthChange);

  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});

onUnmounted(() => window.removeEventListener("resize", onWidthChange));
</script>
