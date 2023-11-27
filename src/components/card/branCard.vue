<script setup lang="ts">
interface Props {
  dataS?: {
    id: number;
    logo: string;
    logo_light: string;
  }[];
  dataM?: {
    id: number;
    logo: string;
    logo_light: string;
  }[];
   dataH?: {
    id: number;
    logo: string;
    logo_light: string;
  }[];
  link: string;
  title: string;
}

defineProps<Props>();
</script>
<template>
  <div>
    <p class="text-3xl text-dark dark:text-white">Category</p>
    <div class="grid grid-cols-2 gap-4 mt-5">
      <div
        v-for="(item) in dataS"
        :key="item"
        class="py-[22px] px-[25px] dark:bg-[#1A1A1A] h-[80px] rounded-[25px] flex items-center justify-center gap-4 xs:gap-[0px] bg-[#FAFAFA]"
      >
        <router-link :to="`${link}?id=${item?.id}`" class="flex-shrink-0">
          <img
            :src="item?.logo"
            alt="logo"
            class="flex-shrink-0 max-h-[38px] h-full cursor-pointer hidden dark:flex"
          />
          <img
            :src="item?.logo_light"
            alt="logo"
            class="flex-shrink-0 max-h-[38px] h-full cursor-pointer dark:hidden"
          />
        </router-link>
      </div>
      <div
        v-for="(item  ) in dataM"
        :key="item"
        class="py-[22px] px-[25px] dark:bg-[#1A1A1A] h-[80px] rounded-[25px] flex items-center justify-center gap-4 xs:gap-[0px] bg-[#FAFAFA]"
      >
        <router-link :to="`${link}?id=${item?.id}`" class="flex-shrink-0">
          <img
            :src="item?.logo"
            alt="logo"
            class="flex-shrink-0 max-h-[38px] h-full cursor-pointer hidden dark:flex"
          />
          <img
            :src="item?.logo_light"
            alt="logo"
            class="flex-shrink-0 max-h-[38px] h-full cursor-pointer dark:hidden"
          />
        </router-link>
      </div>
      <div
        v-for="(item) in dataH"
        :key="item"
        class="py-[22px] px-[25px] dark:bg-[#1A1A1A] h-[80px] rounded-[25px] flex items-center justify-center gap-4 xs:gap-[0px] bg-[#FAFAFA]"
      >
        <router-link :to="`${link}?id=${item?.id}`" class="flex-shrink-0">
          <img
            :src="item?.logo"
            alt="logo"
            class="flex-shrink-0 max-h-[38px] h-full cursor-pointer hidden dark:flex"
          />
          <img
            :src="item?.logo_light"
            alt="logo"
            class="flex-shrink-0 max-h-[38px] h-full cursor-pointer dark:hidden"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
