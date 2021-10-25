/**
 * Constants
 */
const NUMBER_CANVAS = 5
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
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255
    data[i + 1] = 102
    data[i + 2] = 0
    data[i + 3] = 255
  }
})

initializeSquareCanvas(canvas2, data => {
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.floor(Math.random() * 256)
    data[i + 1] = Math.floor(Math.random() * 256)
    data[i + 2] = Math.floor(Math.random() * 256)
    data[i + 3] = 255
  }
})

initializeSquareCanvas(canvas3, data => {
  for (let i = 0; i < data.length; i += 4) {
    const isVisible = Math.random() < .5
    if (isVisible) {
      data[i] = 255
      data[i + 1] = 102
      data[i + 2] = 0
    } else {
      data[i] = data[i + 1] = data[i + 2] = 255
    }
    data[i + 3] = 255
  }
})

initializeSquareCanvas(canvas4, data => {
  for (let i = 0; i < data.length; i += 4) {
    const y = Math.floor(i / 4 / SIZE_SQUARE_CANVAS.width)
    const isVisible = y % 20 < 10
    if (isVisible) {
      data[i] = 255
      data[i + 1] = 102
      data[i + 2] = 0
    } else {
      data[i] = data[i + 1] = data[i + 2] = 255
    }
    data[i + 3] = 255
  }
})

initializeSquareCanvas(canvas5, data => {
  const colors = [
    [255, 102, 0],
    [255, 102, 102],
    [255, 0, 102],
    [255, 0, 0],
    [102, 102, 0],
    [102, 102, 102],
    [102, 0, 102],
    [102, 0, 0],
    [0, 102, 102]
  ]
  for (let i = 0; i < data.length; i += 4) {
    const y = Math.floor(i / 4 / SIZE_SQUARE_CANVAS.width)
    const isVisible = y % 20 < 10
    if (isVisible) {
      const order = Math.floor(y / 20)
      const color = colors[order]
      data[i] = color[0]
      data[i + 1] = color[1]
      data[i + 2] = color[2]
    } else {
      data[i] = data[i + 1] = data[i + 2] = 255
    }
    data[i + 3] = 255
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
