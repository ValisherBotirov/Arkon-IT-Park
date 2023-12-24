<template>
  <div class="w-full bg-white">
    <div class="flex justify-end px-10 pt-10"></div>
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
          {{ isFilter ? "RESET" : "FILTER" }}
        </p>
      </div>

      <div class="mt-5">
        <label
          for=""
          class="flex gap-3 border border-[#5B5B5B] rounded-[32.5px] bg-white py-3 px-4 custom_border"
        >
          <SearchSVG mood="#C6C6C8" />
          <input
            type="text"
            class="text-xl h-full w-full min-h-[18px]"
            placeholder="Search"
            v-model="inputValue"
            @focus="isActiveInput = true"
            @input="changeSearchQuery"
          />
        </label>
      </div>

      <Transition name="fade">
        <div v-show="isFilter" class="mt-5 flex flex-col gap-2">
          <div class="countries_select pr-1">
            <div
              class="countries_heading flex justify-between"
              @click="openDropDown"
            >
              <div
                class="country_name"
                :class="selectedCountry ? 'selected_country_name' : null"
              >
                Countries
              </div>
              <div class="flex justify-center is-align-center">
                <img
                  v-if="!selectedCountry"
                  src="/images/down.svg"
                  alt=""
                  class="pr-2"
                />
                <img v-else src="/images/right.svg" alt="" class="mr-2" />
                <div class="selected_country">{{ selectedCountry }}</div>
              </div>
            </div>
            <div
              class="countries_body"
              :class="isCountryShow ? 'opened_countries_body' : null"
            >
              <div
                class="countries_list"
                v-for="country in countryData"
                :key="country"
              >
                <div @click="selectCountry(country.name, country.code)">
                  {{ country.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="countries_select pr-1">
            <div
              class="countries_heading flex justify-between"
              @click="openCategories"
            >
              <div
                class="country_name"
                :class="selectedCategory ? 'selected_country_name' : null"
              >
                Categories
              </div>
              <div class="flex justify-center is-align-center">
                <img
                  v-if="!selectedCategory"
                  src="/images/down.svg"
                  alt=""
                  class="pr-2"
                />
                <img v-else src="/images/right.svg" alt="" class="mr-2" />
                <div class="selected_country">{{ selectedCategory }}</div>
              </div>
            </div>
            <div
              class="countries_body"
              :class="isCategoryShow ? 'opened_countries_body' : null"
            >
              <div
                class="countries_list"
                v-for="category in categoryData"
                :key="category"
              >
                <div @click="selectCategory(category.name, category.id)">
                  {{ category.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <div class="mt-8 flex flex-col gap-[10px]">
        <router-link
          class="flex items-center gap-[10px] cursor-pointer"
          v-for="item in allResults"
          :key="item"
          :to="`home?id=${item.id}`"
          @click="emit('closeSidebar', false)"
        >
          <img
            :src="item?.icon"
            alt="images"
            class="w-9 h-9 rounded-[50%] object-cover"
          />
          <div>
            <p class="text-black leading-[19px]">{{ item?.name }}</p>
            <p class="text-[#979797] text-xs leading-[14.32px]">
              {{ item?.slogan }}
            </p>
          </div>
        </router-link>
      </div>
      <p
        v-if="allResults.length == 0 && inputValue !== ''"
        class="mt-6 text-black font-medium text-center"
      >
        No data
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import FilterSVG from "@/assets/svg/FilterSVG.vue";
import SearchSVG from "@/assets/svg/SearchSVG.vue";
import SSelect from "@/components/form/SSelect.vue";
import axios from "@/plugins/axios";
import FilterDropDown from "@/components/form/FilterDropDown.vue";
const isActiveInput = ref(false);

interface Props {
  isOpen: boolean;
}

defineProps<Props>();

const emit = defineEmits(["closeSidebar", "resetSelected"]);
// for search

const inputValue = ref("");

//  ******* new *****
const isCountryShow = ref(false);
const isCategoryShow = ref(false);
const selectedCountry = ref("");
const selectedCountryValue = ref("");
const selectedCategory = ref("");
const selectedCategoryValue = ref<string | number>("");

// for filter

const isFilter = ref(false);

function openFilter() {
  isFilter.value = !isFilter.value;
  if (!isFilter.value) {
    // showResults();
    allResults.value = [];
  }
  if (isFilter.value) {
    clearSelectedData();
  }
}

function changeSearchQuery() {
  if (inputValue.value) {
    showResults();
  } else allResults.value = [];
}

// countries
const countryData = ref([]);

function fetchCountry() {
  axios.get("/countries").then((res) => {
    countryData.value = res.data;
  });
}

function changeCategory() {
  // if (inputValue.value) {
  showResults();
  // } else allResults.value = [];
}

// Categories
const categoryData = ref([]);

function fetchCategory() {
  axios.get("/categories").then((res) => {
    categoryData.value = res.data;
  });
}

// show result
const allResults = ref([]);
function showResults() {
  axios
    .get(
      `/stones/brand-list/?category_id=${selectedCategoryValue.value}&country=${selectedCountryValue.value}&name__icontains=${inputValue.value}`
    )
    .then((res) => {
      allResults.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
//  *****************************  filter **************************

const openDropDown = () => {
  isCountryShow.value = !isCountryShow.value;
  if (isCountryShow.value) {
    isCategoryShow.value = false;
  }
};
const openCategories = () => {
  isCategoryShow.value = !isCategoryShow.value;
  if (isCategoryShow.value) {
    isCountryShow.value = false;
  }
};
const selectCountry = (name: string, value: string) => {
  selectedCountry.value = name;
  selectedCountryValue.value = value;
  isCountryShow.value = false;
  changeCategory();
};
const selectCategory = (name: string, value: number) => {
  selectedCategory.value = name;
  selectedCategoryValue.value = value;
  isCategoryShow.value = false;
  changeCategory();
};
const clearSelectedData = () => {
  selectedCountry.value = "";
  selectedCountryValue.value = "";
  selectedCategory.value = "";
  selectedCategoryValue.value = "";
  isCategoryShow.value = false;
  isCountryShow.value = false;
};

onMounted(() => {
  fetchCountry();
  fetchCategory();
});
</script>

<style>
.countries_select,
.custom_border {
  font-family: "Tharlon", sans-serif !important;
  font-style: normal;
  font-weight: 400;
}
.countries_list {
}
.selected_country_name {
  color: #979797;
}
.custom_border {
  border-radius: 32px !important;
}
.countries_heading {
  border-bottom: 1px solid #abb0bc;
  padding-bottom: 8px;
}

.countries_body {
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.2s linear;
  transform: translateY(-10px);
  position: absolute;
}
.opened_countries_body {
  transform: translateY(0);

  padding-bottom: 40px;
  width: 100%;
  background: var(--el-color-white);
  opacity: 1;
  height: auto;
  overflow: visible;
}
.selected_country {
  transition: all 0.1s linear;
}

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
