<template>
  <div>
    <div
      class="relative h-[500px] before:content-[''] before:w-full before:h-[500px] before:bg-[#333333] before:absolute before:z-[1] before:opacity-[0.2] bg-no-repeat bg-cover"
      v-bind:style="{ 'background-image': 'url(' + image + ')' }"
    >
              <SHeader is-black/>
      <div class="container relative z-20 ">
        <h2 class="text-[32px] leading-[37.82px] font-semibold text-white max-w-[370px] pt-[233px]">КОЛЛЕКЦИИ LAMINAM</h2>
      </div>
    </div>
    <div class="container">
      <RouterCard class="translate-y-[-40px] relative z-20"/>
      <div class=" dark:bg-[#1A1A1A] bg-[#FAFAFA] p-5 dark:text-white text-black rounded-[25px] translate-y-[-10px]">
        <p class="leading-[18.91px]">Керамические плиты Laminam — это идеальное решение для вашего фасада и интерьера комнат. Широкоформатные слэбы отличаются исключительными свойствами:
          устойчивы к перепадам температур;
          обладают влагоотталкивающим свойством;
          препятствуют проникновению УФ-лучей;
          отличаются особой прочностью на изгибы;
          поверхность полностью препятствует появлению грибков и плесени
          Удобный формат и большой спектр положительных качеств позволят использовать керамические плиты и для изготовления мебели: столешниц, кухонь, раковин и др.</p>
      </div>
      <div class="flex flex-col gap-[30px] mt-5">
        <CategoryCard v-for="item in 15" :key="item" :link="`/product?id=${item}`" text="test" img=""/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SHeader from "@/components/header/SHeader.vue";
import RouterCard from "@/components/card/RouterCard.vue";
import CategoryCard from "@/components/card/CategoryCard.vue";
import axios from "@/plugins/axios.ts";
import {onMounted} from "vue";
const image = `src/assets/static/homebanner.png`;


function fetchTest(){
  axios.get('stones/brand-list/').then((res:any)=>{
    console.log(res)
  }).catch((err:any)=>{
    console.log(err)
  })
}

onMounted(()=>{
  fetchTest()
})
</script>
