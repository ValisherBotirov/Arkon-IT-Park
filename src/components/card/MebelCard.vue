<script setup lang="ts">
interface Props {
  img: string;
  img2: string;
  img3: string;
  text: string;
  link: string;
  isAlbom: boolean;
  backId?: number | string;
}

defineProps<Props>();
</script>

<template>
  <div v-if="isAlbom == false" class="translate-y-[-10px]">
    <p
      class="text-black dark:text-white leading-[28.37px] font-medium text-2xl"
    >
      {{ text }}
    </p>
    <div>
      <div class="grid grid-cols-2 gap-5 mt-5">
        <router-link
          :to="`/brand/${link}?backId=${backId}`"
          class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center"
        >
          <img :src="img" alt="sofa images" />
        </router-link>
        <router-link
          :to="`/brand/${link}?backId=${backId}`"
          class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center"
        >
          <img :src="img2" alt="sofa images" />
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="mt-[30px]">
      <p
        class="text-black dark:text-white leading-[28.37px] font-medium text-2xl"
      >
        {{ text }}
      </p>
      <div class="grid grid-cols-1 gap-[30px] mt-5">
        <router-link
          v-if="img"
          :to="`/brand/${link}`"
          class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center max-h-[250px]"
        >
          <img :src="img" alt="sofa images" />
        </router-link>
        <router-link
          v-if="img2"
          :to="`/brand/${link}`"
          class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center max-h-[250px]"
        >
          <img :src="img2" alt="sofa images" />
        </router-link>
        <router-link
          v-if="img3"
          :to="`/brand/${link}`"
          class="dark:bg-[#1A1A1A] rounded-[25px] flex justify-center items-center max-h-[250px]"
        >
          <img :src="img3" alt="sofa images" />
        </router-link>
      </div>
    </div>
  </div>
</template>
