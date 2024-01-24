<script setup lang="ts">
interface Props {
  img: string;
  text: string;
  link: string;
  color: string;
  align?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <router-link :to="`${link}`" class="relative w-full category_card">
      <img :src="img" alt="images" class="w-full h-full object-cover" />
      <p
        class="absolute left-[50px] z-20 top-0 text-white top-[38px] font-medium text-xl leading-[23.64px]"
       :style="{color:color}"
      >
        {{ text }}
      </p>
    </router-link>
  </div>
</template>
