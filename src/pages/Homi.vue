<template>
  <div>
    <div
      class="relative h-[430px] before:content-[''] before:w-full before:h-[430px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
      <SHeader is-black />
    </div>
    <div class="container">
      <div class="">
        <!--              <pre class="text-white">{{stoneList}}</pre>-->
        <div class="flex flex-col gap-[30px] mt-5">
          <BrandCard id="Гранитные" :data="stoneList" title="Гранитные камни" link="/home" />
          <BrandCard id="Мебели" :data="mabelList" title="Мебели" link="/product" />
          <BrandCard id="Жилые" :data="houseList" title="Жилые комплексы" link="/union" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import BrandCard from "@/components/card/branCard.vue";
import axios from "@/plugins/axios";
import { onMounted, ref } from "vue";
const image = `src/assets/static/brandPhoto.png`;

const stoneList = ref([]);
const mabelList = ref([]);
const houseList = ref([]);
function fetchStoneList() {
  axios
    .get("stones/brand-list/")
    .then((res) => {
      stoneList.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
function fetchMabelList() {
  axios
    .get("mebels/brand-list/")
    .then((res) => {
      mabelList.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

function fetchHouseList() {
  axios
    .get("houses/brand-list/")
    .then((res) => {
      houseList.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  fetchStoneList();
  fetchMabelList();
  fetchHouseList();
});
</script>
