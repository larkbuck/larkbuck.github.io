'use strict';

let state = 'title';
let cnv;
let points = 0;
let bars = [];
let w = 800;
let h = 600;


function preload() {

  // load bar images into array
  for (let i = 0; i <= 7; i++) {
    bars[i] = loadImage(`assets/bars/bars_${i}.png`);
  }
}

function setup() {
  cnv = createCanvas(w, h);

}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }

}


function title() {
    background(0);

  for (let i = 0; i < 3; i++) {
    image(bars[i + 2], 0, i * 200);
  }


  textSize(80);
  textFont('monospace');
  // stroke(255);
  text('MY GAME', 10, 90);

  textSize(28);
  text(`click anywhere
    to start`, 400, 90);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}


function level1() {
  background(0);
  image(bars[0], 0, 0);

  fill(255);
  text('click for points', 0, height - 30);
}

function level1MouseClicked() {
  points++;
  console.log('points = ' + points);

  if (points >= 10) {
    state = 'you win';
  }
}

function youWin() {
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN', 100, 100);

  textSize(30);
  text('click anywhere to restart', 100, 300);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
