<script setup lang="ts">
interface Props {
  img: string;
  text: string;
  link: string;
}

defineProps<Props>();
</script>

<template>
  <router-link :to="`${link}`" class="h-[100px] relative">
    <img
      src="@/assets/fake-images/img.png"
      alt="images"
      class="w-full h-full"
    />
    <p
      class="absolute left-[50px] z-20 text-white top-[38px] font-medium text-xl leading-[23.64px]"
    >
      Ossido
    </p>
  </router-link>
</template>
