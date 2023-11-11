<script setup lang="ts">
interface Props {
    img: string,
    text: string,
    link: string
}

defineProps<Props>()
</script>
<template>
    <div>
        <p class="text-3xl text-dark dark:text-white">Гранитные камни</p>
        <div class="flex justify-around mt-5">
            <div
                class="py-[15px] px-[25px] dark:bg-[#1A1A1A] rounded-[25px] flex items-center justify-center gap-4 xs:gap-[0px] bg-[#FAFAFA]">
                <router-link to="/homePage" class="flex-shrink-0 ">
                    <img src="@/assets/icon/btnLogo1.svg" alt="logo"
                        class="flex-shrink-0 w-[94px] cursor-pointer hidden dark:flex">
                    <img src="@/assets/icon/btnLogo1_black.svg" alt="logo"
                        class="flex-shrink-0 cursor-pointer dark:hidden w-[94px]">
                </router-link>
            </div>
            <div
                class="py-[22px] px-[30px] dark:bg-[#1A1A1A] rounded-[25px] flex  items-center justify-center gap-4 xs:gap-[30px] bg-[#FAFAFA]">
                <router-link to="/product" class="flex-shrink-0 ">
                    <img src="@/assets/icon/btnLogo2.svg" alt="logo"
                        class="flex-shrink-0 cursor-pointer w-[94px] hidden dark:flex">
                    <img src="@/assets/icon/btnLogo2_black.svg" alt="logo"
                        class="flex-shrink-0 cursor-pointer w-[94px] dark:hidden">
                </router-link>

            </div>
        </div>
        <div class=" mt-5">
            <div
                class="py-[22px] px-[25px] dark:bg-[#1A1A1A] rounded-[25px] flex items-center justify-center gap-4 xs:gap-[0px] bg-[#FAFAFA]">
                <router-link to="/union" class="flex-shrink-0 ">
                    <img src="@/assets/icon/Logo GH.png" alt="logo"
                        class="flex-shrink-0 w-[142px] cursor-pointer hidden dark:flex">
                    <img src="@/assets/icon/Logo GH (1).png" alt="logo"
                        class="flex-shrink-0 cursor-pointer w-[142px]  dark:hidden">
                </router-link>
            </div>
        </div>
    </div>
</template>

