/**
 * Constants
 */
const NUMBER_CANVAS = 4
const SIZE_SQUARE_CANVAS = {
  width: 180,
  height: 180
}

/**
 * Global
 */
for (let i = 1; i <= NUMBER_CANVAS; i++) {
  const name = `canvas${i}`
  window[name] = document.getElementById(name)
}

/**
 * Initialize Canvas
 */
initializeSquareCanvas(canvas1, data => {
  for (let i = 0; i < data.length / 4; i++) {
    const index = i * 4
    data[index] = 256
    data[index + 1] = 102
    data[index + 2] = 0
    data[index + 3] = 255
  }
})

initializeSquareCanvas(canvas2, data => {
  for (let i = 0; i < data.length / 4; i++) {
    const index = i * 4
    data[index] = Math.floor(Math.random() * 256)
    data[index + 1] = Math.floor(Math.random() * 256)
    data[index + 2] = Math.floor(Math.random() * 256)
    data[index + 3] = 255
  }
})

initializeSquareCanvas(canvas3, data => {
  for (let i = 0; i < data.length / 4; i++) {
    const isVisible = Math.random() < .5
    const index = i * 4
    if (isVisible) {
      data[index] = 256
      data[index + 1] = 102
      data[index + 2] = 0
    } else {
      data[index] = data[index + 1] = data[index + 2] = 255
    }
    data[index + 3] = 255
  }
})

initializeSquareCanvas(canvas4, data => {
  for (let i = 0; i < data.length / 4; i++) {
    const index = i * 4
  }
})

/**
 * Functions
 */
function initializeSquareCanvas (canvas, pixelManipulationCallback) {
  const ctx = canvas.getContext('2d')
  const imageData = new ImageData(
    SIZE_SQUARE_CANVAS.width, SIZE_SQUARE_CANVAS.height
  )
  const {data} = imageData
  pixelManipulationCallback(data)
  ctx.putImageData(imageData, 0, 0)
}

function save (canvas, format) {
  const dataURL = canvas.toDataURL(`image/${format}`)
  const link = document.createElement('a')
  link.href = dataURL
  link.download = `${canvas.id}.${format}`
  link.click()
}
