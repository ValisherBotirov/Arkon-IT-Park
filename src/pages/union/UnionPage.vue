<template>
  <div>
    <div
      class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
      <SHeader is-black />
    </div>
    <div class="container">
      <div
        class="bg-[#FAFAFA] dark:bg-[#1A1A1A] p-5 text-black dark:text-white rounded-[25px] text-center translate-y-[-30px]"
      >
        <p class="leading-[18.91px] text-black dark:text-white text-2xl">UNION ON ANHOR</p>
      </div>
      <RouterCard class="translate-y-[-10px] relative z-20" />
      <div class="flex flex-col gap-[30px] mt-5">
        <div class=" bg-[#FAFAFA] dark:bg-[#1A1A1A] p-5 text-black dark:text-white rounded-[25px] text-center">
          <p  class="leading-[18.91px] text-xs">
            Новый проект от компании Golden House.
          </p>
        </div>
        <div class="">
          <AnimationCard class="h-[80px]" />
        </div>
      </div>
      <div class="flex flex-col gap-[30px] mt-5">
        <BrantCard
          v-for="item in 4"
          :key="item"
          :link="`/product?id=${item}`"
          text="test"
          img=""
        />
        <div class="text-center pb-10">
          <p class="text-white text-3xl font-semibold">+998 78 150-11-11</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AnimationCard from "@/components/card/AnimationCard.vue";
import SHeader from "@/components/header/SHeader.vue";
import RouterCard from "@/components/card/RouterCard.vue";
import BrantCard from "@/components/card/BrantCard.vue";
const image = `src/assets/static/brandPhoto.png`;
</script>
