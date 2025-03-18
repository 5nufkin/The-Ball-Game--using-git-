'use strict'

var gBallSize = 100

function onBallClick(elBall, maxDiameter) {
  const randSize = getRandomIntInclusive(20,60)
  gBallSize = gBallSize + randSize
  if (gBallSize >= maxDiameter) {
    gBallSize = 100
  }
  elBall.style.width = gBallSize + 'px'
  elBall.style.height = gBallSize + 'px'
  elBall.innerText = gBallSize
  elBall.style.backgroundColor = getRandomColor()
}