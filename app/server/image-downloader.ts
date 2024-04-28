import imgdl from 'img-dl'

export async function downloadImages(
  dirName: string,
  images: { url: string; name: string }[]
) {
  const loads = await imgdl(images, {
    directory: './public/db/' + dirName + '/images/',
  })

  return loads
}
