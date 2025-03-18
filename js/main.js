'use strict'

var gBallSize = 100

function onBallClick(elBall) {
  const randSize = getRandomIntInclusive(20,60)
  gBallSize = gBallSize + randSize
  if (gBallSize >= 450) {
    gBallSize = 100
  }
  elBall.style.width = gBallSize + 'px'
  elBall.style.height = gBallSize + 'px'
  elBall.innerText = gBallSize
}