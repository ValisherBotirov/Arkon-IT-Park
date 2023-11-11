<template>
  <div>
    <div
      v-if="width < 500"
      class="dark:bg-[#010108] bg-white h-full overflow-hidden min-h-[100vh] flex flex-col justify-between"
    >
      <div>
        <NavBar class="fixed z-50 mx-auto" />
        <router-view />
      </div>
      <Footer />
      <SLoading v-if="isLoading" />
    </div>
    <div v-else class="w-screen h-screen flex justify-center items-center">
      <div class="px-[100px] mt-[100px] text-center">
        <div class="flex justify-center">
          <img src="./assets/icon/logo_black.svg" alt="" />
        </div>

        <p class="text-4xl mt-5">
          Отсканируйте QR код чтобы открыть <br />
          сайт на мобильном устройстве.
        </p>
        <div class="flex justify-center">
          <img
            src="./assets/svg/qr-code.png"
            class="w-[210px] h-[210px] mt-8"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/SFooter.vue";
import { onMounted, ref, onUnmounted } from "vue";
import SLoading from "@/components/SLoading.vue";
import SHeader from "@/components/header/SHeader.vue";
import NavBar from "@/components/NavBar.vue";

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
