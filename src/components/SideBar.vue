<template>
  <Teleport to="body">
    <div
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      class="fixed w-full h-[100vh] inset-y-0 duration-300 right-0 bg-black z-[9999]"
    >
      <i
        @click="emit('closeSidebar', false)"
        class="fa-sharp fa-solid fa-xmark text-white text-2xl top-10 right-10 absolute"
      ></i>
      <div>sidebar section</div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

defineProps<Props>();

const emit = defineEmits(["closeSidebar"]);
</script>
