<template>
  <div>
    <div
      class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:opacity-[0.2]"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
              <SHeader is-black/>
    </div>
    <div class="container">text</div>
  </div>
</template>
<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
const image = `src/assets/static/homebanner.png`;
</script>
