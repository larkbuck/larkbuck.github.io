'use strict';

let state = 'title';
let cnv;
let points = 0;
let bars = [];
let w = 400;
let h = 800;
let backgroundSpeed = 1;
let backgroundY1 = 0;
let backgroundY2;
let numBars = 6
let imgHeight = 200;


function preload() {

  // load bar images into array
  for (let i = 0; i <= 7; i++) {
    bars[i] = loadImage(`assets/bars/bars_${i}.png`);
  }
}

function setup() {
  cnv = createCanvas(w, h);

  backgroundY2 = -(imgHeight * numBars);

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
  background(100);



  for (let i = 0; i < numBars; i++) {
    image(bars[i], 0, backgroundY1 + i * imgHeight);
    image(bars[i], 0, backgroundY2 + i * imgHeight);
  }

  backgroundY1 += backgroundSpeed;
  backgroundY2 += backgroundSpeed;

  if (backgroundY1 > imgHeight * numBars) {
    backgroundY1 = -imgHeight * numBars;
  }
  if (backgroundY2 > imgHeight * numBars) {
    backgroundY2 = -imgHeight * numBars;
  }



  textSize(80);
  stroke(255);
  text('MY GAME', 100, 100);

  textSize(30);
  text('click anywhere to start', 100, 300);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}


function level1() {
  background(50, 150, 200);
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
