<template>
  <div class="container">
    <p
      class="text-center text-[#4B4B4C] font-bold leading-[22px] tracking-[-0.408px] text-sm pt-[10px]"
    >
      INFORMATION OF COMPANY
    </p>
    <div class="mt-3 py-5 border-t border-[#ABB0BC]" v-if="socials?.length">
      <div class="flex items-center gap-[40px] pl-2">
        <div v-for="item in socials" :key="item">
          <a :href="item.link" target="_blank">
            <img
              :src="socialImage(item.type)"
              alt="icon socila"
              class="w-9 h-9"
            />
          </a>
        </div>
      </div>
    </div>
    <div
      class="py-[10px] text-[#4B4B4C] border-t border-[#ABB0BC] flex flex-col gap-1"
    >
      <a
        :href="giveSiteUrl(email_support)"
        target="_blank"
        class="leading-[22px] inline-block tracking-[-0.41p"
      >
        {{ email_support }}
      </a>
      <a
        :href="`mailto:${email}`"
        class="leading-[22px] inline-block tracking-[-0.41px]"
        >{{ email }}</a
      >
    </div>
    <div
      class="!pb-[50px] pt-4 border-t border-[#ABB0BC] gap-5 bg-#fff flex justify-between items-center"
    >
      <div class="w-full">
        <p class="leading-[22px] text-[#4B4B4C]">{{ address }}</p>
        <a
          :href="`tel:+998${phone}`"
          class="mt-4 text-[#448AF7] font-bold text-base ms:text-lg inline-block"
          >{{ FormatPhone(phone) }}</a
        >
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
import FormatPhone from "@/helpers/FormatPhone";
type ISocial = "fb" | "tg" | "ig" | "wa" | "tw" | "yt";

interface Props {
  phone?: string;
  email?: string;
  email_support?: string;
  address?: string;
  location_url?: string;
  socials?: {
    link: string;
    type: ISocial;
  }[];
}

withDefaults(defineProps<Props>(), {
  phone: "998712020020",
  email: "INFO@LAMINAM.UZ",
  email_support: "SUPPORT@LAMINAM.UZ",
  address: "6A Лабзак, Ташкент",
  location_url:
    "https://yandex.uz/maps/10335/tashkent/house/YkAYdAFlT0MHQFprfX9zc3xnbA==/?ll=69.265660%2C41.322048&z=16",
});

function socialImage(type: ISocial) {
  switch (type) {
    case "fb":
      return getImageUrl("facebook");
    case "ig":
      return getImageUrl("instagram");
    case "tw":
      return getImageUrl("twitter");
    case "tg":
      return getImageUrl("telegram");
    case "yt":
      return getImageUrl("youtube-96");
    case "wa":
      return getImageUrl("whatsapp");
  }
}

function getImageUrl(name: string) {
  return new URL(`../assets/icon/${name}.svg`, import.meta.url).href;
}

function giveSiteUrl(email: string) {
  if (email.startsWith("https://")) {
    return email;
  } else if (email.startsWith("http://")) {
    return `http://${email}`;
  } else {
    return `https://${email}`;
  }
}
</script>
