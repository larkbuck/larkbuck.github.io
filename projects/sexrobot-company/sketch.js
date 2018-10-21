"use strict";

let dolls;
let onDolls;
let popper;
let bubbleArray = [];
let numOfBubbles = 69;



function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('bgCanvas');
  // background(0);

  // pop ups
  dolls = document.querySelector('#dolls');
  onDolls = document.querySelector('#onDolls');

  popper = new Popper(dolls, onDolls, {
    placement: 'bottom',
  });

  dolls.addEventListener("mouseenter", function() {
    onDolls.style.display = "block";
  })
  dolls.addEventListener("mouseleave", function() {
    onDolls.style.display = "none";
  })


  // bubble animation
  for (let i = 0; i < numOfBubbles; i++) {
    bubbleArray.push(new Bubble());
  }



}

function draw() {
  clear();

  noStroke();
  for (let i = 0; i < numOfBubbles; i++) {
    bubbleArray[i].drawBubble();

    bubbleArray[i].moveBubble();

    bubbleArray[i].checkBounds();
  }



}




  class Bubble {
    constructor() {
      this.x = random(0, windowWidth);
      this.y = random(windowHeight + 50, windowHeight * 2);
      this.speedX = 0;
      this.speedY = 0;
      this.accelX = 0;
      this.accelY = random(-0.0020, -0.0010);
      this.diam = random(1, 3);
      this.c = color(random(222, 255), random(222, 255), random(222, 255));
    }

    drawBubble() {
      noStroke();
      fill(this.c);
      ellipse(this.x, this.y, this.diam, this.diam);
    }

    moveBubble() {
      this.y = this.y + this.speedY;
      this.speedY = this.speedY + this.accelY;

      this.x = this.x + this.speedX;
      this.speedX = this.speedX + this.accelX;

      // Select a random amount to change the accelX.
      // This will produce a gentle wiggle effect.
      this.accelX += random(-0.00005, 0.00005);

      this.diam = this.diam + 0.01;
    }

    checkBounds() {
      if (this.y < -50) {
        this.y = random(windowHeight + 10, windowHeight + 200);
        this.speedY = 0;
        this.x = random(0, windowWidth);
        this.diam = random(1, 3);
        this.speedX = 0;
        this.accelX = 0;
        this.c = color(random(222, 255), random(222, 255), random(222, 255));
      }
    }
  }



  let canvasDivInstance = function(p) { // p could be any variable name

    p.canvas;

    p.setup = function() {
      p.canvas = p.createCanvas(400, 300);
      // p.canvas.class("gameCanvas");
      // p.canvas.id("breakoutGameCanvas");
      // p.canvas.style("z-index: 5;");

      p.frameRate(30);
      p.background(0);



    };

    p.draw = function() {

    };

  };

  let canvasDiv = new p5(canvasDivInstance, 'canvasDiv');
