// voice using  p5.speech library http://ability.nyu.edu/p5.js-speech/


// ideas
// light candle... scroll down = ascii drawings

'use strict';
let candleP5Instance = function(p) { // p could be any variable name

  p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");

  // p.mouseIsClickedHere = false;

  p.fireElemLenght = 6;
  p.elemOpacity = 255;

  p.fireLines = [];
  p.fireWidth = 0;
  p.fireHeight = 0;

  p.nbColors = 255; // Nb Colors in the p.palette
  p.palette = []; // our color palette for the fire


  p.setup = function() {
    p.canvasDiv = document.querySelector("#candleP5Canvas");

    // console.log(p.canvasDiv.offsetWidth)

    p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetWidth * 2);
    // p.canvas = p.createCanvas(400, 400);
    // p.canvas = p.createCanvas(windowWidth/3, windowHeight/2);


    // p.canvas.style("z-index: 5;");
    // p.canvas.mousePressed(localMouseClicked);
    // p.canvas.mouseReleased(localMouseUp);



    p.frameRate(30);

    // eraseButton.addEventListener("click", p.eraseCanvas);

    // 2D Fire: init size of fire
    p.fireWidth = p.int(p.width / p.fireElemLenght);
    p.fireHeight = p.int(p.height / p.fireElemLenght);
    // console.log(p.fireWidth + ", " + p.fireHeight);

    // for each p.fire's 'lines'
    for (var i = 0; i < p.fireHeight; i++) {
      p.fireLines[i] = []; // create the new line of p.fire pixels

      for (var x = 0; x < p.fireWidth; x++)
        p.fireLines[i][x] = 0; // Initialize to black
    }

    // generate fire colors palette
    p.initializePalette();

    // set black background
    p.background(0, 0, 0);
    p.noStroke();
  };

  p.draw = function() {
    // p.clear();
    // p.background(0);

    if (candleBurning) {
      // We generate a new base fire line (to make it 'move')
      p.initFireLine();

      // Compute the whole fire pixels
      p.fireGrow();

      // Display the result
      p.drawFire();
    } else {
      p.clear();
    }

  };

  p.windowResized = function() {

    p.resizeCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetWidth * 2);
    // p.resizeCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetWidth * 2 / 3);

  }


  // p.localMouseClicked = function() {
  //   console.log("hey")
  //   p.mouseIsClickedHere = true;
  // }
  //
  // p.localMouseUp = function() {
  //   console.log("bye")
  //   p.mouseIsClickedHere = false;
  // }

  // ======================================
  // > Initialize Palette mehtod
  // You can update this process to change the fire colors
  // ======================================
  p.initializePalette = function() {
    // generate our 255 color palette
    // try to change colors composing the fire
    for (var i = 0; i < p.nbColors; i++) {
      var val = exp(i / 10) - 1;

      let red = map(val, 0, exp(7.5), 0, 255);
      let green = map(val, 0, exp(10), 80, 255);
      let blue = random(150, 255);
      // let red = map(val, 0, exp(7.5), 0, 255);
      // let green = map(val, 0, exp(10), 0, 255);
      // let blue = random(50);

      if (green > 254) // check for colors range
      {
        red = 255;
        green = 255;
        blue = 255;
      }

      // check/erase for 'noisy' blue pixels
      if (red < 20 && green < 20) {
        red = green = blue = 0;
      }

      // add new color
      p.palette[i] = color(red, green, blue, p.elemOpacity);
    }
  }


  // ======================================
  // > initFireLine() method
  // Make a new base fire line (randomly, to make the fire 'move' when it grows)
  // Remark: Y axis is inverter on our screens ==> baseY = fireHeight-1
  // ======================================
  p.initFireLine = function() {
    // generate fire base (1st line) color ('randomly')
    for (let x = 0; x < p.fireWidth; x++) {
      p.fireLines[p.fireHeight - 1][x] = random(0, p.nbColors);
      p.fireLines[p.fireHeight - 2][x] = random(0, p.nbColors);
      p.fireLines[p.fireHeight - 3][x] = random(0, 100);
    }
  }


  // ======================================
  // > fireGrow() method
  // Compute the whole fire, line by line. Start after the base line
  // We compute each pixel color from its neighbors (a kind of median)
  // It gives a blurry effect
  // ======================================
  p.fireGrow = function() {

    // for each fire line
    for (let y = p.fireHeight - 2; y >= 1; y--) {

      // compute new fire color line
      // based on the bottom & top lines
      for (let x = 1; x < p.fireWidth - 1; x++) {
        // Get neighbors colors
        let c1 = p.fireLines[y + 1][x];
        let c2 = p.fireLines[y][x - 1];
        let c3 = p.fireLines[y][x + 1];
        let c4 = p.fireLines[y - 1][x];
        let c5 = p.fireLines[y][x];

        // We make a 'median' color
        let newCol = int((c1 + c2 + c3 + c4 + c5) / 5) - 1;
        p.fireLines[y - 1][x] = newCol;
      }
    }
  }


  // ======================================
  // > drawFire() method
  // Drawing pass - to draw the fire from its computed matrix
  //
  // ======================================
  p.drawFire = function() {

    // foreach fire lines
    for (let y = p.fireHeight - 1; y > 0; y--) {
      // foreach pixel in the line
      for (let x = 0; x < p.fireWidth - 1; x++) {
        // get current pixel color index
        let idx = int(p.fireLines[y][x]);

        // check for color index limits
        if (idx < 0) idx = 0;
        if (idx >= p.nbColors) idx = p.nbColors - 1;

        // apply current pixel color
        p.fill(p.palette[idx]);

        // Draw a square representing the current fire's pixel
        p.rect(int(x * p.fireElemLenght - (p.fireElemLenght / 2)),
          int(y * p.fireElemLenght + (p.fireElemLenght / 2)),
          p.fireElemLenght * 2,
          p.fireElemLenght * 2);
      }

    }

  }
};

let candleCanvas = new p5(candleP5Instance, 'candleP5Canvas');
