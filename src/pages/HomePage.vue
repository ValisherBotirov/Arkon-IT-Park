<template>
  <div>
    <div
      class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
      <SHeader is-black />
      <div class="container relative z-20">
        <h2
          class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[370px] pt-[233px]"
        >
          КОЛЛЕКЦИИ LAMINAM
        </h2>
      </div>
    </div>
    <div class="container">
      <RouterCard class="translate-y-[-40px] relative z-20" />
      <pre class="text-white">
<!--        {{brandData}}-->
      </pre>
      <div
        class="dark:bg-[#1A1A1A] bg-[#FAFAFA] p-5 dark:text-white text-black rounded-[25px] translate-y-[-10px]"
      >
        <p
          class="leading-[18.91px] htmlText"
          v-html="brandData?.description"
        ></p>
      </div>
      <div class="flex flex-col gap-[30px] mt-5">
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
</template>
<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import RouterCard from "@/components/card/RouterCard.vue";
import CategoryCard from "@/components/card/CategoryCard.vue";
import axios from "@/plugins/axios.ts";
import { onMounted, ref } from "vue";
const image = `src/assets/static/homebanner.png`;

const brandData = ref([]);
console.log(brandData);

function fetchTest() {
  axios
    .get("stones/brand/1/")
    .then((res: any) => {
      console.log(res);
      brandData.value = res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
}

onMounted(() => {
  fetchTest();
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
