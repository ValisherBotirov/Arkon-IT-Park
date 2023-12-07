<template>
  <div
    class="p-[30px] text-white gap-5 bg-[#1A1A1A] w-[430px] text-sm font-normal h-[156px] flex"
  >
    <div class="">
      <a :href="`tel:${phone}`">{{ phone }}</a>
      <p class="mt-2.5 uppercase">
        {{ email }} <br />
        {{ email_support }}
      </p>
      <p class="mt-2.5">{{ address }}</p>
    </div>
    <div>
      <a
        :href="location_url"
        target="_blank"
        class="w-[152px] h-[96px] bg-[#2C2C2C] rounded-xl inline-block"
      >
        <img
          src="@/assets/static/location.webp"
          alt="location"
          class="w-full h-full rounded-xl"
        />
      </a>
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
