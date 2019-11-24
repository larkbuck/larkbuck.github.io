'use strict';

let state = 'title';
let cnv;
let points = 0;
let bars = [];


function preload(){
  for (let i = 0; i <= 7; i++){
    bars[i] = loadImage(`assets/bars/bars_${i}`);
  }
}

function setup() {
  cnv = createCanvas(600, 600);

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

  if (points >= 10){
    state = 'you win';
  }
}

function youWin(){
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN', 100, 100);

  textSize(30);
  text('click anywhere to restart', 100, 300);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
