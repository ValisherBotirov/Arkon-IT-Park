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
        v-if="align == 'center'"
        class="category_card_text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 font-medium text-xl leading-[23.64px]"
        :style="{ color: color }"
      >
        {{ text }}
      </p>
    </router-link>
    <p
      v-if="align == 'bottom'"
      class="font-bold text-sm text-black pt-1 category_card_text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 font-medium text-xl leading-[23.64px]"
    >
      {{ text }}
    </p>
  </div>
</template>
<style>
.category_card {
  position: relative !important;
}
.category_card_text {
  position: absolute !important;
  width: 100%;
  text-align: center;
}
</style>
