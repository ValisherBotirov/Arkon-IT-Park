<template>
  <div class="min-h-[100vh] flex flex-col justify-between">
    <div>
      <div
        class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
        v-bind:style="{ 'background-image': 'url(' + brandData?.image + ')' }"
      >
        <SHeader is-black />
      </div>
      <div class="container">
        <div
          class="bg-[#FAFAFA] dark:bg-[#1A1A1A] p-5 text-black dark:text-white rounded-[25px] text-center translate-y-[-30px]"
        >
          <p
            class="leading-[18.91px] text-black dark:text-white text-2xl"
            v-html="brandData?.name"
          ></p>
        </div>
        <div class="flex flex-col gap-[30px]">
          <!--          <div-->
          <!--            class="bg-[#FAFAFA] dark:bg-[#1A1A1A] p-5 text-black dark:text-white rounded-[25px] text-center"-->
          <!--          >-->
          <!--            <p class="leading-[18.91px] text-xs">-->
          <!--              {{ brandData?.name }}-->
          <!--            </p>-->
          <!--          </div>-->
          <div class="">
            <AnimationCard :link="brandData.arkon_url" class="h-[80px]" />
          </div>
        </div>
        <div class="flex flex-col gap-[30px] mt-6">
          <p class="text-white htmlTest" v-html="brandData.content"></p>
          <div class="text-center pb-10">
            <p class="text-white text-3xl font-semibold">
              {{ brandData?.phone }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-5 mb-16" v-bind="brandData?.brand_data" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import axios from "@/plugins/axios.ts";
import AnimationCard from "@/components/card/AnimationCard.vue";
import SHeader from "@/components/header/SHeader.vue";
import RouterCard from "@/components/card/RouterCard.vue";
import { useRoute } from "vue-router";
import Footer from "@/components/SFooter.vue";

const houseList = ref([]);
const brandData = ref([]);
const route = useRoute();

function fetchTest() {
  axios
    .get(`/houses/brand/${route.query.id}/`)
    .then((res: any) => {
      console.log(res.data);
      brandData.value = res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
}

function fetchHouseList() {
  axios
    .get("houses/brand-list/")
    .then((res: any) => {
      houseList.value = res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
}

function renderHtmlText(text: string) {
  return text.replace(/<[^>]*>/g, "").replace(/<[^>]*>/g, "");
}

watch(
  () => route.query.id,
  () => {
    fetchTest();
  }
);

onMounted(() => {
  fetchTest();
  fetchHouseList();
});
</script>
