<template>
  <div>
    <div
      class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
      v-bind:style="{ 'background-image': 'url(' + brandData?.image + ')' }"
    >
      <SHeader is-icon :icon-path="`/brand?id=${backId}`" />
      <div class="container relative z-20">
        <h2
          class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[250px] pt-[233px]"
        >
          {{ brandData?.name }}
        </h2>
      </div>
    </div>
    <div class="container">
      <div>
        <AnimationCard class="translate-y-[-40px] h-[254px]" />
        <div class="translate-y-[-10px] grid grid-cols-2 gap-5">
          <img
            v-for="(item, index) in brandData?.shots"
            :key="index"
            :src="item.image"
            alt="images"
            :class="(index + 1) % 3 == 0 ? 'col-span-2' : 'col-span-1'"
            class="object-cover w-full max-h-[250px] h-full rounded-[25px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "@/plugins/axios.ts";
import SHeader from "@/components/header/SHeader.vue";
import { useRoute } from "vue-router";
import AnimationCard from "@/components/card/AnimationCard.vue";
const route = useRoute();
const brandData = ref([]);

const backId = ref(route.query.backId);
function fetchTest() {
  axios
    .get(`mebels/product/${route.params.id}/`)
    .then((res: any) => {
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
