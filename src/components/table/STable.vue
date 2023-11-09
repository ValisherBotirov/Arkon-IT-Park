<template>
  <div class="relative overflow-x-auto shadow-md rounded-lg border dark:border-[#808080] ">
    <table class="w-full text-sm text-left text-black dark:text-white ">
      <thead class="text-xs text-black uppercase bg-[#E7E7E7] dark:bg-[#333333] dark:text-white " v-if="!isHead">
      <tr class="border-b dark:border-[#808080]" v-if="!oneHead">
        <th class="px-5 py-5 w-1/2  border-r dark:border-[#808080]">
          Группа
        </th>
        <th class="px-5 py-5">
          Дизайн / Металл
        </th>
      </tr>
      <tr class="border-b dark:border-[#808080]" v-else>
        <th scope="col" class="px-5 py-5 w-1/2 ">
          Норма - Метод
        </th>
        <th></th>
      </tr>
      </thead>
      <tbody class="!bg-white dark:!bg-black">
      <tr class="border-b  dark:border-[#808080] text-gray-900 w-1/2 dark:text-white !font-medium" v-for="item in 5" :key="item">
        <th  class="px-6 py-4 border-r dark:border-[#808080]">
          Apple
        </th>
        <td class="px-5 py-4 w-1/2">
          Silver
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  interface Props{
    isHead:boolean
    oneHead:boolean
    bodyItem?:{
      name:string
      value:string
    }
  }

  withDefaults(defineProps<Props>(),{
    isHead:false,
    oneHead:false
  })
</script>
