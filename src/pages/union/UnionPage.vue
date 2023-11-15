<template>
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
      <RouterCard
        class="translate-y-[-10px] relative z-20"
        :data="houseList.slice(0, 3)"
        link="/union"
      />
      <!--      <pre class="text-white">{{brandData}}</pre>-->
      <div class="flex flex-col gap-[30px] mt-5">
        <div
          class="bg-[#FAFAFA] dark:bg-[#1A1A1A] p-5 text-black dark:text-white rounded-[25px] text-center"
        >
          <p class="leading-[18.91px] text-xs">
            {{ brandData?.name }}
          </p>
        </div>
        <div class="">
          <AnimationCard :link=brandData2.arkon_url class="h-[80px]" />
        </div>
      </div>
      <div class="flex flex-col gap-[30px] mt-5">
        <div class="text-white htmlTest" v-html="brandData?.content"></div>
        <div class="text-center pb-10">
          <p class="text-white text-3xl font-semibold">
            {{ brandData?.phone }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import axios from "@/plugins/axios.ts";
import AnimationCard from "@/components/card/AnimationCard.vue";
import SHeader from "@/components/header/SHeader.vue";
import RouterCard from "@/components/card/RouterCard.vue";
import { useRoute } from "vue-router";

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
