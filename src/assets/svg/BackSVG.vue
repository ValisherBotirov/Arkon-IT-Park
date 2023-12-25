<script setup lang="ts">
interface Props {
  mood: string;
}

withDefaults(defineProps<Props>(), {
  mood: "#000",
});
</script>

<template>
  <div
    class="cursor-pointer p-4 drop-shadow-md backdrop-saturate-50 bg-white/30"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="26" viewBox="0 0 19 26" fill="none">
<g filter="url(#filter0_d_288_21)">
<path d="M4 8.70792C4.00982 9.05152 4.13744 9.34604 4.40251 9.61111L12.0403 17.0821C12.2661 17.298 12.5312 17.4158 12.8552 17.4158C13.5129 17.4158 14.0234 16.9053 14.0234 16.2476C14.0234 15.9334 13.8958 15.6389 13.67 15.4131L6.79792 8.70792L13.67 2.00272C13.8958 1.77693 14.0234 1.49223 14.0234 1.16826C14.0234 0.510498 13.5129 5.7503e-08 12.8552 0C12.541 -2.74641e-08 12.2661 0.117807 12.0403 0.333787L4.40251 7.81455C4.12762 8.0698 4 8.36431 4 8.70792Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_288_21" x="0" y="0" width="18.0234" height="25.4158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_288_21"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_288_21" result="shape"/>
</filter>
</defs></svg>

  </div>
</template>
