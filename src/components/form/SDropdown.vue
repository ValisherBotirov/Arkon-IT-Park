<script setup lang="ts">
import { ref } from "vue";

const isOpenSelect = ref(false);
function open() {
  isOpenSelect.value = !isOpenSelect.value;
}
</script>

<template>
  <div>
    <div class="flex justify-between mt-8">
      <p class="text-2xl">Фильтры</p>
      <i
        @click="open()"
        :class="isOpenSelect ? '' : 'rotate-[180deg]'"
        class="text-xl dark:text-white text-[#3C3C4399] fa-solid fa-chevron-down transition duration-300"
      ></i>
    </div>

    <div
      :class="isOpenSelect ? 'hidden' : ''"
      class="w-full text-xl dark:text-white text-black"
    >
      <div class="dark:bg-[#1A1A1A] bg-[#FAFAFA] mt-3 p-4 rounded-2xl">
        <p class="text-xl">Laminam</p>
      </div>
      <div class="dark:bg-[#1A1A1A] bg-[#FAFAFA] mt-3 p-4 rounded-2xl">
        <p class="text-xl">Predmet</p>
      </div>
      <div class="dark:bg-[#1A1A1A] bg-[#FAFAFA] mt-3 p-4 rounded-2xl">
        <p class="text-xl">Golden House</p>
      </div>
    </div>
  </div>
</template>
