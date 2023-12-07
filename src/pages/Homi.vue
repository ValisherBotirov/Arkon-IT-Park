<template>
  <div class="min-h-[100vh] flex flex-col justify-between">
    <div>
      <div class="">
        <SHeader is-black />
      </div>
      <div class="container">
        <div class="">
          <!--         <pre class="text-white">{{categoryList}}</pre>-->
          <div class="flex flex-col gap-[30px] mt-5">
            <BrandCard
              v-if="categoryList.length"
              id="Гранитные"
              :data="categoryList"
              title="Декор"
              link="/home"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer class="mt-5 mb-16" />
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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  fetchAllCategory();
});
</script>
