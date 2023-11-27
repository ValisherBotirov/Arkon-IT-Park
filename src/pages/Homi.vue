<template>
  <div>
    <div
      class=""
    >
      <SHeader is-black />
    </div>
    <div class="container">
      <div class="">
        <!-- <pre class="text-white">{{stoneList}}</pre>-->
        <div class="flex flex-col gap-[30px] mt-5">
          <BrandCard
          v-if="houseList.length"
            id="Гранитные"
            :dataS="stoneList"
            :dataM="mabelList"
            :dataH="houseList"
            title="Декор"
            link="/home"
          />
          <!-- <BrandCard
          v-if="houseList.length"
            id="Мебели"
            :data="mabelList"
            title="Мебель"
            link="/brand"
          />
          <BrandCard
          v-if="houseList.length"
            id="Жилые"
            :data="houseList"
            title="Архитектура"
            link="/union"
          /> -->
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
import image from '@/assets/static/brandPhoto.png';
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
