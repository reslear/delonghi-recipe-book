import z from 'zod'

/**
    {
      "title": "Multifry",
      "locale": "en_INT",
      "image": "/documents/10855/27736/multifry/e9994a8c-b925-48bf-89ed-c75c9519956f?t=1400769691000",
      "imageSize": 6010,
      "identifier": "11813",
      "imageTimeStamp": 1400769691000
    },
 */
export const categoriesItem = z.object({
  title: z.string(),
  locale: z.string(),
  image: z.string(),
  imageSize: z.number(),
  identifier: z.string(),
  imageTimeStamp: z.number(),
})

export type CategoriesItem = z.infer<typeof categoriesItem>
