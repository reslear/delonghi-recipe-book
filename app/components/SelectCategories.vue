<script setup lang="ts">
const categoriesStore = useCategoriesStore()
const { categories, selectedCategoryId } = storeToRefs(categoriesStore)
</script>

<template>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
    <button
      @click="categoriesStore.selectedCategoryId = category.identifier"
      v-for="category in categories"
      class="flex flex-col gap-2 shadow-md rounded-lg py-2 px-4 hover:shadow-lg cursor-pointer"
      :class="{
        'bg-slate-50': selectedCategoryId === category.identifier,
      }"
    >
      <div>
        <img
          v-if="category.image"
          :src="category.image"
          :alt="category.title"
        />
      </div>
      <div>{{ category.title }}</div>
    </button>
  </div>
</template>
