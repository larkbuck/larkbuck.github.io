// voice using  p5.speech library http://ability.nyu.edu/p5.js-speech/


// ideas
// light candle... scroll down = ascii drawings

'use strict';
let bgP5Instance = function(p) { // p could be any variable name

  p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");

  // p.mouseIsClickedHere = false;



  p.setup = function() {

    p.frameRate(1);
    p.colorMode(HSL);
    p.noStroke();

    // p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetHeight);
    p.canvas = p.createCanvas(windowWidth, windowHeight);
    console.log(`width = ${windowWidth}, height is ${windowHeight}`)
    // p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetHeight);


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



    if (spell) {
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

let bgCanvas = new p5(bgP5Instance, 'bgP5Canvas');
