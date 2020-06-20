document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const ScoreDisplay = document.querySelector('#score')
  const StartBtn = document.querySelector('#start-button')
  const Width = 10

  // Tetris shapes
  const lShape = [
    [1, Width + 1, Width * 2 + 1, 2],
    [Width, Width + 1, Width + 2, Width * 2 + 2],
    [1, Width + 1, Width * 2 + 1, Width * 2],
    [Width, Width * 2, Width * 2 + 1, Width * 2 + 2]
  ]

  const zShape = [
    [Width + 1, Width + 2, Width * 2, Width * 2 + 1],
    [0, Width, Width + 1, Width * 2 + 1],
    [Width + 1, Width + 2, Width * 2, Width * 2 + 1],
    [0, Width, Width + 1, Width * 2 + 1]
  ]

  const tShape = [
    [1, Width, Width + 1, Width + 2],
    [1, Width + 1, Width + 2, Width * 2 + 1],
    [Width, Width + 1, Width + 2, Width * 2 + 1],
    [1, Width, Width + 1, Width * 2 + 1]
  ]

  const oShape = [
    [0, 1, Width, Width + 1],
    [0, 1, Width, Width + 1],
    [0, 1, Width, Width + 1],
    [0, 1, Width, Width + 1]
  ]

  const iShape = [
    [1, Width + 1, Width * 2 + 1, Width * 3 + 1],
    [Width, Width + 1, Width + 2, Width + 3],
    [1, Width + 1, Width * 2 + 1, Width * 3 + 1],
    [Width, Width + 1, Width + 2, Width + 3]
  ]

  const TetrisShapes = [lShape, zShape, tShape, oShape, iShape]

  let currentPosition = 4
  let currentRotation = 0

  // Randomly select a shape and its first rotation
  let random = Math.floor(Math.random() * TetrisShapes.length)
  let current = TetrisShapes[random][currentRotation]

  // Draw the shape
  function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('shape')
    })
  }

  // Undraw the shape
  function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('shape')
    })
  }

  // Set interval by which shapes move
  timerId = setInterval(moveDown, 600)

  function moveDown() {
    undraw()
    currentPosition += Width
    draw()
    freeze()
  }

  // Freeze shapes when they reach bottom of grid
  function freeze() {
    if(current.some(index => squares[currentPosition + index + Width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      // Get new shape
      random = Math.floor(Math.random() * TetrisShapes.length)
      current = TetrisShapes[random][currentRotation]
      currentPosition = 4
      draw()
    }
  }
/// Up to https://youtu.be/rAUn1Lom6dw?t=3091
})
