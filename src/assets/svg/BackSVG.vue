<script setup lang="ts">
interface Props {
  mood: string;
}

withDefaults(defineProps<Props>(), {
  mood: "#000",
});
</script>

<template>
  <div
    class="cursor-pointer p-4"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="11" fill="white"/>
      <path d="M7.878 12.6121C7.878 12.6121 7 11.7677 7 11.0011C7 10.2345 7.878 9.38148 7.878 9.38148L13.0362 4.31706C13.4545 3.89717 14.2212 3.8886 14.6656 4.32563C15.1187 4.76266 15.1013 5.51676 14.6743 5.92808L9.52481 11.0011L14.6743 16.0655C15.11 16.494 15.11 17.2309 14.6656 17.6679C14.2212 18.1135 13.4719 18.105 13.0362 17.6765L7.878 12.6121Z" fill="black"/>
    </svg>

  </div>
</template>
