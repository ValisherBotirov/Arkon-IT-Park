<template>
  <Teleport to="body">
    <div
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed w-full h-[100vh] overflow-y-scroll inset-y-0 duration-300 right-0 bg-white z-50"
    >
      <div class="flex justify-end px-10 pt-10">
        <i
          @click="emit('closeSidebar', false)"
          class="fa-sharp fa-solid fa-xmark text-xl text-[#3C3C4399] transition duration-300 cursor-pointer hover:text-black"
        ></i>
      </div>
      <div class="px-10 py-4">
        <div
          class="flex items-center gap-3 justify-center cursor-pointer"
          @click="openFilter"
        >
          <FilterSVG :mood="isFilter ? '#448AF7' : '#000'" />
          <p
            class="text-black"
            :class="isFilter ? 'text-[#448AF7]' : 'text-black'"
          >
            FILTER
          </p>
        </div>

        <div class="mt-5">
          <label
            for=""
            class="flex gap-3 border border-[#5B5B5B] rounded-[22.5px] bg-white py-3 px-4"
          >
            <SearchSVG mood="#C6C6C8" />
            <input
              type="text"
              class="text-xl h-full w-full min-h-[18px]"
              placeholder="Поиск"
              v-model="inputValue"
              @focus="isActiveInput = true"
              @input="changeSearchQuery"
            />
<!--            <i-->
<!--              :class="inputValue !== '' ? 'opacity-1' : 'opacity-0'"-->
<!--              class="fa-sharp fa-solid fa-xmark text-xl text-[#3C3C4399] transition duration-300 cursor-pointer hover:text-black"-->
<!--              @click="clearInput"-->
<!--            ></i>-->
          </label>
        </div>

        <Transition name="fade">
          <div v-show="isFilter" class="mt-5 flex flex-col gap-5">
            <SSelect v-model="countrySelect" :data="countrySelectData" placeholder="" @changeSelect="changeCategory" />
            <SSelect v-model="categorySelect" :data="categorySelectData" placeholder="Categories" @changeSelect="changeCategory" />
          </div>
        </Transition>

<!--        <pre class="text-black">{{allResults}}</pre>-->

        <div class="mt-8 flex flex-col gap-[10px]" >
          <router-link class="flex items-center gap-[10px] cursor-pointer" v-for="item in allResults" :key="item" :to="`/product/${item.id}`" @click="emit('closeSidebar', false)">
            <img :src="item?.logo_thumbnail" alt="images" class="w-9 h-9 rounded-[50%] object-cover">
            <div>
              <p class="text-black leading-[19px]">{{ item?.name }}</p>
              <p class="text-[#979797] text-xs leading-[14.32px]">{{ item?.slogan}}</p>
            </div>
          </router-link>
        </div>
        <p v-if="allResults.length == 0 && inputValue !== ''" class="mt-6 text-black font-medium text-center">No data</p>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import FilterSVG from "@/assets/svg/FilterSVG.vue";
import SearchSVG from "@/assets/svg/SearchSVG.vue";
import SSelect from "@/components/form/SSelect.vue";
import axios from "@/plugins/axios";

const isActiveInput = ref(false);

interface Props {
  isOpen: boolean;
}

defineProps<Props>();

const emit = defineEmits(["closeSidebar"]);
// for search

const inputValue = ref("");

function clearInput() {
  isActiveInput.value = false;
  inputValue.value = "";
}

// for filter

const isFilter = ref(false);

function openFilter() {
  isFilter.value = !isFilter.value;
}

function changeSearchQuery(){
  if(inputValue.value){
  showResults()
  }
  else allResults.value = []
}


// countries
const countrySelect = ref("UZ")
const countryData = ref([]);
const countrySelectData = ref([]);

function fetchCountry() {
  axios.get("/countries").then((res) => {
    countryData.value = res.data;
    changeCountryData();
  });
}

function changeCountryData() {
  countrySelectData.value = countryData?.value.map((el) => {
    return {
      label: el.name,
      value: el.code,
    };
  });
}

function changeCategory(){
  showResults()
}

// Categories
const categorySelect = ref('')
const categoryData = ref([])
const categorySelectData = ref([])

function fetchCategory(){
  axios.get('/categories').then((res)=>{
    categoryData.value = res.data
    changeCategoryData()
  })
}

function changeCategoryData(){
  categorySelectData.value = categoryData?.value.map((el) => {
    return {
      label: el.name,
      value: el.id,
    };
  });
}

// show result
const allResults = ref([])
function showResults(){
  axios.get(`/stones/brand-list/?category_id=${categorySelect.value}&country=${countrySelect.value}&name__icontains=${inputValue.value}`).then((res)=>{
    allResults.value = res.data
  }).catch((err)=>{
    console.log(err)
  })
}

onMounted(() => {
  fetchCountry();
  fetchCategory()
});
</script>

<style scoped>
.fade-enter-from {
  transition: all 0.3s;
  opacity: 0;
  transform: translateY(50px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  transform: translateY(0px);
}

.fade-leave-to {
  transition: all 0.7s;
  opacity: 0;
  transform: translateY(50px);
}
</style>
