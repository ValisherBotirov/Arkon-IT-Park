<script setup lang="ts">
import AnimationCardSVG from "@/assets/svg/AnimationCardSVG.vue";

interface Props {
  link: string;
}

defineProps<Props>();
</script>
<template>
  <div class="cursor-pointer max-w-[300px] w-full mx-auto">
    <a rel="ar" :href="link" class="border border-[#448AF7] rounded-[22.5px] flex items-center gap-6 px-4 py-2">
      <AnimationCardSVG/>
      <p class="text-[#448AF7] font-semibold text-xl leading-6 tracking-[0.38px]">View in your space</p>
    </a>
  </div>
</template>
