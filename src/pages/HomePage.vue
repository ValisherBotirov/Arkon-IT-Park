<template>
  <div>
    <div class="relative">
      <BackSVG
        mood="#fff"
        class="absolute left-4 top-[31px]"
        @click="router.go(-1)"
      />
      <img
        :src="brandData?.image"
        alt=""
        class="w-full h-[200px] object-cover rounded-0"
      />
      <div class="absolute left-4 bottom-2">
        <p class="text-white leading-[22px] tracking-[-0.41px] max-w-[250px]">
          {{ brandData?.slogan }}
        </p>
      </div>
    </div>

    <div class="container">
      <div class="mt-7" v-if="brandData?.arkon_file">
        <AnimationCard :link="brandData.arkon_file" />
      </div>
      <div class="bg-white p-5 text-black rounded-[25px]">
        <p
          class="leading-[18.91px] htmlText"
          v-html="brandData?.description"
        ></p>
      </div>
      <div class="mt-3 !pb-16" v-if="brandData?.filtered_categories?.length">
        <p class="text-[#4B4B4C] font-bold leading-[22px]">
          COLLECTIONS LAMINAM
        </p>
        <div class="flex flex-col gap-5 pt-[10px]">
          <CategoryCard class="!h-full"
            v-for="item in brandData?.filtered_categories"
            :key="item"
            :link="`/product?id=${item.id}`"
            :text="item.name"
            :img="item.image_thumbnail"
          />
        </div>
      </div>
      <div class="mt-3 !pb-16" v-if="brandData?.filtered_products?.length">
        <p class="text-[#4B4B4C] font-bold leading-[22px] pb-[10px]">
          PRODUCTS LAMINAM
        </p>
        <div class="flex flex-col gap-3">
          <div v-for="item in brandData?.filtered_products" :key="item">
            <router-link :to="`/product/${item.id}`" class="inline-block w-full">
              <img :src="item?.image" alt="image" class="w-full object-cover" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CategoryCard from "@/components/card/CategoryCard.vue";
import axios from "@/plugins/axios.ts";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import BackSVG from "@/assets/svg/BackSVG.vue";
import AnimationCard from "@/components/card/AnimationCard.vue";
const image = `src/assets/static/homebanner.png`;
const route = useRoute();
const router = useRouter();

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

// watch(
//   () => route.query.id,
//   () => {
//     fetchTest();
//   }
// );

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
