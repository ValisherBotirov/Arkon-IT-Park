<template>
  <div>
    <p class="text-[#4B4B4C] text-sm font-bold leading-[22px] mb-1">TEXT</p>
    <div class="relative overflow-x-auto shadow-md border border-[#5B5B5B]">
      <table class="w-full text-sm text-left text-black border-[#5B5B5B]">
        <thead class="text-xs text-black uppercase bg-#fff" v-if="!isHead">
          <tr class="border-b border-[#5B5B5B]" v-if="!oneHead">
            <th class="px-5 py-5 w-1/2 border-r border-[#5B5B5B]">
              {{ headItem?.name }}
            </th>
            <th class="px-5 py-5">{{ headItem?.value }}</th>
          </tr>
          <tr class="border-b border-[#5B5B5B]" v-else>
            <th scope="col" class="px-5 py-5 w-full text-right">
              Норма - Метод
            </th>
            <!--          <th></th>-->
          </tr>
        </thead>
        <tbody class="!bg-white">
          <tr
            class="border-b border-[#5B5B5B] text-black w-1/2 !font-medium"
            v-for="item in bodyItem"
            :key="item"
          >
            <th class="px-6 py-4 border-r border-[#5B5B5B]">
              {{ item?.name }}
            </th>
            <th class="px-5 py-4 w-1/2">{{ item?.value }}</th>
            <th class="px-5 py-4 w-1/2" v-if="false">{{}}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isHead: boolean;
  oneHead: boolean;
  headItem?: {
    name: string;
    value: string;
  };
  bodyItem?: {
    name: string;
    value: string;
  }[];
}

withDefaults(defineProps<Props>(), {
  isHead: false,
  oneHead: false,
});
</script>
