<script setup lang="ts">
// import { ModelViewer } from '@google/model-viewer';
import { ref } from "vue";

interface Props {
  link?: string;
}
defineProps<Props>();


</script>

<template>
  <div class="h-[350px] w-full bg-white">
    <model-viewer
        :src="link"
        auto-rotate
        camera-controls
    ></model-viewer>
  </div>
</template>
