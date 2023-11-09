<template>
  <div>
    <div
        class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
        v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
      <SHeader is-icon icon-path="/"/>
      <div class="container relative z-20 ">
        <h2 class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[250px] pt-[233px]">VERDERAME LUX</h2>
      </div>
    </div>
    <div class="container">
      <div>
        <AnimationCard class="translate-y-[-40px] h-[100px]"/>
      </div>
      <div>
        <STable class="-translate-y-5"/>
        <STable class="mt-[10px]" one-head/>
        <STable class="mt-[30px]" is-head/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import {useRoute} from "vue-router";
import AnimationCard from "@/components/card/AnimationCard.vue";
import STable from "@/components/table/STable.vue";
const route = useRoute()

const image = `/src/assets/fake-images/banner-single.png`;
</script>