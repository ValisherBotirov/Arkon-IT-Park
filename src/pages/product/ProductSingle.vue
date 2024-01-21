<template>
  <div>
    <div class="relative">
      <BackSVG
        mood="#fff"
        class="absolute z-[30] left-4 top-[31px]"
        @click="router.go(-1)"
      />

      <img
        :src="data?.image"
        alt=""
        class="w-full h-[200px] object-cover rounded-0"
      />
      <div
        class="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p
          class="leading-[22px] tracking-[-0.41px] max-w-[250px]"
          :style="{ color: data?.name_color }"
        >
          {{ data?.name }}
        </p>
      </div>
    </div>
    <div class="container">
      <div>
        <div
          class="mt-8"
          v-if="usePersonDevice == 'iPhone' && data?.arkon_file"
        >
          <AnimationCard :link="data.arkon_file" />
        </div>
        <div
          class="mt-8"
          v-if="usePersonDevice == 'android' && data?.arkon_file_android"
        >

          <AnimationCardAndroid :link="data?.arkon_file_android" />
        </div>
      </div>
      <div class="my-4 mt-8 flex flex-col gap-4" v-if="data?.shots?.length">
        <div v-for="item in data?.shots" :key="item">
          <img :src="item.image" alt="images" class="w-full object-cover" />
        </div>
      </div>
      <div class="mt-8 mb-4">
        <div v-for="item in data?.characteristics" :key="item">
          <STable :data="item" class="mt-6" />
        </div>
      </div>
    </div>
  </div>
  <Footer
    class="mt-5 mb-16"
    v-bind="data?.brand_data"
    :socials="data?.socials"
  />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import AnimationCard from "@/components/card/AnimationCard.vue";
import STable from "@/components/table/STable.vue";
import { onMounted, ref } from "vue";
import axios from "@/plugins/axios";
import Footer from "@/components/SFooter.vue";
import BackSVG from "@/assets/svg/BackSVG.vue";
import usePersonDevice from "@/helpers/usePersonDevice";
import AnimationCardAndroid from "@/components/card/AnimationCardAndroid.vue";
const route = useRoute();
const router = useRouter();

const data = ref([]);
function fetchProductSingle() {
  axios
    .get(`stones/product/${route.params.id}/`)
    .then((res) => {
      data.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

onMounted(() => {
  fetchProductSingle();
});
</script>
