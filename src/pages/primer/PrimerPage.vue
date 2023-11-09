<template>
  <div>
    <div
        class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
        v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
      <SHeader/>
      <div class="container relative z-20 ">
        <h2 class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[310px] pt-[233px] uppercase">PREDMET Делаем
          мебель с душой</h2>
      </div>
    </div>
    <div class="container">
      <RouterCard class="translate-y-[-40px] relative z-20"/>
      <div class=" bg-[#FAFAFA] dark:bg-[#1A1A1A] p-5 text-black dark:text-white rounded-[25px] text-center">
          <p  class="leading-[18.91px] text-xs">
            Новый проект от компании Golden House.
          </p>
        </div>
      <div class="translate-y-[-10px] mt-8">
        <p class="text-black dark:text-white leading-[28.37px] font-medium text-2xl">Пуфы ROUND</p>
        <div class="grid grid-cols-2 gap-5 mt-5">
          <div to="/brand/1" class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center">
            <img src="@/assets/fake-images/Rectangle 16.png" alt="sofa images">
          </div>
          <div to="/brand/1" class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center">
            <img src="@/assets/fake-images/Rectangle 17.png" alt="sofa images">
          </div>
        </div>
      </div>
      <div class="mt-[30px]">
        <p class="text-black dark:text-white leading-[28.37px] font-medium text-2xl">Диваны BASIC</p>
        <div class="grid grid-cols-1 gap-[30px] mt-5">
          <div to="/brand/1" class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center max-h-[250px]">
            <img src="@/assets/fake-images/1.png" alt="sofa images">
          </div>
          <div to="/brand/1" class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center max-h-[250px]">
            <img src="@/assets/fake-images/1 (2).png" alt="sofa images">
          </div>
          <div to="/brand/1" class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center max-h-[250px]">
            <img src="@/assets/fake-images/1 (3).png" alt="sofa images">
          </div>
        </div>
      </div>
      <div class="mt-[30px]">
        <p class="text-black dark:text-white leading-[28.37px] font-medium text-2xl">Диваны BASIC</p>
        <div class="grid grid-cols-1 gap-[30px] mt-5">
          <div to="/brand/1" class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center max-h-[250px]">
            <img src="@/assets/fake-images/1.png" alt="sofa images">
          </div>
          <div to="/brand/1" class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center max-h-[250px]">
            <img src="@/assets/fake-images/1 (2).png" alt="sofa images">
          </div>
          <div to="/brand/1" class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center max-h-[250px]">
            <img src="@/assets/fake-images/1 (3).png" alt="sofa images">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import RouterCard from "@/components/card/RouterCard.vue";
const image = `src/assets/static/homebrand.png`;
</script>
