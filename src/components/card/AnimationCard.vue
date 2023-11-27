<script setup lang="ts">
interface Props {
  link: string;
}

defineProps<Props>();
</script>
<template>
  <div class="relative z-20 border border-[#363620] rounded-[25px]">
    <a rel="ar" :href=link>
      <img
      src="/images/animation_giff.gif"
      alt="giff animation"
      class="w-full h-full object-cover rounded-[25px]"
    />
    <img
      src="/images/cup.svg"
      alt="card icon"
      class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
    />
    </a>
  </div>
</template>


