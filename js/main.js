'use strict'

const gBalls = []
gBalls[0] = { id: 1, color: 'orange', size: 100 }
gBalls[1] = { id: 2, color: 'lightseagreen', size: 100 }

function onBallClick(elBall, maxDiameter) {
  const ball = gBalls[getBallIdx(elBall)]

  const randSize = getRandomIntInclusive(20, 60)
  changeBallSize(ball, randSize)

  if (ball.size >= maxDiameter) {
    ball.size = 100

    elBall.style.width = ball.size + 'px'
    elBall.style.height = ball.size + 'px'
    elBall.innerText = ball.size
  }

  changeBallColor(ball, getRandomColor())
}

function changeBallSize(ball, changeValue) {
  ball.size += changeValue

  const elBall = getElBall(ball)
  elBall.style.width = ball.size + 'px'
  elBall.style.height = ball.size + 'px'
  elBall.innerText = ball.size
}

function changeBallColor(ball, newColor) {
  ball.color = newColor
  const elBall = getElBall(ball)
  elBall.style.backgroundColor = ball.color
}

function onSwap() {
  const tempBall = {}
  const ball1 = gBalls[0]
  const ball2 = gBalls[1]

  tempBall.size = ball1.size
  tempBall.color = ball1.color

  changeBallSize(ball1, (ball2.size - ball1.size))
  changeBallColor(ball1, ball2.color)

  changeBallSize(ball2, tempBall.size - ball2.size)
  changeBallColor(ball2, tempBall.color)
}

function onShrinkBalls() {
    for (var i = 0; i < gBalls.length; i++) {
      const currBall = gBalls[i]
      changeBallSize(currBall, -getRandomIntInclusive(20, 60))

      if (currBall.size < 100) {
        currBall.size = 100
        const elBall = getElBall(currBall)
        elBall.style.width = currBall.size + 'px'
        elBall.style.height = currBall.size + 'px'
        elBall.innerText = currBall.size
      }
    }
}

function onChangeBackground() {
  const elBody = document.querySelector('body')
  elBody.style.backgroundColor = getRandomColor()
}