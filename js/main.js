'use strict'

var gBall1Size = 100
var gBall2Size = 100

function onBallClick(elBall, maxDiameter) {
  var currBallSize
  if (elBall.classList.contains('ball1')) {
    currBallSize = gBall1Size
  } else if (elBall.classList.contains('ball2')) {
    currBallSize = gBall2Size
  }

  const randSize = getRandomIntInclusive(20,60)
  currBallSize = currBallSize + randSize
  if (currBallSize >= maxDiameter) {
    currBallSize = 100
  }

  elBall.style.width = currBallSize + 'px'
  elBall.style.height = currBallSize + 'px'
  elBall.innerText = currBallSize
  elBall.style.backgroundColor = getRandomColor()
  if (elBall.classList.contains('ball1')) {
    gBall1Size = currBallSize
  } else if (elBall.classList.contains('ball2')) {
    gBall2Size = currBallSize
  }
}