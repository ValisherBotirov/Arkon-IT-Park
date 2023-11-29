<script setup lang="ts">
interface Props {
  data?: {
    id: number;
    type: string;
    name: string;
    image: string;
  }[];
}

defineProps<Props>();
</script>
<template>
  <div>
    <p class="text-2xl text-dark dark:text-white">Category</p>
    <div class="grid grid-cols-2 gap-4 mt-5">
      <div
        v-for="item in data"
        :key="item"
        class="h-[112px] w-full rounded-[16px] flex items-center justify-center gap-[13px] xs:gap-[0px]"
      >
        <router-link
          :to="item?.type ? `/category?type=${item?.type}&id=${item?.id}` : '#'"
          class="flex-shrink-0 h-full w-full relative"
        >
          <img
            :src="item?.image"
            alt="logo"
            class="flex-shrink-0 w-full h-full cursor-pointer hidden dark:flex"
          />
          <p
            class="font-medium leading-[30px] text-2xl bottom-[8px] absolute text-white left-[21px] text-shadow"
          >
            {{ item?.name }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.text-shadow {
  //box-shadow: 0px 4px 4px 0px #00000040;
}
</style>
