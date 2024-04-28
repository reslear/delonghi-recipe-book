import { delonghiApi } from '~/api/delonghi.js'
import { CategoriesItem, categoriesItem } from '~/models/index.js'
import { downloadImages } from '../image-downloader'
import type { Image } from 'img-dl'

const storageKey = (...args: string[]) =>
  'categories:categories-' + args.join('-') + '.json'

export default defineEventHandler<{
  query: { lang: string }
}>(async (event) => {
  const { lang } = getQuery(event)

  const storage = useStorage('db')
  const categories: CategoriesItem[] =
    (await storage.getItem(storageKey(lang))) || []

  if (!categories.length) {
    const data = await delonghiApi<{ categories: CategoriesItem[] }>(
      '/DelonghiRicettario-portlet/api/jsonws/delonghiricettario/getProductCategories/company-id/10711/group-id/10855/locale/' +
        lang,
      {}
    )

    await storage.setItem(
      storageKey(lang),
      JSON.stringify(data.categories, null, 2)
    )
  }

  const images: Image[] = (await storage.getItem(storageKey('images'))) || []

  // download images
  if (!images.length) {
    const items = categories
      .filter(({ image }) => image)
      .map(({ identifier, image }) => ({
        url:
          'https://data.delonghigroup.com:8443' +
          image.replace(/\/[^/]+$/g, ''),
        name: identifier,
      }))

    const result = await downloadImages('categories', items)
    await storage.setItem(storageKey('images'), JSON.stringify(result, null, 2))
  }

  //TODO:  remove after opmization
  images.forEach((image) => {
    const index = categories.findIndex((r) => r.identifier === image.name)
    if (index === -1) return
    categories[index].image =
      image.directory.replace('public/', '') +
      image.name +
      '.' +
      image.extension
  })

  return categories
})
