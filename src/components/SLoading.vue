<template>
  <Teleport to="body">
    <div class="load-wrapp">
      <img src="@/assets/load.gif" alt="" class="!w-full !h-full object-cover" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
// document.getElementsByTagName("html")[0].style.overflow = "hidden";
</script>

<style scoped>
.load-wrapp {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
}
</style>
