<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <NuxtLayout>
    <NuxtPage :key="route.path" />
  </NuxtLayout>
</template>
