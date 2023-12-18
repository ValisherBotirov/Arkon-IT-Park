<template>
  <div class="mt-6">
    <div class="container">
      <div class="flex justify-between items-center">
        <BackSVG @click="router.push('/')" class="-ml-4 " />
        <p
          class="text-black leading-[30px] text-2xl text-center uppercase font-[Staatliches]"
        >
          B R A N D S
        </p>
        <div></div>
      </div>
      <div class="flex flex-col gap-[18px] mt-[18px]">
        <div v-for="item in data" :key="item">
          <img
            :src="item?.logo_thumbnail"
            @click="getRoute(item)"
            alt="images"
            class="w-full object-cover h-[112px] rounded-[16px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import { useRoute, useRouter } from "vue-router";
import axios from "@/plugins/axios";
import { onMounted, ref } from "vue";
import Footer from "@/components/SFooter.vue";
import BackSVG from "@/assets/svg/BackSVG.vue";

const route = useRoute();
const router = useRouter();

const data = ref([]);

interface itemType {
  id: number;
  logo_thumbnail: string;
  image_thumbnail: string;
  logo_light_thumbnail: string;
  type: string;
  name: string;
  slogan: string;
  logo_light: string;
  logo: string;
  image: string;
  category: number;
}

function getRoute(item: itemType) {
  router.push(`/home?id=${item.id}`);
}

function fetchData() {
  axios
    .get(`stones/brand-list/?category_id=${route.query.id}`)
    .then((res) => {
      console.log(res);
      data.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  fetchData();
});
</script>
