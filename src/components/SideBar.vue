<template>
  <Teleport to="body">
    <div
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed w-full h-[100vh] inset-y-0 z-[99999] duration-300 right-0 bg-white dark:bg-[#000000] z-[9999]"
    >
      <div class="flex justify-between px-10 pt-10">
        <div class="">
          <img
            src="../assets/icon/logo.svg"
            class="w-[127px] h-[43px] hidden dark:flex"
            alt=""
          />
          <img
            src="../assets/icon/logo_black.svg "
            class="w-[127px] h-[43px] dark:hidden"
            alt=""
          />
        </div>
        <i
          @click="emit('closeSidebar', false)"
          class="fa-sharp fa-solid fa-xmark text-2xl text-black dark:text-white"
        ></i>
      </div>
      <div class="text-black dark:text-white p-10">
        <input
          type="text"
          class="bg-[#0000] dark:text-white text-xl border-2 border-none w-full"
          placeholder="Поиск"
          name=""
          id=""
        />
        <hr />
        <div>
          <div class="flex justify-between mt-5">
            <p class="text-2xl">Фильтры</p>
            <i
              @click="opens()"
              :class="isOpenSelects ? '' : 'rotate-[180deg]'"
              class="text-2xl dark:text-white text-black fa-solid fa-chevron-down transition duration-300"
            ></i>
          </div>
          <div
            :class="isOpenSelects ? 'hidden' : ''"
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
        <div>
          <div class="flex justify-between mt-5">
            <p class="text-2xl">Бренды</p>
            <i
              @click="open()"
              :class="isOpenSelect ? '' : 'rotate-[180deg]'"
              class="text-2xl dark:text-white text-black fa-solid fa-chevron-down transition duration-300"
            ></i>
          </div>
          <div :class="isOpenSelect ? 'hidden' : ''" class="w-full text-xl">
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
        <div
          class="bg-[#FAFAFA] dark:bg-[#1A1A1A] text-center p-10 rounded-2xl mt-[250px] w-[100%]"
        >
          <p class="text-xl">Баннер</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  isOpen: boolean;
}
function open() {
  isOpenSelect.value = !isOpenSelect.value;
}
let isOpenSelect = ref(true);
function opens() {
  isOpenSelects.value = !isOpenSelects.value;
}
let isOpenSelects = ref(true);
defineProps<Props>();

const emit = defineEmits(["closeSidebar"]);
</script>
