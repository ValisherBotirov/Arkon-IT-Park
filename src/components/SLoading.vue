<template>
  <Teleport to="body">
    <div class="load-wrapp">
      <img src="@/assets/loading.gif" alt="" class="w-full" />
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
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
}
</style>
