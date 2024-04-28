<script lang="ts" setup>
const categoriesStore = useCategoriesStore()
await useAsyncData(() => categoriesStore.fetchCategories())
</script>

<template>
  <UContainer>
    <SelectCategories />
  </UContainer>
</template>
