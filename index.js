const canvas1 = document.getElementById('canvas1')
const ctx1 = canvas1.getContext('2d')

const SIZE_SQUARE_CANVAS = {
  width: 200,
  height: 200
}

function save (canvas, format) {
  const link = document.createElement('a')
  const dataURL = canvas.toDataURL(`image/${format}`)
  console.log(dataURL.length)
  return
  link.href = dataURL
  link.download = `${canvas.id}.${format}`
  link.click()
}

/* Canvas 1 */
{
  const imageData = new ImageData(
    SIZE_SQUARE_CANVAS.width, SIZE_SQUARE_CANVAS.height
  )
  const {data} = imageData
  for (let i = 0; i < data.length / 4; i++) {
    const index = i * 4
    data[index] = 256
    data[index + 1] = 102
    data[index + 2] = 0
    data[index + 3] = 255
  }
  ctx1.putImageData(imageData, 0, 0)
}
