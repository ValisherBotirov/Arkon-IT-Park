<template>
  <div>
    <div class="relative">
      <BackSVG
        mood="#fff"
        class="absolute left-4 top-[31px]"
        @click="router.go(-1)"
      />
      <img
        :src="brandData?.image"
        alt=""
        class="w-full h-[200px] object-cover rounded-0"
      />
      <div class="absolute left-4 bottom-2">
        <p
          class="text-white font-semibold leading-[22px] tracking-[1px] max-w-[250px]"
        >
          {{ brandData?.slogan }}
        </p>
      </div>
    </div>

    <div class="container">
      <div>
        <div
          class="mt-7"
          v-if="usePersonDevice == 'iPhone' && brandData?.arkon_file"
        >
          <AnimationCard :link="brandData.arkon_file" />
        </div>
        <div
          class="mt-7"
          v-if="usePersonDevice == 'android' && brandData?.arkon_file_android"
        >
          <AnimationCardAndroid :link="brandData?.arkon_file_android" />
        </div>
      </div>
      <div class="bg-white py-5 text-black rounded-[25px]">
        <p
          class="leading-[18.91px] htmlText"
          v-html="brandData?.description"
        ></p>
      </div>
      <div class="mt-3 !pb-8" v-if="brandData?.filtered_categories?.length">
        <p class="text-[#4B4B4C] font-bold leading-[22px]">COLLECTIONS</p>
        <div class="flex flex-col gap-5 pt-[10px]">
          <CategoryCard
            class="!h-full"
            v-for="item in brandData?.filtered_categories"
            :key="item"
            :link="`/product?id=${item.id}`"
            :text="item.name"
            :img="item.image_thumbnail"
          />
        </div>
      </div>
      <div class="mt-3 !pb-8" v-if="brandData?.filtered_products?.length">
        <p class="text-[#4B4B4C] font-bold leading-[22px] pb-[10px]">
          PRODUCTS
        </p>

        <div class="flex flex-col gap-3">
          <div v-for="item in brandData?.filtered_products" :key="item">
            <router-link
              :to="`/product/${item.id}`"
              class="inline-block w-full relative"
            >
              <img :src="item?.image" alt="image" class="w-full object-cover" />
              <p
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-medium text-xl leading-[23.64px]"
              >
                {{ item?.name }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer
      class="mt-5 mb-16"
      v-bind="footerData"
      :socials="brandData?.socials"
    />
  </div>
</template>
<script setup lang="ts">
import CategoryCard from "@/components/card/CategoryCard.vue";
import axios from "@/plugins/axios.ts";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import BackSVG from "@/assets/svg/BackSVG.vue";
import AnimationCard from "@/components/card/AnimationCard.vue";
import Footer from "@/components/SFooter.vue";
import AnimationCardAndroid from "@/components/card/AnimationCardAndroid.vue";
import usePersonDevice from "@/helpers/usePersonDevice";
const route = useRoute();
const router = useRouter();

const brandData = ref([]);
const footerData = computed(() => {
  return {
    phone: brandData.value?.phone,
    email: brandData.value?.email,
    email_support: brandData.value?.email_support,
    address: brandData.value?.address,
    location_url: brandData.value?.location_url,
  };
});

function fetchTest() {
  axios
    .get(`stones/brand/${route.query.id}/`)
    .then((res: any) => {
      brandData.value = res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
}

// watch(
//   () => route.query.id,
//   () => {
//     fetchTest();
//   }
// );

onMounted(() => {
  fetchTest();
});
</script>

<style>
.htmlText {
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
}
.htmlText ul {
  margin-left: 16px;
  list-style: disc;
}
</style>
