'use strict'

function getBallIdx(elBall) {

  if (elBall.classList.contains('ball1')) {
    return 0
  } else if (elBall.classList.contains('ball2')) {
    return 1
  }

  return null
}

function getElBall(ball) {
  const elBall = document.querySelector(`.ball${ball.id}`)
  return elBall
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}