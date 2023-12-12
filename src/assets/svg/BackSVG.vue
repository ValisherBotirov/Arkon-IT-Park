<script setup lang="ts">
interface Props {
  mood: string;
}

withDefaults(defineProps<Props>(), {
  mood: "#000",
});
</script>

<template>
  <div class="cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M0.878003 8.61209C0.878003 8.61209 1.37302e-07 7.76767 1.70811e-07 7.00107C2.0432e-07 6.23447 0.878003 5.38148 0.878003 5.38148L6.03624 0.317062C6.45448 -0.102831 7.22125 -0.1114 7.66562 0.325631C8.11871 0.762663 8.10128 1.51676 7.67433 1.92808L2.52481 7.00107L7.67433 12.0655C8.11 12.494 8.11 13.2309 7.66562 13.6679C7.22125 14.1135 6.47191 14.105 6.03624 13.6765L0.878003 8.61209Z"
        :fill="mood"
      />
    </svg>
  </div>
</template>
