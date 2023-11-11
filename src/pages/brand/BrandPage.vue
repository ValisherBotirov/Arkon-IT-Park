<template>
  <div>
    <div
      class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
      v-bind:style="{ 'background-image': 'url(' + brandData?.image + ')' }"
    >
      <SHeader />
      <div class="container relative z-20">
        <h2
          class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[310px] pt-[233px] uppercase"
          v-html="brandData?.slogan"
        ></h2>
      </div>
    </div>
    <div class="container">
      <RouterCard class="translate-y-[-40px] relative z-20" />
      <!-- <pre class="text-white">{{ brandData?.products[0].is_album}}</pre> -->
      <MebelCard
        v-for="item in brandData?.products"
        :key="item"
        :link="item.id"
        :text="item.name"
        :img="item.image"
        :img2="item.image2"
        :isAlbom="item.is_album"
        :img3="item.image3"
        :back-id="backId"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "@/plugins/axios.ts";
import SHeader from "@/components/header/SHeader.vue";
import RouterCard from "@/components/card/RouterCard.vue";
import MebelCard from "@/components/card/MebelCard.vue";
import { useRoute } from "vue-router";

const brandData = ref([]);
const route = useRoute();
const backId = ref(route.query.id)

function fetchTest() {
  axios
    .get(`mebels/brand/${route.query.id}/`)
    .then((res: any) => {
      console.log(res.data);
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
