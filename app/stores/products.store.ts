// import z from 'zod'

// /**
//     {
//       "title": "Multifry",
//       "locale": "en_INT",
//       "image": "/documents/10855/27736/multifry/e9994a8c-b925-48bf-89ed-c75c9519956f?t=1400769691000",
//       "imageSize": 6010,
//       "identifier": "11813",
//       "imageTimeStamp": 1400769691000
//     },
//  */
// const categoriesItem = z.object({
//   title: z.string(),
//   locale: z.string(),
//   image: z.string(),
//   imageSize: z.number(),
//   identifier: z.string(),
//   imageTimeStamp: z.number(),
// })

// export type CategoryItem = z.infer<typeof categoriesItem>

// const Product = z.object({})

// export const useProductsStore = defineStore(
//   'products',
//   () => {
//     const { lang } = useLanguagesStore()

//     const categories = ref<CategoriesItem[]>([])

//     const products = ref<>({})

//     async function fetchCategories() {
//       const data = await $fetch<CategoryItem[]>(
//         'https://data.delonghigroup.com:8443/DelonghiRicettario-portlet/api/jsonws/delonghiricettario/getProductCategories/company-id/10711/group-id/10855/locale/en_INT'
//       )

//       categories.value = z.array(categoriesItem).parse(data)
//     }

//     return {
//       categories,
//       products,
//     }
//   },
//   {
//     persist: true,
//   }
// )

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot))
// }
