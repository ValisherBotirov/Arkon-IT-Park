<template>
  <div>
    <div class="relative">
      <BackSVG
        mood="#fff"
        class="absolute z-[30] left-8 top-[47px]"
        @click="router.push('/')"
      />
      <img
        :src="data?.image"
        alt=""
        class="w-full h-[200px] object-cover rounded-0"
      />
      <div
        class="w-full h-full top-0 z-20 text-white absolute flex justify-center items-center"
      >
        <p class="font-bold text-lg leading-6 tracking-[2px] uppercase">
          {{ data?.name }}
        </p>
      </div>
    </div>
    <div class="container">
      <div class="mt-8">
        <AnimationCard :link="data?.arkon_url" />
      </div>
      <div class="mt-16">
        <STable :is-head="true" :body-item="data?.characteristics?.main" />
        <STable
          class="mt-[26px]"
          :one-head="true"
          :body-item="data?.characteristics?.standart"
        />
        <STable
          class="mt-7 mb-[30px]"
          is-head
          :body-item="data?.characteristics?.test"
        />
      </div>
    </div>
  </div>
  <Footer class="mt-5 mb-16" v-bind="data?.brand_data" />
</template>

<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import { useRoute, useRouter } from "vue-router";
import AnimationCard from "@/components/card/AnimationCard.vue";
import STable from "@/components/table/STable.vue";
import { onMounted, ref } from "vue";
import axios from "@/plugins/axios";
import Footer from "@/components/SFooter.vue";
import BackSVG from "@/assets/svg/BackSVG.vue";
const route = useRoute();
const router = useRouter();

const data = ref([]);
function fetchProductSingle() {
  axios
    .get(`stones/product/${route.params.id}/`)
    .then((res) => {
      console.log(res.data);

      data.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

const tableThere = [{}];

onMounted(() => {
  fetchProductSingle();
  console.log(import.meta.url);
});
</script>
