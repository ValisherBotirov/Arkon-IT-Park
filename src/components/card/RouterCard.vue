<script setup lang="ts">
interface Props {
  data: {
    id:number;
    logo: string;
    logo_light: string
  }[]
  link: string
}

defineProps<Props>()
</script>

<template>
  <div
      class="py-[22px] px-[30px] dark:bg-[#1A1A1A] rounded-[25px] max-h-[80px] flex items-center  gap-4 xs:gap-[30px] bg-[#FAFAFA]"
      :class="data.length === 3 ? 'justify-center' : 'justify-around'"
  >
    <div v-for="item in data" :key="item">
      <router-link :to='`${link}?id=${item.id}`'>
        <img
            :src="item.logo"
            alt="logo"
            class="flex-shrink-0 cursor-pointer max-h-[32px] hidden dark:flex"
        />
      </router-link>
      <router-link :to='`${link}?id=${item.id}`'>
        <img
            :src="item.logo_light"
            alt="logo"
            class="flex-shrink-0 cursor-pointer dark:hidden max-h-[32px]"
        />
      </router-link>
    </div>
    <!--    <img-->
    <!--      src="@/assets/icon/btnLogo2.svg"-->
    <!--      alt="logo"-->
    <!--      class="flex-shrink-0 cursor-pointer hidden dark:flex"-->
    <!--    />-->
    <!--    <img-->
    <!--      src="@/assets/icon/btnLogo2_black.svg"-->
    <!--      alt="logo"-->
    <!--      class="flex-shrink-0 cursor-pointer dark:hidden"-->
    <!--    />-->
    <!--    <img-->
    <!--      src="@/assets/icon/btnLogo3.svg"-->
    <!--      alt="logo"-->
    <!--      class="flex-shrink-0 cursor-pointer"-->
    <!--    />-->
    <!--    <pre class="text-white">{{data}}</pre>-->
  </div>
</template>

