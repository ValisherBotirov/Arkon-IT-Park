<template>
    <div>
      <div class="relative">
        <BackSVG mood="#fff" class="absolute left-8 top-[47px]" @click="router.push('/')"/>
        <img :src="brandData?.logo" alt="" class="w-full h-[200px] object-cover rounded-0">
      </div>

      <div class="container ">
        <div
          class="bg-[#FAFAFA] p-5  text-black rounded-[25px] "
        >
          <p
            class="leading-[18.91px] htmlText"
            v-html="brandData?.description"
          ></p>
        </div>
        <div class="mt-3 !pb-16">
          <p class="text-[#4B4B4C] font-bold leading-[22px] ">COLLECTIONS LAMINAM</p>
          <div class="flex flex-col gap-5 pt-[10px]">
            <CategoryCard
                v-for="item in brandData?.categories"
                :key="item"
                :link="`/product?id=${item.id}`"
                :text="item.name"
                :img="item.image"
            />
          </div>
        </div>

      </div>
    </div>
</template>
<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import RouterCard from "@/components/card/RouterCard.vue";
import CategoryCard from "@/components/card/CategoryCard.vue";
import axios from "@/plugins/axios.ts";
import { onMounted, ref, watch } from "vue";
import {useRoute, useRouter} from "vue-router";
import Footer from "@/components/SFooter.vue";
import BackSVG from "@/assets/svg/BackSVG.vue";
const image = `src/assets/static/homebanner.png`;
const route = useRoute();
const router = useRouter();

const stoneList = ref([]);
const brandData = ref([]);

function fetchTest() {
  axios
    .get(`stones/brand/${route.query.id}/`)
    .then((res: any) => {
      console.log(res);
      brandData.value = res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
}
function fetchStoneList() {
  axios
    .get("stones/brand-list/")
    .then((res: any) => {
      stoneList.value = res.data;
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
  fetchStoneList();
});
</script>

<style>
.htmlText {
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
}
.htmlText ul {
  margin-left: 16px;
  list-style: disc;
}
</style>
