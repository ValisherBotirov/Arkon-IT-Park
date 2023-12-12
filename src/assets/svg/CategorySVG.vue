<script setup lang="ts">
interface Props {
  mood: string;
}

withDefaults(defineProps<Props>(), {
  mood: "#000",
});
</script>

<template>
  <div class="cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M0 3C0 1.34315 1.34315 0 3 0H8C9.65685 0 11 1.34315 11 3V8C11 9.65685 9.65685 11 8 11H3C1.34315 11 0 9.65685 0 8V3Z"
        :fill="mood"
      />
      <path
        d="M0 16C0 14.3431 1.34315 13 3 13H8C9.65685 13 11 14.3431 11 16V21C11 22.6569 9.65685 24 8 24H3C1.34315 24 0 22.6569 0 21V16Z"
        :fill="mood"
      />
      <path
        d="M13 3C13 1.34315 14.3431 0 16 0H21C22.6569 0 24 1.34315 24 3V8C24 9.65685 22.6569 11 21 11H16C14.3431 11 13 9.65685 13 8V3Z"
        :fill="mood"
      />
      <path
        d="M13 16C13 14.3431 14.3431 13 16 13H21C22.6569 13 24 14.3431 24 16V21C24 22.6569 22.6569 24 21 24H16C14.3431 24 13 22.6569 13 21V16Z"
        :fill="mood"
      />
    </svg>
  </div>
</template>
