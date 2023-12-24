<template>
  <div>
    <p class="text-[#4B4B4C] text-sm font-bold leading-[22px] mb-1 uppercase">Information</p>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-black border-s">
        <thead class="text-xs text-black uppercase bg-#fff" v-if="!isHead">
          <tr class="border-s-b" v-if="!oneHead">
            <th class="px-5 py-5 w-1/2 border-s-r">
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
.border-s {
  border: 0.02em solid #5b5b5b;
}
.border-s-b {
  border-bottom: 0.02em solid #5b5b5b;
}
.border-s-r {
  border-right: 0.02em solid #5b5b5b;
}
.border-s-l {
  border-left: 0.02em solid #5b5b5b;
}

/* Стили для устройств с высоким разрешением (Retina и др.) */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .border-s,
  .border-s-b,
  .border-s-r,
  .border-s-l {
    border: 1px solid #5b5b5b; /* Используйте 1px для устройств с высоким разрешением */
  }
}
</style>
