<script setup lang="ts">
const { data } = await useFetch('/api/characters')
</script>
<template>
  <div class="container mx-auto grid grid-cols-4 gap-8">
    <NuxtLink
      :to="`/${slug}`"
      class="bg-white shadow-lg"
      v-for="{ name, slug, photo, alias, occupation } in data.characters"
    >
      <div class="aspect-square overflow-hidden">
        <img :src="photo" :alt="name" />
      </div>
      <div class="py-2 px-4">
        <h2 class="text-xl font-display text-accent font-bold mb-4">{{ name }}</h2>
        <p class="text-sm font-italic text-gray-600 mb-4">{{ alias }}</p>
        <p class="text-gray-600">{{ occupation }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
