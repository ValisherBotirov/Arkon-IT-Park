<script setup lang="ts">
interface Props {
  img: string;
  text: string;
  link: string;
}

defineProps<Props>();
</script>

<template>
  <!-- <router-link :to="`${link}`" class="h-[100px] relative"> -->
  <img
    src="@/assets/fake-images/cardBrand.png"
    alt="images"
    class="w-full h-full"
  />
  <p class="text-sm text-black dark:text-white not-italic font-light">
    Компания Golden House презентует свой новый проект – жилой комплекс UNION ON
    ANHOR. Жилой комплекс UNION – это союз лучшего, что может предложить
    мегаполис своим жителям. Просторные квартиры с панорамным остеклением и
    завораживающими видами на реку Анхор, телебашню и центр Ташкента в удобном
    районе с развитой инфраструктурой прекрасно сочетают в себе природу и город
    в одном месте
  </p>
  <p class="text-sm text-black dark:text-white not-italic font-light">
    Компания Golden House презентует свой новый проект – жилой комплекс UNION ON
    ANHOR. Жилой комплекс UNION – это союз лучшего, что может предложить
    мегаполис своим жителям. Просторные квартиры с панорамным остеклением и
    завораживающими видами на реку Анхор, телебашню и центр Ташкента в удобном
    районе с развитой инфраструктурой прекрасно сочетают в себе природу и город
    в одном месте
  </p>
  <!-- </router-link> -->
</template>
