<script setup lang="ts">

</script>

<template>
    <div class="relative">
      <div class="relative overflow-hidden h-screen">
        <a
          href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
          class="text-[#eee] text-xs absolute top-0"
          >Ташкент</a
        >
        <a
          href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
          class="text-[#eee] text-xs absolute top-[14px]"
          >Ташкент — Яндекс Карты</a
        >
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
          class="w-full h-full relative"
          :allowfullscreen="true"
        >
        </iframe>
      </div>
    </div>


</template>

