<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch(`/api/characters/${route.params.slug}`, {
  key: `${route.params.slug}`,
})
</script>
<template>
  <div class="container mx-auto flex bg-white shadow-lg">
    <div class="aspect-square overflow-hidden">
      <img :src="data.photo" :alt="data.name" />
    </div>
    <div class="p-4">
      <h2 class="text-xl font-display text-accent font-bold mb-4">{{ data.name }}</h2>
      <p class="text-sm font-italic text-gray-600 mb-4">{{ data.alias }}</p>
      <p class="text-sm text-gray-600 mb-4">{{ data.born }}</p>
      <p class="text-gray-600">{{ data.occupation }}</p>
    </div>
  </div>
</template>
