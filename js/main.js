'use strict'

const gBalls = []

gBalls[0] = { id: 100, color: 'orange', size: 100 }
gBalls[1] = { id: 101, color: 'lightseagreen', size: 100 }
gBalls[2] = { id: 101, color: 'steelblue', size: 100 }

function onBallClick(elBall, maxDiameter) {
  var ballIdx
  if (elBall.classList.contains('ball1')) {
    ballIdx = 0
  } else if (elBall.classList.contains('ball2')) {
    ballIdx = 1
  }

  const randSize = getRandomIntInclusive(20, 60)
  gBalls[ballIdx].size+=randSize
  if (gBalls[ballIdx].size >= maxDiameter) {
    gBalls[ballIdx].size = 100
  }
  gBalls[ballIdx].color = getRandomColor()

  elBall.style.width = gBalls[ballIdx].size + 'px'
  elBall.style.height = gBalls[ballIdx].size + 'px'
  elBall.innerText = gBalls[ballIdx].size
  elBall.style.backgroundColor = gBalls[ballIdx].color
}