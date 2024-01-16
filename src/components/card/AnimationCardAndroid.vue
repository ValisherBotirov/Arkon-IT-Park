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
    <!--    <model-viewer-->
    <!--        :src="link"-->
    <!--        auto-rotate-->
    <!--        camera-controls-->
    <!--    ></model-viewer>-->
    <model-viewer
      :src="link"
      alt="A 3D model of an astronaut"
      ar
      autoplay
      camera-controls
      ar-status="not-presenting"
      touch-action="pan-y"
    ></model-viewer>
  </div>
</template>
