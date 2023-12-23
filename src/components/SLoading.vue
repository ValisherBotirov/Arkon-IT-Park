<template>
  <Teleport to="body">
    <div class="load-wrapp">
      <img
        src="@/assets/load.gif"
        alt=""
        class="!w-full !h-full object-cover"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {onMounted, watch} from "vue";

interface Props{
  loading:boolean
}
const props = defineProps<Props>()

const innerDiv = document.querySelector('body')

onMounted(()=>{
  innerDiv?.classList.add('no-scroll')
  setTimeout(()=>{
          innerDiv?.classList.remove('no-scroll')
  },3500)
})


</script>

<style >
.load-wrapp {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  overflow: hidden;
}

.no-scroll{
  height: 100vh;
  overflow: hidden;
}
</style>
