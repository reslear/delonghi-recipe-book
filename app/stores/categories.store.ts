import type { CategoriesItem } from '~/models'

export const useCategoriesStore = defineStore(
  'delonghi:categories',
  () => {
    const { lang } = useLanguagesStore()

    const categories = ref<CategoriesItem[]>([])
    const selectedCategoryId = ref<CategoriesItem['identifier']>()
    const selectedCategory = computed(() =>
      categories.value.find(
        (category) => category.identifier === selectedCategoryId.value
      )
    )

    async function fetchCategories() {
      if (categories.value.length) return

      const { data } = await useFetch('/api/categories', {
        query: { lang: lang },
      })

      if (!data.value) return
      categories.value = data.value
    }

    return {
      selectedCategoryId,
      selectedCategory,
      categories,
      fetchCategories,
    }
  },
  {
    persist: true,
  }
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoriesStore, import.meta.hot))
}
