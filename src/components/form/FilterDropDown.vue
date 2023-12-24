<template>
  <div class="countries_select pl-1 pr-1">
    <div class="countries_heading flex justify-between" @click="toggle">
      <div class="country_name" :class="{ selected_country_name: isSelected }">
        {{ title }}
      </div>
      <div class="flex justify-center is-align-center">
        <img v-if="!isSelected" :src="downIcon" alt="" class="pr-2" />
        <img v-else :src="rightIcon" alt="" class="mr-2" />
        <div class="selected_country">{{ selected }}</div>
      </div>
    </div>
    <div class="countries_body" :class="{ opened_countries_body: isOpen }">
      <div
        class="countries_list"
        v-for="item in items"
        :key="item.label"
        @click="handleSelection(item.label)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  ref,
  defineEmits,
  watch,
  onBeforeUnmount,
  onMounted,
} from "vue";

const props = defineProps({
  title: String,
  isSelected: Boolean,
  items: Array,
  isOpen: Boolean,
  selectedValue: String,
});

const emit = defineEmits(["select", "toggle", "resetSelected"]);

const selected = ref(props?.selectedValue);
const downIcon = "/images/down.svg";
const rightIcon = "/images/right.svg";

const toggle = () => emit("toggle");
const handleSelection = (label: string) => {
  selected.value = label;
  emit("select", label);
};

watch(
  () => props.selectedValue,
  (newValue) => {
    emit("resetSelected", newValue);
  }
);
onMounted(() => {
  if (props.isSelected) {
    selected.value = "";
  }
});

onBeforeUnmount(() => {
  selected.value = "";
});
</script>

<style></style>
