<template>
  <div>
    <div
      class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
      v-bind:style="{
        'background-image': 'url(' + data?.image + ')',
        'background-size': 'cover',
        'background-position': 'center',
      }"
    >
      <SHeader is-icon icon-path="/" />
      <div class="container relative z-20">
        <h2
          class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[250px] pt-[233px]"
        >
          {{ data?.name }}
        </h2>
      </div>
    </div>
    <div class="container">
      <div>
        <AnimationCard
          :link="data.arkon_url"
          class="translate-y-[-40px] h-[100px]"
        />
      </div>
      <!--      <pre class="text-white">{{data}}</pre>-->
      <div>
        <STable
          class="-translate-y-5"
          :body-item="data?.characteristics?.main"
          :head-item="data?.characteristics?.main[0]"
        />
        <STable
          class="mt-[10px]"
          one-head
          :body-item="data?.characteristics?.standart"
        />
        <STable
          class="mt-[30px] mb-[30px]"
          is-head
          :body-item="data?.characteristics?.test"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import { useRoute } from "vue-router";
import AnimationCard from "@/components/card/AnimationCard.vue";
import STable from "@/components/table/STable.vue";
import { onMounted, ref } from "vue";
import axios from "@/plugins/axios";
const route = useRoute();

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

onMounted(() => {
  fetchProductSingle();
  console.log(import.meta.url);
});
</script>
