<script setup lang="ts">
interface Props {
  link: string;
}

defineProps<Props>();
</script>
<template>
  <div class="cursor-pointer max-w-[300px] w-full mx-auto">
    <a rel="ar" :href="link" class="cursor-pointer">
      <img src="@/assets/icon/animbtn.png" alt="animation card" />
    </a>
  </div>
</template>
