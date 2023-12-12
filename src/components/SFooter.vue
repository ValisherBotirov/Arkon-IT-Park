<template>
  <div class="container ">
    <p class="text-center text-[#4B4B4C] font-bold leading-[22px] tracking-[-0.408px] text-sm ">
      INFORMATION OF COMPANY
    </p>
    <div class="mt-3 py-5 border-t border-[#ABB0BC]">
     <div class="flex items-center gap-[60px] pl-2">
       <a href="#">
         <img src="@/assets/icon/instagram.png" alt="icon socila">
       </a>
       <a href="#">
         <img src="@/assets/icon/facebook.png" alt="icon socila">
       </a>
       <a href="#">
         <img src="@/assets/icon/telegram.png" alt="icon socila">
       </a>
     </div>
    </div>
    <div class="py-[10px] text-[#4B4B4C] border-t border-[#ABB0BC]">
      <p class="leading-[22px] tracking-[-0.41px]">{{email}}</p>
      <p class="leading-[22px] tracking-[-0.41px] ">{{email_support}}</p>
    </div>
    <div
        class="!pb-[50px] pt-4 border-t border-[#ABB0BC] gap-5 bg-#fff  flex justify-between items-center"
    >
      <div class="w-full">
        <p class="leading-[22px] text-[#4B4B4C]">{{ address }}</p>
        <a :href="`tel:${phone}`" class="mt-4 text-[#448AF7] font-bold text-lg inline-block">{{ phone }}</a>
      </div>
      <div>
        <a
            :href="location_url"
            target="_blank"
            class="w-[131px] h-[117px] bg-[#2C2C2C] rounded-[18px] inline-block"
        >
          <img
              src="@/assets/static/location2.jpg"
              alt="location"
              class="w-full h-full rounded-[18px] object-cover"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  phone?: string;
  email?: string;
  email_support?: string;
  address?: string;
  location_url?: string;
}

withDefaults(defineProps<Props>(), {
  phone: "998712020020",
  email: "INFO@LAMINAM.UZ",
  email_support: "SUPPORT@LAMINAM.UZ",
  address: "6A Лабзак, Ташкент",
  location_url:
    "https://yandex.uz/maps/10335/tashkent/house/YkAYdAFlT0MHQFprfX9zc3xnbA==/?ll=69.265660%2C41.322048&z=16",
});
</script>
