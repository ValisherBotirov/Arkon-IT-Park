<template>
  <div>
    <div class="container relative z-[20]">
      <div class="flex justify-between items-center py-3 pt-8">
        <router-link to="/" class="flex flex-shrink-0">
          <img
            src="/images/logo.svg"
            alt="Logo svg"
            class="w-[127px] h-[43px] hidden dark:flex"
          />
          <img
            src="/images/logo_black.svg"
            alt="Logo svg"
            class="w-[127px] h-[43px] flex dark:hidden"
          />
        </router-link>

        <div class="flex items-center gap-4">
          <div
            v-if="isIcon"
            class="block lg:hidden flex-shrink-0 text-white cursor-pointer"
            @click="closePage(`${iconPath}`)"
          >
            <i class="fa-solid fa-xmark text-[20px] text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

interface Props {
  isBlack?: boolean;
  isIcon?: boolean;
  iconPath?: string;
}

withDefaults(defineProps<Props>(), {
  isBlack: false,
  isIcon: false,
});

const router = useRouter();

function getImageUrl(name: string) {
  return new URL(`/public/images/${name}.svg`, import.meta.url).href;
}

function closePage(link: string) {
  router.push(link);
}
</script>
<style scoped>
.navItem::after {
  position: absolute;
  content: "";
  bottom: -5px;
  height: 3px;
  width: 100%;
  left: 0;
  top: 22px;
  background: #fdf001;
  border-radius: 2px;
  transition: 0.2s;
  transition-timing-function: ease-in-out;
  transform: scale(0);
}
.navItem:hover::after {
  transform: scale(110%);
}
</style>
