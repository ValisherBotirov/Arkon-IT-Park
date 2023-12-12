<template>
  <Teleport to="body">
    <div
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed w-full h-[100vh] inset-y-0 duration-300 right-0 bg-white dark:bg-[#000000] z-[9999]"
    >
      <div class="flex justify-end px-10 pt-10">
        <i
          @click="emit('closeSidebar', false)"
          class="fa-sharp fa-solid fa-xmark text-xl text-[#3C3C4399] transition duration-300 cursor-pointer hover:text-black"
        ></i>
      </div>
      <div class="px-10 py-4">
        <div class="flex items-center gap-3 justify-center">
          <FilterSVG />
          <p class="text-black">FILTER</p>
        </div>
        <div class="mt-5">
          <label
            for=""
            class="flex gap-3 border border-[#5B5B5B] rounded-[22.5px] bg-white py-3 px-4"
          >
            <SearchSVG mood="#C6C6C8" />
            <input
              type="text"
              class="text-xl h-full w-full min-h-[18px]"
              placeholder="Поиск"
              v-model="inputValue"
              @focus="isActiveInput = true"
            />
            <i
              :class="inputValue !== '' ? 'opacity-1' : 'opacity-0'"
              class="fa-sharp fa-solid fa-xmark text-xl text-[#3C3C4399] transition duration-300 cursor-pointer hover:text-black"
              @click="clearInput"
            ></i>
          </label>
        </div>

        <div>
          <div class="flex justify-between mt-8">
            <p class="text-2xl">Фильтры</p>
            <i
              @click="opens()"
              :class="isOpenSelects ? '' : 'rotate-[180deg]'"
              class="text-xl dark:text-white text-[#3C3C4399] fa-solid fa-chevron-down transition duration-300"
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
              class="text-xl text-[#3C3C4399] fa-solid fa-chevron-down transition duration-300"
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
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FilterSVG from "@/assets/svg/FilterSVG.vue";
import SearchSVG from "@/assets/svg/SearchSVG.vue";

const isActiveInput = ref(false);

interface Props {
  isOpen: boolean;
}

const inputValue = ref("");

function clearInput() {
  isActiveInput.value = false;
  inputValue.value = "";
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
