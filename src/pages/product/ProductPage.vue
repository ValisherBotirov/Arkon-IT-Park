<template>
  <div class="min-h-[100vh] flex flex-col justify-between">
    <div>
      <div
        class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
        v-bind:style="{
          'background-image': 'url(' + image + ')',
          'background-size': 'cover',
          'background-position': 'center',
        }"
      >
        <SHeader is-icon icon-path="/" />
        <div class="container relative z-20">
          <h2
            class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[310px] pt-[233px]"
          >
            {{ data?.name }}
          </h2>
        </div>
      </div>
      <div class="container">
        <div class="flex flex-col gap-5 translate-y-[-40px] relative z-20">
          <!--        <pre class="text-white">{{ data }}</pre>-->
          <CategoryCard
            v-for="item in data?.products"
            :key="item"
            :link="`/product/${item.id}`"
            :text="item.name"
            :img="item.image"
          />
        </div>
      </div>
    </div>
    <Footer class="mt-5 mb-16" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import SHeader from "@/components/header/SHeader.vue";
import CategoryCard from "@/components/card/CategoryCard.vue";
import axios from "@/plugins/axios";
import { computed, onMounted, ref } from "vue";
import Footer from "@/components/SFooter.vue";

const route = useRoute();

const data = ref([]);
const image = computed(() => data.value?.image);
function fetchProduct() {
  axios
    .get(`stones/category/${route.query.id}/`)
    .then((res) => {
      console.log(res);
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
