<template>
  <div>
    <div class="">
      <SHeader is-black />
    </div>
    <div class="container">
      <!--      <pre class="text-white">{{ data }}</pre>-->
      <p class="text-2xl text-dark dark:text-white mb-[18px] mt-3">BRANDS</p>
      <div class="flex flex-col gap-[17px]">
        <div v-for="item in data" :key="item">
          <img
            :src="item?.image_thumbnail"
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
  if (item.type === "mebels") {
    router.push(`/brand?id=${item.id}`);
  } else if (item.type === "houses") {
    router.push(`/home?id=${item.id}`);
  } else if (item.type === "stones") {
    router.push(`/product?id=${item.id}`);
  }
}

function fetchData() {
  axios
    .get(`${route.query.type}/brand-list/?category_id=${route.query.id}`)
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
