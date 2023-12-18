<script setup lang="ts">
import AnimationCardSVG from "@/assets/svg/AnimationCardSVG.vue";

interface Props {
  link: string;
}

defineProps<Props>();
</script>
<template>
  <div class="cursor-pointer max-w-[300px] w-full mx-auto">
    <a
      rel="ar"
      :href="link"
      class="cursor-pointer"
    >
      <img src="@/assets/icon/animbtn.png" alt="animation card">
<!--      <AnimationCardSVG />-->
<!--      <p-->
<!--        class="text-[#448AF7] font-semibold text-xl leading-6 tracking-[0.38px]"-->
<!--      >-->
<!--        View in your space-->
<!--      </p>-->
    </a>
  </div>
</template>
