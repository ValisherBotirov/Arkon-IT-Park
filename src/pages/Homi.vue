<template>
  <div>
    <div
      class="relative h-[430px] before:content-[''] before:w-full before:h-[430px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
      <SHeader is-black />
    </div>
    <div class="container">
      <div class="translate-y-[-40px] relative z-20">
        <div class="flex justify-around">
          <div
            class="py-[15px] px-[25px] dark:bg-[#1A1A1A] rounded-[25px] flex items-center justify-center gap-4 xs:gap-[0px] bg-[#FAFAFA]"
          >
            <router-link to="/homePage" class="flex-shrink-0">
              <img
                src="@/assets/icon/btnLogo1.svg"
                alt="logo"
                class="flex-shrink-0 w-[94px] cursor-pointer hidden dark:flex"
              />
              <img
                src="@/assets/icon/btnLogo1_black.svg"
                alt="logo"
                class="flex-shrink-0 cursor-pointer dark:hidden w-[94px]"
              />
            </router-link>
          </div>
          <div
            class="py-[22px] px-[30px] dark:bg-[#1A1A1A] rounded-[25px] flex items-center justify-center gap-4 xs:gap-[30px] bg-[#FAFAFA]"
          >
            <router-link to="/product" class="flex-shrink-0">
              <img
                src="@/assets/icon/btnLogo2.svg"
                alt="logo"
                class="flex-shrink-0 cursor-pointer w-[94px] hidden dark:flex"
              />
              <img
                src="@/assets/icon/btnLogo2_black.svg"
                alt="logo"
                class="flex-shrink-0 cursor-pointer w-[94px] dark:hidden"
              />
            </router-link>
          </div>
        </div>
        <div class="mt-5">
          <div
            class="py-[22px] px-[25px] dark:bg-[#1A1A1A] rounded-[25px] flex items-center justify-center gap-4 xs:gap-[0px] bg-[#FAFAFA]"
          >
            <router-link to="/union" class="flex-shrink-0">
              <img
                src="@/assets/icon/Logo GH.png"
                alt="logo"
                class="flex-shrink-0 w-[142px] cursor-pointer hidden dark:flex"
              />
              <img
                src="@/assets/icon/Logo GH (1).png"
                alt="logo"
                class="flex-shrink-0 cursor-pointer w-[142px] dark:hidden"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import RouterCard from "@/components/card/RouterCard.vue";
import CategoryCard from "@/components/card/CategoryCard.vue";
const image = `src/assets/static/brandPhoto.png`;
</script>
