<template>
  <div>
    <p class="text-[#4B4B4C] text-sm font-bold leading-[22px] mb-1 uppercase" v-if="data?.is_show">
      {{ data?.table_name }}
    </p>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-black border-s">

        <tbody class="!bg-white">
          <tr
            class="border-s-b text-black w-1/2 !font-medium"
            v-for="item in data?.data"
            :key="item"
          >
            <th class="px-6 py-4 border-s-r">
              {{ item?.name }}
            </th>
            <th class="px-5 py-4 w-1/2">{{ item?.value }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data?: {
    table_name: string;
    is_show: boolean;
    data?: {
      name: string;
      value: string;
    }[];
  };
}

defineProps<Props>();
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
