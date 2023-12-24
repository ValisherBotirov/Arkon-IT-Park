<template>
  <div class="mt-6">
    <div class="container">
      <p
        class="text-black leading-[30px] text-2xl text-center uppercase font-[Staatliches]"
      >
        C a t e g o r I E S
      </p>
      <div class="flex flex-col gap-[30px] mt-[18px] mb-20">
        <BrandCard
          v-if="categoryList.length"
          id="Гранитные"
          :data="categoryList"
          title="Декор"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import BrandCard from "@/components/card/branCard.vue";
import axios from "@/plugins/axios";
import { onMounted, ref } from "vue";
import image from "@/assets/static/brandPhoto.png";
import Footer from "@/components/SFooter.vue";
const categoryList = ref([]);

function fetchAllCategory() {
  axios
    .get("categories")
    .then((res) => {
      categoryList.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  fetchAllCategory();
});
</script>
