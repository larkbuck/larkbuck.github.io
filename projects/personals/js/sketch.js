let personalsP5Instance_1 = function(p) { // p could be any variable name

  p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");

  p.mouseIsClickedHere = false;

  p.setup = function() {
    p.canvasDiv = document.querySelector("#p5Canvas_1");

    // p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetHeight);
    p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetWidth * 2 / 3);
    // p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetHeight);
    // p.canvas.style("z-index: 5;");
    // p.canvas.mousePressed(localMouseClicked);
    // p.canvas.mouseReleased(localMouseUp);



    p.frameRate(30);

    // eraseButton.addEventListener("click", p.eraseCanvas);


    // p.redTall = p.createSprite(p.width * 3 / 4, p.height / 2, 200, 101);
    // p.redTall.addAnimation('breathe', 'assets/redTall_lg/redTall_0.png', 'assets/redTall_lg/redTall_20.png');
    //
    // p.blueCrystal = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.blueCrystal.addAnimation('breathe', 'assets/blueCrystal_med/blue_0.png', 'assets/blueCrystal_med/blue_24.png');
    //
    // p.blueSpike = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.blueSpike.addAnimation('breathe', 'assets/blueSpike_med/blueSpike_0.png', 'assets/blueSpike_med/blueSpike_24.png');

    p.pinkGreenSpike = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    p.pinkGreenSpike.addAnimation('breathe', 'assets/pinkGreenSpike_med/pinkGreenSpike_0.png', 'assets/pinkGreenSpike_med/pinkGreenSpike_36.png');

    // p.purple = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.purple.addAnimation('breathe', 'assets/purple_med/purple_0.png', 'assets/purple_med/purple_20.png');
    //
    // p.red = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.red.addAnimation('breathe', 'assets/red_med/red_0.png', 'assets/red_med/red_31.png');
    //
    //
    // p.yellow = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.yellow.addAnimation('breathe', 'assets/yellow_lg/yellowLg_0.png', 'assets/yellow_lg/yellowLg_20.png');
    //
    // p.yellowLong = p.createSprite(p.width / 2 + 300, p.height / 2, 0, 0);
    // p.yellowLong.addAnimation('breathe', 'assets/yellowLong_lg/yellowLong_0.png', 'assets/yellowLong_lg/yellowLong_20.png');

  };

  p.draw = function() {
    // p.background(155);

    p.clear();

    // drawSprite(kaleida);
    p.drawSprites();


  };

  p.windowResized = function() {

    p.resizeCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetWidth * 2 / 3);

  }


  p.localMouseClicked = function() {
    console.log("hey")
    p.mouseIsClickedHere = true;
  }

  p.localMouseUp = function() {
    console.log("bye")
    p.mouseIsClickedHere = false;
  }
};

let personalsCanvas_1 = new p5(personalsP5Instance_1, 'p5Canvas_1');

let personalsP5Instance_2 = function(p) { // p could be any variable name

  p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");

  p.mouseIsClickedHere = false;

  p.setup = function() {
    p.canvasDiv = document.querySelector("#p5Canvas_2");

    // p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetHeight);
    p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetWidth * 2 / 3);
    // p.canvas = p.createCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetHeight);
    // p.canvas.style("z-index: 5;");
    // p.canvas.mousePressed(localMouseClicked);
    // p.canvas.mouseReleased(localMouseUp);



    p.frameRate(30);

    // eraseButton.addEventListener("click", p.eraseCanvas);


    // p.redTall = p.createSprite(p.width * 3 / 4, p.height / 2, 200, 101);
    // p.redTall.addAnimation('breathe', 'assets/redTall_lg/redTall_0.png', 'assets/redTall_lg/redTall_20.png');
    //
    // p.blueCrystal = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.blueCrystal.addAnimation('breathe', 'assets/blueCrystal_med/blue_0.png', 'assets/blueCrystal_med/blue_24.png');
    //
    // p.blueSpike = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.blueSpike.addAnimation('breathe', 'assets/blueSpike_med/blueSpike_0.png', 'assets/blueSpike_med/blueSpike_24.png');

    // p.pinkGreenSpike = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.pinkGreenSpike.addAnimation('breathe', 'assets/pinkGreenSpike_med/pinkGreenSpike_0.png', 'assets/pinkGreenSpike_med/pinkGreenSpike_36.png');

    p.purple = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    p.purple.addAnimation('breathe', 'assets/purple_med/purple_0.png', 'assets/purple_med/purple_20.png');

    // p.red = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.red.addAnimation('breathe', 'assets/red_med/red_0.png', 'assets/red_med/red_31.png');
    //
    //
    // p.yellow = p.createSprite(p.width / 2, p.height / 2, 0, 0);
    // p.yellow.addAnimation('breathe', 'assets/yellow_lg/yellowLg_0.png', 'assets/yellow_lg/yellowLg_20.png');
    //
    // p.yellowLong = p.createSprite(p.width / 2 + 300, p.height / 2, 0, 0);
    // p.yellowLong.addAnimation('breathe', 'assets/yellowLong_lg/yellowLong_0.png', 'assets/yellowLong_lg/yellowLong_20.png');

  };

  p.draw = function() {
    // p.background(155);

    p.clear();

    // drawSprite(kaleida);
    p.drawSprites();


  };

  p.windowResized = function() {

    p.resizeCanvas(p.canvasDiv.offsetWidth, p.canvasDiv.offsetWidth * 2 / 3);

  }


  p.localMouseClicked = function() {
    console.log("hey")
    p.mouseIsClickedHere = true;
  }

  p.localMouseUp = function() {
    console.log("bye")
    p.mouseIsClickedHere = false;
  }
};

let personalsCanvas_2 = new p5(personalsP5Instance_2, 'p5Canvas_2');
