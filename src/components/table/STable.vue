<template>
  <div>
    <p class="text-[#4B4B4C] text-sm font-bold leading-[22px] mb-1">TEXT</p>
    <div class="relative overflow-x-auto ">
      <table class="w-full text-sm text-left text-black border-s">
        <thead class="text-xs text-black uppercase bg-#fff" v-if="!isHead">
          <tr class="border-s-b" v-if="!oneHead">
            <th class="px-5 py-5 w-1/2  border-s-r">
              {{ headItem?.name }}
            </th>
            <th class="px-5 py-5">{{ headItem?.value }}</th>
          </tr>
          <tr class="border-s-b" v-else>
            <th scope="col" class="px-5 py-5 w-full text-right border-s-r">
              Норма - Метод
            </th>
            <!--          <th></th>-->
          </tr>
        </thead>
        <tbody class="!bg-white">
          <tr
            class="border-s-b text-black w-1/2 !font-medium"
            v-for="item in bodyItem"
            :key="item"
          >
            <th class="px-6 py-4 border-s-r">
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

<style scoped>
.border-s{
  border: 0.05em solid #5B5B5B;
}
.border-s-b{
  border-bottom: 0.05em solid #5B5B5B;
}
.border-s-r{
  border-right: 0.05em solid #5B5B5B;
}
.border-s-l{
  border-left: 0.05em solid #5B5B5B;
}
</style>
