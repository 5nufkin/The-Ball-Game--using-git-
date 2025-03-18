'use strict'

var gBallSize = 100

function onBallClick(elBall) {
  gBallSize = gBallSize + 50
  if (gBallSize === 450) {
    gBallSize = 100
  }
  elBall.style.width = gBallSize + 'px'
  elBall.style.height = gBallSize + 'px'
  elBall.innerText = gBallSize
}