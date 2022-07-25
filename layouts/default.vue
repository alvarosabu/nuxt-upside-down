<script setup lang="ts">
import '@unocss/reset/tailwind.css'
</script>

<template>
  <div>
    <TheHeader />
    <main class="page mt-16">
      <slot />
    </main>
  </div>
</template>
