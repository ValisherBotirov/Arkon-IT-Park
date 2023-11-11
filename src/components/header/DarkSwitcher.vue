<script setup lang="js">
import {onMounted, ref} from "vue"
const storageKey = 'theme-preference'

const theme = ref('dark')


function addDarkClass(){
  if(localStorage.getItem(storageKey) === 'dark'){
    document.documentElement.classList.add('dark')
  }
  else{
    document.documentElement.classList.remove('dark')
  }
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
  addDarkClass()
}

const reflectPreference = () => {
  document.firstElementChild
      .setAttribute('data-theme', localStorage.getItem(storageKey))

  document
      .querySelector('#theme-toggle')
      ?.setAttribute('aria-label', localStorage.getItem(storageKey))
}


function changeThem(){
  theme.value = theme.value === 'light'
      ? 'dark'
      : 'light'
  setPreference()
}

onMounted(()=>{
  theme.value = localStorage.getItem(storageKey) || 'dark'
  setPreference()
  reflectPreference()
})
</script>

<template>
  <div @click="changeThem">
    <button
      class="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
    >
      <svg
        class="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask class="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          class="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g class="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  </div>
</template>

<style>
.sun-and-moon > :is(.moon, .sun, .sun-beams) {
  transform-origin: center;
}

.sun-and-moon > :is(.moon, .sun) {
  fill: white;
}

.theme-toggle:is(:hover, :focus-visible) > .sun-and-moon > :is(.moon, .sun) {
  fill: white;
}

.sun-and-moon > .sun-beams {
  stroke: white;
  stroke-width: 2px;
}

.theme-toggle:is(:hover, :focus-visible) .sun-and-moon > .sun-beams {
  stroke: white;
}

[data-theme="dark"] .sun-and-moon > .sun {
  transform: scale(1.75);
}

[data-theme="dark"] .sun-and-moon > .sun-beams {
  opacity: 0;
}

[data-theme="dark"] .sun-and-moon > .moon > circle {
  transform: translateX(-7px);
}

@supports (cx: 1) {
  [data-theme="dark"] .sun-and-moon > .moon > circle {
    cx: 17;
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .sun-and-moon > .sun {
    transition: transform 0.5s;
  }

  .sun-and-moon > .sun-beams {
    transition: transform 0.5s, opacity 0.5s ease;
  }

  .sun-and-moon .moon > circle {
    transition: transform 0.25s;
  }

  @supports (cx: 1) {
    .sun-and-moon .moon > circle {
      transition: cx 0.25s;
    }
  }

  [data-theme="dark"] .sun-and-moon > .sun {
    transition-timing-function: ease;
    transition-duration: 0.25s;
    transform: scale(1.75);
  }

  [data-theme="dark"] .sun-and-moon > .sun-beams {
    transition-duration: 0.15s;
    transform: rotateZ(-25deg);
  }

  [data-theme="dark"] .sun-and-moon > .moon > circle {
    transition-duration: 0.5s;
    transition-delay: 0.25s;
  }
}
</style>
