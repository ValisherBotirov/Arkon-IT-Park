<template>
  <div>
    <div
        class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
        v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
      <SHeader is-icon icon-path="/"/>
      <div class="container relative z-20 ">
        <h2 class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[310px] pt-[233px]">КАТЕГОРИЯ OSSIDO</h2>
      </div>
    </div>
    <div class="container">
      <div class="flex flex-col gap-5 translate-y-[-40px] relative z-20">
        <CategoryCard v-for="item in 3" :key="item" :link="`/product/${item}`"  text=""  img=""/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import SHeader from "@/components/header/SHeader.vue";
import CategoryCard from "@/components/card/CategoryCard.vue";

const route = useRoute()

const image = `src/assets/fake-images/banner.png`;
</script>

