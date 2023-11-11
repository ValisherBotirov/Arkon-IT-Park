<template>
  <div>
    <div
      class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
      <SHeader is-icon icon-path="/brand" />
      <div class="container relative z-20">
        <h2
          class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[250px] pt-[233px]"
        >
          Диван CLOUD
        </h2>
      </div>
    </div>
    <div class="container">
      <div>
        <AnimationCard class="translate-y-[-40px] h-[254px]" />
        <div class="translate-y-[-10px] grid grid-cols-2 gap-5">
          <img
            src="@/assets/fake-images/brand1.png"
            alt="images"
            class="object-cover w-full max-h-[250px] h-full rounded-[25px]"
          />
          <img
            src="@/assets/fake-images/brand2.png"
            alt="images"
            class="object-cover w-full max-h-[250px] h-full rounded-[25px]"
          />
        </div>
        <div class="mt-5 grid grid-cols-1 gap-5">
          <img
            src="@/assets/fake-images/brand3.png"
            alt="images"
            class="object-cover w-full max-h-[250px] h-full rounded-[25px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import { useRoute } from "vue-router";
import AnimationCard from "@/components/card/AnimationCard.vue";
const route = useRoute();

const image = `/src/assets/static/homebrand.png`;
</script>
