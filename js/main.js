'use strict'

const gBalls = []
gBalls[0] = { id: 1, color: 'orange', size: 100 }
gBalls[1] = { id: 2, color: 'lightseagreen', size: 100 }
gBalls[2] = { id: 3, color: 'steelblue', size: 100 }

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

  changeBallSize(ball1, (ball2.size-ball1.size))
  changeBallColor(ball1, ball2.color)

  changeBallSize(ball2, tempBall.size-ball2.size)
  changeBallColor(ball2, tempBall.color)
}