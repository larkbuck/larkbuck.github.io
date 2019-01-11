// voice using  p5.speech library http://ability.nyu.edu/p5.js-speech/


// ideas
// light candle... scroll down = ascii drawings

'use strict';
let magicBackP5Canvas = function(p) { // p could be any variable name

  p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");

  // p.mouseIsClickedHere = false;



  p.setup = function() {

    p.frameRate(12);
    p.colorMode(HSL);
    p.noStroke();

    p.canvasDiv = document.querySelector("#yourPlace");
    p.canvas = p.createCanvas(p.canvasDiv.clientWidth, p.canvasDiv.clientHeight);
    // p.canvas = p.createCanvas(windowWidth, windowHeight);
    // p.canvas = p.createCanvas(p.canvasDiv.clientWidth, p.canvasDiv.clientHeight);


    p.numCells = 50;
    p.size = p.width / p.numCells;
    p.numCellsY = p.height / p.size;
    // p.canvas.style("z-index: 5;");
    // p.canvas.mousePressed(localMouseClicked);
    // p.canvas.mouseReleased(localMouseUp);

    // eraseButton.addEventListener("click", p.eraseCanvas);

    // draw back
    for (let i = 0; i < p.numCells; i++) {
      for (let j = 0; j < p.numCellsY; j++) {
        let n = p.noise(i * p.random(.90) / 20, j / 10);
        let li = p.map(n, 0, 1, 0, 100);
        let hu = p.map(n, 0, 1, 0, 360);
        // console.log(n);
        // for fire hue
        // let li = map(n, 0, 1, 0, 100);
        // let hu = map(n, 0, 1, 0, 60);
        p.fill(hu, 100, li);
        p.rect(i * p.size, j * p.size, p.size, p.size);
      }
    }
  };

  p.windowResized = function() {

    p.resizeCanvas(p.windowWidth, p.windowHeight);
    // draw back

    p.size = p.width / p.numCells;
    p.numCellsY = p.height / p.size;

    for (let i = 0; i < p.numCells; i++) {
      for (let j = 0; j < p.numCellsY; j++) {
        let n = noise(i * p.random(.4) / 10, j / 10);
        let li = map(n, 0, 1, 0, 100);
        let hu = map(n, 0, 1, 0, 360);

        // for fire hue
        // let li = map(n, 0, 1, 0, 100);
        // let hu = map(n, 0, 1, 0, 60);
        p.fill(hu, 100, li);
        p.rect(i * p.size, j * p.size, p.size, p.size);
      }
    }

  }

  p.draw = function() {
    // p.clear();




    for (let i = 0; i < p.numCells; i++) {
      for (let j = 0; j < p.numCellsY; j++) {
        let n = noise(i * p.random(.4) / 33, j / 2);
        let li = map(n, 0, 1, 20, 100);
        let hu = map(n, 0, 1, 250, 330);

        // for fire hue
        // let li = map(n, 0, 1, 0, 100);
        // let hu = map(n, 0, 1, 0, 60);
        p.fill(hu, 100, li);
        p.rect(i * p.size, j * p.size, p.size, p.size);
      }

    }

  };



  p.localMouseClicked = function() {
    console.log("clicked")
    p.mouseIsClickedHere = true;
  }

  p.localMouseUp = function() {
    console.log("clicked")
    p.mouseIsClickedHere = false;
  }
};


let yourPlaceCanvas = new p5(magicBackP5Canvas, 'yourPlaceP5Canvas');
