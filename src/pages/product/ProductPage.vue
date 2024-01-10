<template>
  <div>
    <div class="relative">
      <BackSVG
        mood="#fff"
        class="absolute z-[30] left-4 top-[31px]"
        @click="router.go(-1)"
      />
      <img
        :src="image"
        alt=""
        class="w-full h-[200px] object-cover rounded-0"
      />
      <div
        class="w-full h-full top-0 z-20 absolute flex justify-center items-center"
      >
        <p class="font-bold text-lg leading-6 tracking-[2px] uppercase"  :style="{color:data?.name_color}">
          {{ data?.name }}
        </p>
      </div>
    </div>
    <div class="container">
      <p
        class="text-[#4B4B4C] font-bold leaading-[22px] tracking-[-0.408px] mt-[18px] uppercase"
      >
        {{ data?.product_label }}
      </p>
      <div class="flex flex-col gap-5 relative z-20 mt-2 pb-5">
        <CategoryCard
          v-for="item in data?.filtered_products"
          :key="item"
          :link="`/product/${item.id}`"
          :text="item.name"
          :img="item.image"
          :color="item.name_color" :align="item.align"/>
      </div>
    </div>
    <Footer
      class="mt-5 mb-16"
      v-bind="data?.brand_data"
      :socials="data?.socials"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import SHeader from "@/components/header/SHeader.vue";
import CategoryCard from "@/components/card/CategoryCard.vue";
import axios from "@/plugins/axios";
import { computed, onMounted, ref } from "vue";
import Footer from "@/components/SFooter.vue";
import BackSVG from "@/assets/svg/BackSVG.vue";

const route = useRoute();
const router = useRouter();

const data = ref([]);
const image = computed(() => data.value?.image);
function fetchProduct() {
  axios
    .get(`stones/category/${route.query.id}/`)
    .then((res) => {
      data.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  fetchProduct();
});
</script>
